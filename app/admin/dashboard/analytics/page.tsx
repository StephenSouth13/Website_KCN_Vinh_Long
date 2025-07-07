"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Download,
  Calendar,
  BarChart3,
} from "lucide-react"

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Tổng lượt truy cập",
      value: "24,567",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-blue-600",
    },
    {
      title: "Khách truy cập duy nhất",
      value: "18,234",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Tỷ lệ thoát",
      value: "32.4%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-600",
    },
    {
      title: "Thời gian trung bình",
      value: "3m 24s",
      change: "+15.3%",
      trend: "up",
      icon: Clock,
      color: "text-purple-600",
    },
  ]

  const topPages = [
    { page: "/", views: "8,234", percentage: "33.5%" },
    { page: "/register", views: "3,456", percentage: "14.1%" },
    { page: "/about", views: "2,789", percentage: "11.3%" },
    { page: "/news", views: "2,234", percentage: "9.1%" },
    { page: "/schedule", views: "1,890", percentage: "7.7%" },
  ]

  const deviceStats = [
    { device: "Desktop", percentage: 45.2, icon: Monitor },
    { device: "Mobile", percentage: 38.7, icon: Smartphone },
    { device: "Tablet", percentage: 16.1, icon: Globe },
  ]

  const trafficSources = [
    { source: "Tìm kiếm trực tiếp", visitors: "8,234", percentage: "45.2%" },
    { source: "Google", visitors: "5,678", percentage: "31.1%" },
    { source: "Facebook", visitors: "2,345", percentage: "12.9%" },
    { source: "Email", visitors: "1,234", percentage: "6.8%" },
    { source: "Khác", visitors: "743", percentage: "4.0%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Thống kê & Phân tích</h1>
          <p className="text-muted-foreground">Theo dõi hiệu suất website và hành vi người dùng</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            30 ngày qua
          </Button>
          <Button className="bg-ipex-green hover:bg-ipex-green/90">
            <Download className="mr-2 h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-600" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                <span className="ml-1">so với tháng trước</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Lưu lượng truy cập theo thời gian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                <p>Biểu đồ lưu lượng truy cập</p>
                <p className="text-sm">Dữ liệu 30 ngày qua</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pages">Trang phổ biến</TabsTrigger>
          <TabsTrigger value="devices">Thiết bị</TabsTrigger>
          <TabsTrigger value="sources">Nguồn truy cập</TabsTrigger>
          <TabsTrigger value="realtime">Thời gian thực</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trang được xem nhiều nhất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-ipex-green/10 rounded-full flex items-center justify-center text-sm font-bold text-ipex-green">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{page.page}</p>
                        <p className="text-sm text-gray-600">{page.views} lượt xem</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{page.percentage}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thống kê theo thiết bị</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <device.icon className="h-6 w-6 text-ipex-green" />
                      <div>
                        <p className="font-medium">{device.device}</p>
                        <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-ipex-green h-2 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{device.percentage}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Nguồn lưu lượng truy cập</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{source.source}</p>
                      <p className="text-sm text-gray-600">{source.visitors} khách</p>
                    </div>
                    <Badge variant="secondary">{source.percentage}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="realtime" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Đang trực tuyến</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-ipex-green">127</div>
                <p className="text-sm text-gray-600">khách đang xem</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trang đang xem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">/</span>
                    <span className="text-sm font-medium">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">/register</span>
                    <span className="text-sm font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">/about</span>
                    <span className="text-sm font-medium">18</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hoạt động gần đây</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Khách mới từ Hà Nội</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Đăng ký mới</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Tải brochure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
