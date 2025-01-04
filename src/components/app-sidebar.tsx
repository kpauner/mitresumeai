import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Command, LifeBuoy, Send } from "lucide-react";
import { NavUser } from "@/features/auth/components/nav-user";
import { NavSecondary } from "./nav-secondary";

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Info",
      url: "/dashboard",
      icon: LifeBuoy,
    },
    {
      title: "Erfaring",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Uddannelse",
      url: "#",
      icon: Send,
    },
    {
      title: "Kompetencer",
      url: "#",
      icon: Send,
    },
  ],
  navSecondary: [
    {
      title: "Ansøgninger",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "CV",
      url: "/dashboard/resumes",
      icon: Send,
    },
  ],
  navFooter: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <ModeToggle />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary title="Profil" items={data.navMain} className="" />
        <NavSecondary title="Assistent" items={data.navSecondary} />
        <NavSecondary items={data.navFooter} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
