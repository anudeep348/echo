import { PropsWithChildren } from "react";

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
