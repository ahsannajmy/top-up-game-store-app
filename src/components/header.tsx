"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { deleteToken } from "@/lib/cookie-handler";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { useAuth } from "@/context/auth-context";

export const Header = () => {
  const { userPayload } = useAuth();
  return (
    <>
      <div className="p-4 w-full">
        <div className="flex flex-row items-center justify-between">
          <div>
            <div className="w-[300px] h-14 relative">
              <Image
                alt="logo-store"
                className="w-full h-full"
                fill
                priority
                src="/arthur-leywin-logo-main.png"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="#"></AvatarImage>
                  <AvatarFallback>
                    <Image
                      src="/avatar-placeholder.png"
                      alt="avatar-placeholder"
                      width={20}
                      height={20}
                      objectFit="cover"
                    ></Image>
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4 font-semibold">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <div className="flex flex-row items-center gap-2">
                      <Avatar>
                        <AvatarImage src="#"></AvatarImage>
                        <AvatarFallback>
                          <Image
                            src="/avatar-placeholder.png"
                            alt="avatar-placeholder"
                            width={20}
                            height={20}
                          ></Image>
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span>{userPayload?.sub}</span>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Button
                      className="w-16 h-10"
                      variant="destructive"
                      onClick={() => {
                        deleteToken();
                        toast.success("Logout successfull");
                        redirect("/admin/login");
                      }}
                    >
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};
