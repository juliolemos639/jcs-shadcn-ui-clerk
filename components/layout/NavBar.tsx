"use client";

import { useRouter, usePathname, redirect } from "next/navigation";
import { Button } from "../ui/button";
import Container from "../Container";
import SearchInput from "../Searchinput";
import { ModeToggle } from "../theme-toggle";
import { useSession, signOut } from "next-auth/react";
import { AccessMenu } from "./AccessMenu";
import { LogOutIcon, MenuIcon } from "lucide-react";
import NavMenu from "./NavMenu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const NavBar = () => {
  const router = useRouter();
  const { data } = useSession();

  function handleLogout() {
    signOut({
      callbackUrl: "/",
    });
  }

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="font-extrabold">JCS</span>
            <span className="font-extralight italic">Imóveis</span>
          </div>

          <SearchInput />

          <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MenuIcon size={16} />
                  </Button>
                </SheetTrigger>

                <SheetContent className="p-0">
                  <NavMenu />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
