"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";

import { useUser } from "@/src/contex/user.provider";

export default function Sidebar() {
  const { user } = useUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <Image
            alt="Profile"
            height={100}
            src={user?.profilePhoto as string}
            width={100}
          />
        </div>

        <div className="my-3">
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="bteak-word text-sm">{user?.email}</p>
        </div>

        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>

      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={user?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
}
