//main
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { decode } from "jsonwebtoken";

//service
// import authApi from "@/services/auth";

async function refreshAccessToken(session: any) {
  try {
    if (!session?.refreshToken) return { ...session };

    // const refreshTokenResponse = await authApi.refreshToken(
    //   session?.refreshToken
    // );
    // const { exp } = decode(refreshTokenResponse.accessToken) as {
    //   exp: number;
    // };

    return {
      ...session,
      // accessToken: refreshTokenResponse.accessToken,
      // accessTokenExpires: exp,
      // refreshToken: refreshTokenResponse.refreshToken,
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
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          // const authResponse = await authApi.signin(
          //   credentials?.username || "",
          //   credentials?.password || ""
          // );

          // if (!authResponse) return null;

          // const { exp } = decode(authResponse.accessToken || "") as {
          //   exp: number;
          // };

          const user = {
            id: "1", // Ensure id is a string
            name: "J Smith",
            email: "jsmith@example.com",
            accessToken: "dummyAccessToken", // Replace with authResponse.accessToken
            refreshToken: "dummyRefreshToken", // Replace with authResponse.refreshToken
            accessTokenExpires: Math.floor(Date.now() / 1000) + 60 * 60, // Replace with exp
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
        user: token,
        error: token?.error,
      };
    },
  },
};
export default authOptions;
