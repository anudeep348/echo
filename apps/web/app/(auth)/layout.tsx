import { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default layout;
