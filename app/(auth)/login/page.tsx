"use client";

import { Button } from "@/components/ui/button";
import api from "@/lib/appwrite";

const page = () => {
  const loginWithGoogle = async () => {
    try {
      const result = await api.auth.signupWithGoogle();
      if (result) {
        const user = await api.auth.getCurrentSession();
        console.log(user);
        alert("logueado con exito");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Login page</h1>
      <Button onClick={loginWithGoogle}>Login with Google</Button>
    </>
  );
};

export default page;
