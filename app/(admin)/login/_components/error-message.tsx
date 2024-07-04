"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function ErrorMessage() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  if (!errorMessage) return null;
  return (
    <div className=" flex flex-row items-center text-destructive gap-2  border-destructive border rounded-lg w-full p-2 px-4">
      <AlertCircle className="h-4 w-4 " />
      <p>{errorMessage}</p>
    </div>
  );
}
