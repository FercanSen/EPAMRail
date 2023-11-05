import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Login = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-semibold text-center">
        {!isLoading && !user && <a href="/api/auth/login">Log in</a>}
      </h2>
      <form></form>
    </div>
  );
};

export default Login;
