"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import {
  Save,
  Eye,
  Upload,
  Settings,
  Palette,
  Type,
  Layout,
  ImageIcon,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  RefreshCw,
} from "lucide-react"

export default function CMSPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [previewMode, setPreviewMode] = useState("desktop")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const [content, setContent] = useState({
    hero: {
      title1: "TRIỂN LÃM QUỐC TÉ",
      title2: "KCN VĨNH LONG",
      title3: "IPEX 2025",
      description: "Nơi kết nối công nghệ và đổi mới - Khám phá tương lai của ngành công nghiệp",
      backgroundImage: "/placeholder.svg?height=1080&width=1920",
      ctaText1: "Đăng ký tham dự",
      ctaText2: "Tham gia triển lãm",
    },
    about: {
      title: "Về IPEX 2025",
      description: "Triển lãm Quốc tế Khu Công nghiệp Vĩnh Long - Nơi hội tụ công nghệ và đổi mới",
      content:
        "Khu Công nghiệp Vĩnh Long là một trong những khu công nghiệp phát triển mạnh nhất tại vùng Đồng bằng sông Cửu Long...",
    },
    stats: [
      { number: "200+", label: "Doanh nghiệp tham gia" },
      { number: "15,000+", label: "Khách tham quan dự kiến" },
      { number: "50+", label: "Quốc gia và vùng lãnh thổ" },
      { number: "3", label: "Ngày triển lãm" },
    ],
    reasons: {
      title: "Tại sao nên tham gia IPEX 2025?",
      subtitle: "Khám phá những lý do khiến IPEX 2025 trở thành sự kiện không thể bỏ lỡ",
      items: [
        {
          title: "Kết nối doanh nghiệp",
          description: "Gặp gỡ và kết nối với hơn 200 doanh nghiệp hàng đầu trong và ngoài nước",
        },
        {
          title: "Công nghệ tiên tiến",
          description: "Khám phá những công nghệ 4.0 mới nhất trong sản xuất và quản lý",
        },
        {
          title: "Thị trường quốc tế",
          description: "Mở rộng cơ hội xuất khẩu và hợp tác với các đối tác quốc tế",
        },
        {
          title: "Đổi mới sáng tạo",
          description: "Tìm hiểu xu hướng đổi mới và ứng dụng công nghệ trong sản xuất",
        },
      ],
    },
    contact: {
      address:
        "Trung tâm Hội chợ Triển lãm Vĩnh Long\nSố 123, Đường Nguyễn Huệ\nPhường 1, Thành phố Vĩnh Long\nTỉnh Vĩnh Long, Việt Nam",
      phone: "+84 270 123 4567",
      email: "info@ipex2025.vn",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:00\nThứ 7: 8:00 - 12:00",
    },
  })

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Lưu thành công!",
      description: "Nội dung website đã được cập nhật.",
    })
    setIsLoading(false)
  }

  const handlePreview = () => {
    window.open("/", "_blank")
  }

  const sections = [
    { id: "hero", name: "Hero Section", icon: Layout },
    { id: "about", name: "Giới thiệu", icon: Type },
    { id: "stats", name: "Thống kê", icon: Settings },
    { id: "reasons", name: "Lý do tham gia", icon: Globe },
    { id: "contact", name: "Liên hệ", icon: Settings },
    { id: "media", name: "Hình ảnh", icon: ImageIcon },
    { id: "styling", name: "Giao diện", icon: Palette },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Quản lý Nội dung Website</h1>
          <p className="text-muted-foreground">Chỉnh sửa và cập nhật nội dung trang web IPEX 2025</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            <Button
              variant={previewMode === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("desktop")}
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={previewMode === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("tablet")}
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={previewMode === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("mobile")}
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2 h-4 w-4" />
            Xem trước
          </Button>
          <Button onClick={handleSave} disabled={isLoading} className="bg-ipex-green hover:bg-ipex-green/90">
            {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            {isLoading ? "Đang lưu..." : "Lưu thay đổi"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Sections</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <nav className="space-y-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeSection === section.id ? "bg-ipex-green hover:bg-ipex-green/90" : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.icon && <section.icon className="mr-2 h-4 w-4" />}
                  {section.name}
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Main Content Editor */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {sections.find((s) => s.id === activeSection)?.icon && <s.icon className="mr-2 h-5 w-5" />}
                {sections.find((s) => s.id === activeSection)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Hero Section Editor */}
              {activeSection === "hero" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hero-title1">Tiêu đề dòng 1</Label>
                      <Input
                        id="hero-title1"
                        value={content.hero.title1}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            hero: { ...content.hero, title1: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-title2">Tiêu đề dòng 2 (Highlight)</Label>
                      <Input
                        id="hero-title2"
                        value={content.hero.title2}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            hero: { ...content.hero, title2: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="hero-title3">Tiêu đề dòng 3</Label>
                    <Input
                      id="hero-title3"
                      value={content.hero.title3}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, title3: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="hero-description">Mô tả</Label>
                    <Textarea
                      id="hero-description"
                      value={content.hero.description}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, description: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cta1">Nút CTA 1</Label>
                      <Input
                        id="cta1"
                        value={content.hero.ctaText1}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            hero: { ...content.hero, ctaText1: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta2">Nút CTA 2</Label>
                      <Input
                        id="cta2"
                        value={content.hero.ctaText2}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            hero: { ...content.hero, ctaText2: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Hình nền Hero</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Tải lên hình nền mới</p>
                      <p className="text-sm text-gray-500">Kích thước khuyến nghị: 1920x1080px</p>
                      <Button variant="outline" className="mt-4 bg-transparent">
                        Chọn hình ảnh
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* About Section Editor */}
              {activeSection === "about" && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="about-title">Tiêu đề</Label>
                    <Input
                      id="about-title"
                      value={content.about.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, title: e.target.value },
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="about-description">Mô tả ngắn</Label>
                    <Textarea
                      id="about-description"
                      value={content.about.description}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, description: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="about-content">Nội dung chi tiết</Label>
                    <Textarea
                      id="about-content"
                      value={content.about.content}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, content: e.target.value },
                        })
                      }
                      rows={8}
                    />
                  </div>
                </div>
              )}

              {/* Stats Section Editor */}
              {activeSection === "stats" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Thống kê số liệu</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {content.stats.map((stat, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div>
                                <Label>Số liệu</Label>
                                <Input
                                  value={stat.number}
                                  onChange={(e) => {
                                    const newStats = [...content.stats]
                                    newStats[index].number = e.target.value
                                    setContent({ ...content, stats: newStats })
                                  }}
                                />
                              </div>
                              <div>
                                <Label>Nhãn</Label>
                                <Input
                                  value={stat.label}
                                  onChange={(e) => {
                                    const newStats = [...content.stats]
                                    newStats[index].label = e.target.value
                                    setContent({ ...content, stats: newStats })
                                  }}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Reasons Section Editor */}
              {activeSection === "reasons" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reasons-title">Tiêu đề chính</Label>
                      <Input
                        id="reasons-title"
                        value={content.reasons.title}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            reasons: { ...content.reasons, title: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="reasons-subtitle">Phụ đề</Label>
                      <Input
                        id="reasons-subtitle"
                        value={content.reasons.subtitle}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            reasons: { ...content.reasons, subtitle: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Các lý do</h3>
                    <div className="space-y-4">
                      {content.reasons.items.map((item, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div>
                                <Label>Tiêu đề</Label>
                                <Input
                                  value={item.title}
                                  onChange={(e) => {
                                    const newItems = [...content.reasons.items]
                                    newItems[index].title = e.target.value
                                    setContent({
                                      ...content,
                                      reasons: { ...content.reasons, items: newItems },
                                    })
                                  }}
                                />
                              </div>
                              <div>
                                <Label>Mô tả</Label>
                                <Textarea
                                  value={item.description}
                                  onChange={(e) => {
                                    const newItems = [...content.reasons.items]
                                    newItems[index].description = e.target.value
                                    setContent({
                                      ...content,
                                      reasons: { ...content.reasons, items: newItems },
                                    })
                                  }}
                                  rows={3}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section Editor */}
              {activeSection === "contact" && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="contact-address">Địa chỉ</Label>
                    <Textarea
                      id="contact-address"
                      value={content.contact.address}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: { ...content.contact, address: e.target.value },
                        })
                      }
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Số điện thoại</Label>
                      <Input
                        id="contact-phone"
                        value={content.contact.phone}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            contact: { ...content.contact, phone: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        value={content.contact.email}
                        onChange={(e) =>
                          setContent({
                            ...content,
                            contact: { ...content.contact, email: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-hours">Giờ làm việc</Label>
                    <Textarea
                      id="contact-hours"
                      value={content.contact.workingHours}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: { ...content.contact, workingHours: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Media Manager */}
              {activeSection === "media" && (
                <div className="space-y-6">
                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="upload">Tải lên</TabsTrigger>
                      <TabsTrigger value="gallery">Thư viện</TabsTrigger>
                      <TabsTrigger value="manage">Quản lý</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upload" className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Tải lên hình ảnh</h3>
                        <p className="text-gray-600 mb-4">Kéo thả hoặc click để chọn file</p>
                        <Button variant="outline" className="bg-transparent">
                          Chọn file
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="gallery" className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <Card key={i} className="overflow-hidden">
                            <div className="aspect-square bg-gray-200 flex items-center justify-center">
                              <ImageIcon className="h-8 w-8 text-gray-400" />
                            </div>
                            <CardContent className="p-2">
                              <p className="text-xs text-gray-600">image-{i}.jpg</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="manage" className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                              <ImageIcon className="h-6 w-6 text-gray-400" />
                            </div>
                            <div>
                              <p className="font-medium">hero-background.jpg</p>
                              <p className="text-sm text-gray-600">1920x1080 • 2.5MB</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">Đang sử dụng</Badge>
                            <Button variant="outline" size="sm">
                              Chỉnh sửa
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {/* Styling Options */}
              {activeSection === "styling" && (
                <div className="space-y-6">
                  <Tabs defaultValue="colors" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="colors">Màu sắc</TabsTrigger>
                      <TabsTrigger value="fonts">Font chữ</TabsTrigger>
                      <TabsTrigger value="layout">Bố cục</TabsTrigger>
                      <TabsTrigger value="effects">Hiệu ứng</TabsTrigger>
                    </TabsList>

                    <TabsContent value="colors" className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-ipex-green rounded-full mx-auto mb-2"></div>
                            <p className="text-sm font-medium">Primary</p>
                            <p className="text-xs text-gray-600">#059669</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-ipex-blue rounded-full mx-auto mb-2"></div>
                            <p className="text-sm font-medium">Secondary</p>
                            <p className="text-xs text-gray-600">#1e40af</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-ipex-red rounded-full mx-auto mb-2"></div>
                            <p className="text-sm font-medium">Accent</p>
                            <p className="text-xs text-gray-600">#dc2626</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-gray-900 rounded-full mx-auto mb-2"></div>
                            <p className="text-sm font-medium">Dark</p>
                            <p className="text-xs text-gray-600">#1f2937</p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="fonts" className="space-y-4">
                      <div className="space-y-4">
                        <Card>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Font chính</h3>
                            <p className="text-2xl font-bold">Poppins</p>
                            <p className="text-gray-600">Được sử dụng cho tiêu đề và văn bản quan trọng</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Font phụ</h3>
                            <p className="text-lg">Inter</p>
                            <p className="text-gray-600">Được sử dụng cho nội dung và văn bản thường</p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="layout" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Container Width</h3>
                            <Input defaultValue="1200px" />
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Section Spacing</h3>
                            <Input defaultValue="80px" />
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="effects" className="space-y-4">
                      <div className="space-y-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">Hiệu ứng Fade In</h3>
                                <p className="text-sm text-gray-600">Hiệu ứng xuất hiện từ từ</p>
                              </div>
                              <Badge variant="secondary">Đang bật</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold">Hiệu ứng Hover</h3>
                                <p className="text-sm text-gray-600">Hiệu ứng khi di chuột</p>
                              </div>
                              <Badge variant="secondary">Đang bật</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
