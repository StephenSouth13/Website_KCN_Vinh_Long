"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Lock, User } from "lucide-react"

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (credentials.email === "admin@vsm.org.vn" && credentials.password === "123456") {
      localStorage.setItem("adminRole", "admin")
      localStorage.setItem(
        "adminUser",
        JSON.stringify({
          name: "Admin User",
          email: credentials.email,
          role: "admin",
        }),
      )

      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng bạn đến với VSM Admin Portal.",
      })

      router.push("/admin/dashboard")
    } else {
      toast({
        title: "Đăng nhập thất bại",
        description: "Email hoặc mật khẩu không chính xác.",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ipex-green to-ipex-blue flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-ipex-green to-ipex-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">VSM</span>
          </div>
          <CardTitle className="text-2xl font-bold">VSM Admin Portal</CardTitle>
          <p className="text-gray-600 dark:text-gray-400">Đăng nhập để quản lý hệ thống</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="admin@ipex2025.vn"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-ipex-green hover:bg-ipex-green/90" disabled={isLoading}>
              {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Demo credentials:</p>
            <p>Email: admin@vsm.org.vn</p>
            <p>Password: 123456</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
