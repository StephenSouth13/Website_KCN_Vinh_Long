"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Save, Globe, Mail, Shield, Database, Bell } from "lucide-react"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const [settings, setSettings] = useState({
    general: {
      siteName: "IPEX 2025 - Triển lãm Quốc tế KCN Vĩnh Long",
      siteDescription: "Triển lãm Quốc tế Khu Công nghiệp Vĩnh Long - Nơi kết nối công nghệ và đổi mới",
      siteUrl: "https://ipex2025.vn",
      adminEmail: "admin@ipex2025.vn",
      timezone: "Asia/Ho_Chi_Minh",
      language: "vi",
    },
    email: {
      smtpHost: "smtp.gmail.com",
      smtpPort: "587",
      smtpUser: "noreply@ipex2025.vn",
      smtpPassword: "••••••••",
      fromName: "IPEX 2025",
      fromEmail: "noreply@ipex2025.vn",
    },
    notifications: {
      newRegistration: true,
      newContact: true,
      newCompany: true,
      systemUpdates: false,
      emailNotifications: true,
      pushNotifications: false,
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: "30",
      maxLoginAttempts: "5",
      passwordExpiry: "90",
    },
  })

  const handleSave = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Lưu thành công!",
      description: "Cài đặt hệ thống đã được cập nhật.",
    })
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cài đặt Hệ thống</h1>
          <p className="text-muted-foreground">Quản lý cấu hình và tùy chọn hệ thống</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading} className="bg-ipex-green hover:bg-ipex-green/90">
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Đang lưu..." : "Lưu tất cả"}
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="security">Bảo mật</TabsTrigger>
          <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Thông tin Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteName">Tên website</Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, siteName: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="siteUrl">URL website</Label>
                  <Input
                    id="siteUrl"
                    value={settings.general.siteUrl}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, siteUrl: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="siteDescription">Mô tả website</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.general.siteDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, siteDescription: e.target.value },
                    })
                  }
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="adminEmail">Email quản trị</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={settings.general.adminEmail}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, adminEmail: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="timezone">Múi giờ</Label>
                  <Input
                    id="timezone"
                    value={settings.general.timezone}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, timezone: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="language">Ngôn ngữ</Label>
                  <Input
                    id="language"
                    value={settings.general.language}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, language: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Cấu hình Email SMTP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpHost">SMTP Host</Label>
                  <Input
                    id="smtpHost"
                    value={settings.email.smtpHost}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, smtpHost: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    value={settings.email.smtpPort}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, smtpPort: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtpUser">SMTP Username</Label>
                  <Input
                    id="smtpUser"
                    value={settings.email.smtpUser}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, smtpUser: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={settings.email.smtpPassword}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, smtpPassword: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fromName">Tên người gửi</Label>
                  <Input
                    id="fromName"
                    value={settings.email.fromName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, fromName: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="fromEmail">Email người gửi</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={settings.email.fromEmail}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        email: { ...settings.email, fromEmail: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="bg-transparent">
                  <Mail className="mr-2 h-4 w-4" />
                  Gửi email test
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Cài đặt Thông báo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Đăng ký mới</h4>
                    <p className="text-sm text-gray-600">Nhận thông báo khi có đăng ký tham dự mới</p>
                  </div>
                  <Switch
                    checked={settings.notifications.newRegistration}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, newRegistration: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Liên hệ mới</h4>
                    <p className="text-sm text-gray-600">Nhận thông báo khi có tin nhắn liên hệ mới</p>
                  </div>
                  <Switch
                    checked={settings.notifications.newContact}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, newContact: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Doanh nghiệp mới</h4>
                    <p className="text-sm text-gray-600">Nhận thông báo khi có doanh nghiệp đăng ký tham gia</p>
                  </div>
                  <Switch
                    checked={settings.notifications.newCompany}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, newCompany: checked },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Cập nhật hệ thống</h4>
                    <p className="text-sm text-gray-600">Nhận thông báo về các cập nhật hệ thống</p>
                  </div>
                  <Switch
                    checked={settings.notifications.systemUpdates}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, systemUpdates: checked },
                      })
                    }
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-4">Phương thức thông báo</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Email</h5>
                      <p className="text-sm text-gray-600">Gửi thông báo qua email</p>
                    </div>
                    <Switch
                      checked={settings.notifications.emailNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, emailNotifications: checked },
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Push Notification</h5>
                      <p className="text-sm text-gray-600">Hiển thị thông báo trên trình duyệt</p>
                    </div>
                    <Switch
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, pushNotifications: checked },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Cài đặt Bảo mật
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Xác thực 2 bước</h4>
                  <p className="text-sm text-gray-600">Bảo vệ tài khoản với xác thực 2 bước</p>
                </div>
                <Switch
                  checked={settings.security.twoFactorAuth}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      security: { ...settings.security, twoFactorAuth: checked },
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="sessionTimeout">Thời gian phiên (phút)</Label>
                  <Input
                    id="sessionTimeout"
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, sessionTimeout: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="maxLoginAttempts">Số lần đăng nhập tối đa</Label>
                  <Input
                    id="maxLoginAttempts"
                    value={settings.security.maxLoginAttempts}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, maxLoginAttempts: e.target.value },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="passwordExpiry">Hết hạn mật khẩu (ngày)</Label>
                  <Input
                    id="passwordExpiry"
                    value={settings.security.passwordExpiry}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordExpiry: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Cài đặt Nâng cao
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Cơ sở dữ liệu</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="bg-transparent">
                    <Database className="mr-2 h-4 w-4" />
                    Sao lưu dữ liệu
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Database className="mr-2 h-4 w-4" />
                    Khôi phục dữ liệu
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Cache & Performance</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Bật cache</h5>
                      <p className="text-sm text-gray-600">Tăng tốc độ tải trang</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Nén hình ảnh</h5>
                      <p className="text-sm text-gray-600">Tự động nén hình ảnh để tối ưu tốc độ</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">API & Integrations</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input id="apiKey" type="password" placeholder="••••••••••••••••" readOnly />
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Tạo API Key mới
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4 text-red-600">Vùng nguy hiểm</h4>
                <div className="space-y-3">
                  <Button variant="destructive" className="w-full">
                    Xóa tất cả dữ liệu cache
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Reset cài đặt về mặc định
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
