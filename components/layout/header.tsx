"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Edit } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Đăng ký", href: "/register" },
  { name: "Sơ đồ", href: "/floorplan" },
  { name: "Tin tức", href: "/news" },
  { name: "Lịch trình", href: "/schedule" },
  { name: "Thư viện", href: "/gallery" },
  { name: "Liên hệ", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cmsMode, setCmsMode] = useState(false)

  const toggleCmsMode = () => {
    setCmsMode(!cmsMode)
    if (!cmsMode) {
      // Check if user is admin
      const adminUser = localStorage.getItem("adminUser")
      if (!adminUser) {
        // Redirect to admin login if not logged in
        window.location.href = "/admin/login"
        return
      }
    }
    // Toggle CMS overlay
    document.body.classList.toggle("cms-editing-mode")
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ipex-green text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+84 270 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@ipex2025.vn</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCmsMode}
              className={`h-8 w-8 ${cmsMode ? "bg-orange-500 text-white hover:bg-orange-600" : ""}`}
              title="WordPress-style CMS Editor"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-ipex-green to-ipex-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">VL</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Industrial Expo2025</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Vĩnh Long</p>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-ipex-green dark:hover:text-ipex-green transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-ipex-blue hover:bg-ipex-blue/90">
              <Link href="/contribute">Tham gia triển lãm</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-ipex-green dark:hover:text-ipex-green transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-ipex-blue hover:bg-ipex-blue/90 mt-4">
                <Link href="/contribute">Tham gia triển lãm</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
