"use client";

import {
  House,
  LayoutDashboard,
  LucideIcon,
  ShoppingBasket,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  return (
    <>
      <div className="p-4 w-1/6 min-h-screen">
        <div className="flex flex-col gap-2 items-start">
          <SidebarMenu placeholder="Home" icon={House} link="/dashboard" />
          <SidebarMenu
            placeholder="Kategori"
            icon={LayoutDashboard}
            link="/dashboard/kategori"
          />
          <SidebarMenu
            placeholder="Layanan"
            icon={Wrench}
            link="/dashboard/layanan"
          />
          <SidebarMenu
            placeholder="Produk"
            icon={ShoppingBasket}
            link="dashboard/produk"
          />
        </div>
      </div>
    </>
  );
};

interface SidebarMenuProps {
  icon: LucideIcon;
  placeholder: string;
  link: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-row items-center gap-2  p-2 w-full rounded-md hover:bg-border hover:shadow-inner hover:shadow-foreground"
      onClick={() => router.push(props.link)}
    >
      <props.icon />
      <span className="font-semibold text-base">{props.placeholder}</span>
    </div>
  );
};
