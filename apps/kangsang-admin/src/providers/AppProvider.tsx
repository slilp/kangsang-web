"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import MainLayout from "@/components/MainLayout";
import { setThemeStorage } from "@/utils/storage";
import LoadingLayout from "@/components/LoadingLayout";

interface UserAuthProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: UserAuthProviderProps) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if ((session as any)?.error) {
      setThemeStorage("light");
      signOut();
    }
  }, [session]);

  if (status === "loading") {
    return <LoadingLayout />;
  }

  if (status === "authenticated" && session) {
    return <MainLayout>{children}</MainLayout>;
  }

  return children;
};

export default AppProvider;
