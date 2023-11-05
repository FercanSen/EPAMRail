"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <div className={"flex w-full justify-between p-8 bg-red-500"}>
      {!isLoading && !user && (
        <a href="/api/auth/login?returnTo=/Fero">Log in</a>
      )}
      {user && (
        <>
          <p>{user.name}</p>
          <a href="/api/auth/logout">Log out</a>
        </>
      )}
    </div>
  );
};

export default NavBar;
