"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MailCheck, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function AccessMenu() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          <LogInIcon size={15} /> Entrar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer gap-2 flex items-center"
          onClick={() => router.push("/signin")}
        >
          <MailCheck size={15} /> <span>Sign In</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer gap-2 flex items-center"
          onClick={() => router.push("/signup")}
        >
          <MailCheck size={15} /> <span>Sign Up</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
