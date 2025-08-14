"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World from Widget</h1>
        <Button size="sm">Button</Button>
        <Input className="w-44" />
        <p>{JSON.stringify(users, null, 2)}</p>
      </div>
    </div>
  );
}
