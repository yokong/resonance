import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <div className="min-h-screen  flex  items-center justify-center bg-background">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl={"/"}
        afterSelectOrganizationUrl={"/"}
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  );
}
