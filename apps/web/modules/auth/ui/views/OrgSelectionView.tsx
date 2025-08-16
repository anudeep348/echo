import { OrganizationList } from "@clerk/nextjs";

function OrgSelectionView() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  );
}

export default OrgSelectionView;
