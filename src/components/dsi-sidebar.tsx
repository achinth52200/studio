"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, BookUser, Calendar, GraduationCap, LayoutDashboard, LogOut, Sparkles, UserCheck } from "lucide-react"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/attendance", label: "Attendance", icon: UserCheck },
    { href: "/dashboard/grades", label: "Grades", icon: GraduationCap },
    { href: "/dashboard/timetable", label: "Timetable", icon: Calendar },
    { href: "/dashboard/recommendations", label: "Recommendations", icon: Sparkles },
]

export function DsiSidebar() {
    const pathname = usePathname();
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeader className="h-16 items-center justify-center">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg text-primary-foreground group-data-[collapsible=icon]:hidden">
                    <BookUser className="h-7 w-7 text-primary-foreground/90"/>
                    <span className="text-primary-foreground">DSI Connect</span>
                </Link>
                <BookUser className="h-7 w-7 text-primary-foreground/90 hidden group-data-[collapsible=icon]:block"/>
            </SidebarHeader>
            <SidebarContent className="p-2">
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild variant="default" size="default" isActive={pathname === item.href} tooltip={item.label}>
                                <Link href={item.href}>
                                    <item.icon />
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
