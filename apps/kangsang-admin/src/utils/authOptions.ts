//main
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { decode } from "jsonwebtoken";

//services
import authApi from "@/services/auth";

async function refreshAccessToken(session: any) {
  try {
    if (!session?.refreshToken) return { ...session };

    const refreshTokenResponse = await authApi.refreshToken(
      session?.refreshToken
    );
    const { exp } = decode(refreshTokenResponse.accessToken) as {
      exp: number;
    };

    return {
      ...session,
      accessToken: refreshTokenResponse.accessToken,
      accessTokenExpires: exp,
      refreshToken: refreshTokenResponse.refreshToken,
    };
  } catch (error: any) {
    console.log("RefreshAccessTokenError", error);
    return {
      ...session,
      error: "RefreshAccessTokenError",
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const authResponse = await authApi.login({
            email: credentials?.email || "",
            password: credentials?.password || "",
          });

          if (!authResponse) return null;

          const { exp } = decode(authResponse.accessToken || "") as {
            exp: number;
          };

          const user = {
            id: authResponse.userId,
            email: authResponse.email,
            accessToken: authResponse.accessToken,
            refreshToken: authResponse.refreshToken,
            accessTokenExpires: exp,
            displayName: authResponse.displayName,
          };
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      const now = Math.floor(Date.now() / 1000);
      const isExpired = now > token?.accessTokenExpires;
      if (!isExpired) {
        return { ...token, ...user };
      }
      return refreshAccessToken({ ...token, ...user });
    },
    async session({ session, token }: { session: any; token: any }) {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
          displayName: token.displayName,
          accessToken: token.accessToken,
        },
        error: token?.error,
      };
    },
  },
};
export default authOptions;
