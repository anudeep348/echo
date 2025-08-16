import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";
import OrganizationGuard from "@/modules/auth/ui/components/OrganizationGuard";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
}

export default Layout;
