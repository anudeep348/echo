"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/AuthLayout";
import { PropsWithChildren } from "react";
import OrgSelectionView from "../views/OrgSelectionView";

function OrganizationGuard({ children }: PropsWithChildren) {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectionView />
      </AuthLayout>
    );
  }
  return <>{children}</>;
}

export default OrganizationGuard;
