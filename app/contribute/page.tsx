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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Upload, CheckCircle, Building2, Users } from "lucide-react"

const industries = [
  "Tự động hóa",
  "Sản xuất",
  "Công nghệ thông tin",
  "Logistics",
  "Năng lượng",
  "Môi trường",
  "Y tế",
  "Giáo dục",
]

export default function ContributePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    description: "",
    products: "",
    boothSize: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ xem xét và phản hồi trong vòng 24 giờ.",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Đăng ký thành công!</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Cảm ơn bạn đã đăng ký tham gia Industrial Expo2025. Chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong vòng 24
                giờ.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Mã đăng ký:</strong> IPEX2025-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Vui lòng lưu lại mã này để tra cứu trạng thái đăng ký.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild>
                  <a href="/">Về trang chủ</a>
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Đăng ký thêm
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tham gia Triển lãm</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Đăng ký gian hàng và trở thành đối tác của Industrial Expo2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Thông tin đăng ký</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Thông tin doanh nghiệp</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName">Tên công ty *</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Tên công ty/tổ chức"
                          />
                        </div>
                        <div>
                          <Label htmlFor="industry">Lĩnh vực hoạt động *</Label>
                          <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn lĩnh vực" />
                            </SelectTrigger>
                            <SelectContent>
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactName">Người liên hệ *</Label>
                          <Input
                            id="contactName"
                            name="contactName"
                            type="text"
                            required
                            value={formData.contactName}
                            onChange={handleChange}
                            placeholder="Họ và tên người liên hệ"
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
                            placeholder="email@company.com"
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
                        <div>
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://company.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Exhibition Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Thông tin triển lãm</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="description">Mô tả doanh nghiệp *</Label>
                          <Textarea
                            id="description"
                            name="description"
                            required
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Mô tả ngắn gọn về doanh nghiệp và hoạt động kinh doanh..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="products">Sản phẩm/Dịch vụ trưng bày *</Label>
                          <Textarea
                            id="products"
                            name="products"
                            required
                            value={formData.products}
                            onChange={handleChange}
                            placeholder="Mô tả các sản phẩm, dịch vụ sẽ trưng bày tại triển lãm..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label htmlFor="boothSize">Kích thước gian hàng mong muốn</Label>
                          <Select onValueChange={(value) => handleSelectChange("boothSize", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn kích thước gian hàng" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3x3">3m x 3m (9m²)</SelectItem>
                              <SelectItem value="3x6">3m x 6m (18m²)</SelectItem>
                              <SelectItem value="6x6">6m x 6m (36m²)</SelectItem>
                              <SelectItem value="custom">Kích thước khác</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Logo Upload */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Tài liệu đính kèm</h3>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Tải lên logo công ty và tài liệu giới thiệu
                        </p>
                        <p className="text-sm text-gray-500">Định dạng: PNG, JPG, PDF (Tối đa 10MB)</p>
                        <Button variant="outline" className="mt-4 bg-transparent">
                          Chọn tệp
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-ipex-green hover:bg-ipex-green/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Đang xử lý..." : "Gửi đăng ký"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="mr-2 h-5 w-5 text-ipex-green" />
                    Quyền lợi khi tham gia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gian hàng được thiết kế chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Hỗ trợ marketing và quảng bá</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Kết nối với hàng nghìn khách tham quan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Tham gia các hoạt động networking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-ipex-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Báo cáo chi tiết sau sự kiện</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-ipex-green" />
                    Thông tin quan trọng
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Thời gian triển lãm</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">15-17 tháng 3, 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hạn đăng ký</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">28 tháng 2, 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phí tham gia</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Từ 5,000,000 VNĐ/gian hàng</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hỗ trợ</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hotline: +84 270 123 4567
                      <br />
                      Email: exhibit@ipex2025.vn
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quy trình đăng ký</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ipex-green text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium">Gửi đăng ký</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Điền form và gửi hồ sơ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ipex-green text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium">Xem xét hồ sơ</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">BTC xem xét trong 24h</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ipex-green text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium">Xác nhận & thanh toán</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ký hợp đồng và thanh toán</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ipex-green text-white rounded-full flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium">Chuẩn bị triển lãm</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Thiết kế gian hàng và chuẩn bị</p>
                      </div>
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
