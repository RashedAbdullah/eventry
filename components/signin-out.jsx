"use client";

import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SigninOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const signOut = () => {
    setAuth(null);
    router.push("/signin");
  };
  return (
    <li>
      {auth ? (
        <>
          <span>{auth.name}</span>
          <span> </span>
          <button onClick={signOut}>Singout</button>
        </>
      ) : (
        <Link href="/signin">Login</Link>
      )}
    </li>
  );
};

export default SigninOut;
