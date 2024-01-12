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
import { ChevronsUpDown, Heart, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavMenu() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer gap-2 flex items-center"
          onClick={() => router.push("/hotel/new")}
        >
          <Plus size={15} /> <span>Adicione Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer gap-2 flex items-center"
          onClick={() => router.push("/my-favorites")}
        >
          <Heart size={15} /> <span>Meus favoritos</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="sm:hidden cursor-pointer gap-2 flex items-center"
          onClick={() => router.push("/search")}
        >
          <Search size={15} /> <span>Search</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
