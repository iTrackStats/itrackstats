"use client";
import { useAuth } from "@/contexts/AuthProvider";
import Link from "next/link";
import { Button } from "../ui/button";

const LoginButton = () => {
  const { user, loading, signout } = useAuth();

  if (loading) {
    return (
      <>
        <p>Loading...</p>
        <br />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Link href="/login">Login</Link>
        <br />
        <br />
      </>
    );
  }

  return (
    <>
      <div className="flex gap-2">
        <p>Hola, {user.name}</p>
        <Button onClick={signout}>Sign out</Button>
      </div>

      {user.labels.includes("staff") ? (
        <Link href="staff/tickets">Ver tickets</Link>
      ) : (
        ""
      )}
      <br />
    </>
  );
};

export default LoginButton;
