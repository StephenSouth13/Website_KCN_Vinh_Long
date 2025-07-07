"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Gửi tin nhắn</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên"
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
                  </div>

                  <div>
                    <Label htmlFor="subject">Chủ đề *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Chủ đề tin nhắn"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Nhập nội dung tin nhắn..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-ipex-green hover:bg-ipex-green/90" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-ipex-green" />
                    Địa chỉ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Trung tâm Hội chợ Triển lãm Vĩnh Long
                    <br />
                    Số 123, Đường Nguyễn Huệ
                    <br />
                    Phường 1, Thành phố Vĩnh Long
                    <br />
                    Tỉnh Vĩnh Long, Việt Nam
                  </p>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Bản đồ Google Maps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-ipex-green" />
                    Thông tin liên hệ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-ipex-green" />
                    <div>
                      <p className="font-medium">Hotline</p>
                      <p className="text-gray-600 dark:text-gray-400">+84 270 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-ipex-green" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">info@ipex2025.vn</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-ipex-green" />
                    <div>
                      <p className="font-medium">Giờ làm việc</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thứ 2 - Thứ 6: 8:00 - 17:00
                        <br />
                        Thứ 7: 8:00 - 12:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Thông tin nhanh</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Đăng ký tham dự</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Miễn phí cho tất cả khách tham quan</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Đăng ký gian hàng</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Liên hệ để biết thêm chi tiết về giá và gói dịch vụ
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Hỗ trợ kỹ thuật</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Hỗ trợ 24/7 trong thời gian diễn ra triển lãm
                      </p>
                    </div>
                  </div>
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
