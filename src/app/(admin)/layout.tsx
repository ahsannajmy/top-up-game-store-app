import "@/app/globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Dashboard | %s",
    default: "Dashboard",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Separator />
      <div className="flex flex-row">
        <Sidebar />
        <div className="grow min-h-screen bg-border">{children}</div>
      </div>
    </>
  );
}
