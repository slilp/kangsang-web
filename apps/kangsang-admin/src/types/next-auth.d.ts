import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string | null;
      refreshToken?: string | null;
      displayName?: string | null;
      error?: string | null;
      email?: string | null;
      id?: string | null;
    };
  }
}
