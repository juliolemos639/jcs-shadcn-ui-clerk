"use client";

import { useRouter, usePathname, redirect } from "next/navigation";
import { Button } from "../ui/button";
import Container from "../Container";
import SearchInput from "../Searchinput";
import { ModeToggle } from "../theme-toggle";
import { useSession, signOut } from "next-auth/react";
import { AccessMenu } from "./AccessMenu";
import { LogOutIcon } from "lucide-react";
import NavMenu from "./NavMenu";

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
              <NavMenu />
            </div>

            {!data?.user?.email && (
              // <>
              //   <Button
              //     onClick={() => router.push("/signin")}
              //     variant="outline"
              //     size="sm"
              //   >
              //     Sign in
              //   </Button>
              //   <Button
              //     onClick={() => router.push("/signup")}
              //     variant="destructive"
              //     size="sm"
              //   >
              //     Sign up
              //   </Button>
              // </>
              <AccessMenu />
            )}

            {data?.user?.email && (
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="gap-1"
              >
                <LogOutIcon size={15} /> Sair
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
