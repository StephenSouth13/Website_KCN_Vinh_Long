"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Download, CheckCircle, Users, Calendar } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    position: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      position: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDownloadBrochure = () => {
    // Simulate download
    toast({
      title: "Đang tải xuống...",
      description: "Brochure IPEX 2025 sẽ được tải xuống trong giây lát.",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Đăng ký tham dự IPEX 2025</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Tham gia cùng hàng nghìn chuyên gia và doanh nghiệp hàng đầu
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Thông tin đăng ký</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Công ty/Tổ chức *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tên công ty hoặc tổ chức"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Chức vụ</Label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Chức vụ hiện tại"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+84 xxx xxx xxx"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-ipex-green hover:bg-ipex-green/90" disabled={isSubmitting}>
                    {isSubmitting ? "Đang xử lý..." : "Đăng ký tham dự"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <Button onClick={handleDownloadBrochure} variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Tải Brochure PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-ipex-green" />
                    Thông tin sự kiện
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Thời gian</h4>
                    <p className="text-gray-600 dark:text-gray-400">15-17 tháng 3, 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Địa điểm</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trung tâm Hội chợ Triển lãm Vĩnh Long
                      <br />
                      Thành phố Vĩnh Long, Vĩnh Long
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Giờ mở cửa</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      9:00 - 18:00 (Thứ 7 - Chủ nhật)
                      <br />
                      9:00 - 17:00 (Thứ 2)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-ipex-green" />
                    Quyền lợi khi tham dự
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span>Tham dự miễn phí tất cả các hoạt động</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span>Nhận tài liệu và quà tặng từ nhà tài trợ</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span>Kết nối với hàng trăm doanh nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span>Tham gia các hội thảo chuyên môn</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span>Ăn trưa miễn phí trong 3 ngày</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-ipex-green" />
                    Đối tượng tham dự
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Lãnh đạo doanh nghiệp và nhà quản lý</li>
                    <li>• Chuyên gia công nghệ và kỹ thuật</li>
                    <li>• Nhà đầu tư và đối tác kinh doanh</li>
                    <li>• Sinh viên và nghiên cứu sinh</li>
                    <li>• Cơ quan quản lý nhà nước</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
