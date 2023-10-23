"use client";

import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavBar = () => {
  const { user, isLoading } = useUser();

  return (
    <div
      className={`flex w-full ${
        !isLoading && !user ? "justify-end" : "justify-between"
      } `}
    >
      {!isLoading && !user && <a href="/api/auth/login">Log in</a>}
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
