"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Container from "../Container";
import SearchInput from "../Searchinput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

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
              <NavMenu />
            </div>
            <UserButton afterSignOutUrl="/" />
            {!userId && (
              <>
                <Button
                  onClick={() => router.push("sign-in")}
                  variant="outline"
                  size="sm"
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => router.push("sign-up")}
                  variant="destructive"
                  size="sm"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
