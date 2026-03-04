import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardView } from "@/features/dashboard/views/dashboard-view";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return <DashboardView />;
}
