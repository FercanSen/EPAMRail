"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import NavBar from "./NavBar";
import Login from "./login/Login";

export default function Home() {
  const { user } = useUser();

  if (user) {
    return (
      <div>
        <NavBar />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Login />
    </main>
  );
}
