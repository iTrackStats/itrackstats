"use client";
import { useAuth } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading, signout } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <main className="dark:bg-main-bg-dark fixed flex h-screen w-screen items-center justify-center bg-[#17182E]">
        <BarLoader color={"white"} />
      </main>
    );
  } else {
    if (!user?.labels.includes("staff")) {
      router.push("/not-allowed");
    } else {
      return <>{children}</>;
    }
  }
}
