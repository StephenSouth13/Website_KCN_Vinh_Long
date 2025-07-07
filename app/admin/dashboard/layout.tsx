"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  BarChart3,
  FileText,
  Building2,
  Calendar,
  ImageIcon,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
} from "lucide-react"

const menuItems = [
  {
    title: "Tổng quan",
    url: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "Tin tức",
    url: "/admin/dashboard/news",
    icon: FileText,
  },
  {
    title: "Doanh nghiệp",
    url: "/admin/dashboard/companies",
    icon: Building2,
  },
  {
    title: "Lịch trình",
    url: "/admin/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "Thư viện ảnh",
    url: "/admin/dashboard/gallery",
    icon: ImageIcon,
  },
  {
    title: "Đăng ký tham dự",
    url: "/admin/dashboard/registrations",
    icon: Users,
  },
  {
    title: "Liên hệ",
    url: "/admin/dashboard/contact",
    icon: MessageSquare,
  },
  {
    title: "Cấu hình Website",
    url: "/admin/dashboard/config",
    icon: Settings,
  },
  {
    title: "Quản lý Người dùng",
    url: "/admin/dashboard/users",
    icon: Users,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    const adminRole = localStorage.getItem("adminRole")

    if (!adminUser || !adminRole) {
      router.push("/admin/login")
      return
    }

    setUser(JSON.parse(adminUser))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminUser")
    localStorage.removeItem("adminRole")
    router.push("/admin/login")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center space-x-3 px-2 py-4">
            <div className="w-10 h-10 bg-gradient-to-r from-ipex-green to-ipex-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">VSM</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Admin Portal</h2>
              <p className="text-sm text-muted-foreground">IPEX 2025</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu chính</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        {/* render the icon element, not the component object */}
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center space-x-3 px-2 py-2">
                <Avatar>
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
