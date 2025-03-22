import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string | null;
      refreshToken?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      phone?: string | null;
      accessTokenExpires?: number | null;
      error?: string | null;
      email?: string | null;
      id?: string | null;
    };
  }
}
