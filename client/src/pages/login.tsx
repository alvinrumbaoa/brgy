// pages/login.tsx
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already signed in
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div>
      <h1>Login</h1>
      {!session && (
        <button onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default LoginPage;
