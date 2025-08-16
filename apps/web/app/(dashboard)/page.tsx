"use client";

import { useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {
  const addUser = useMutation(api.users.addUser);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button
        onClick={() => {
          addUser();
        }}
      >
        Add
      </Button>
      <p className="max-w-sm w-full mx-auto">Apps/web</p>
    </div>
  );
}
