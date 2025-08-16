import { AuthLayout } from "@/modules/auth/ui/layouts/AuthLayout";
import { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default layout;
