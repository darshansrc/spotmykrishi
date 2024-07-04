"use client";
import React from "react";
import { Button } from "../ui/button";
import { logout } from "@/actions/supabase";
import { LogOut } from "lucide-react";
import { IconSpinner } from "./submit-form";

export default function LogoutButton() {
  const [loading, setLoading] = React.useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return (
    <Button
      onClick={handleLogout}
      variant={"outline"}
      className="text-destructive hover:text-destructive flex flex-row w-full items-center gap-2 border border-destructive  px-4 py-2 rounded-lg"
    >
      {loading ? (
        <IconSpinner className="h-4 w-4" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
      Logout
    </Button>
  );
}
