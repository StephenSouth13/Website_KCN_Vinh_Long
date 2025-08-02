import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, FileText, Calendar, TrendingUp, Eye } from "lucide-react"

const stats = [
  {
    title: "Tổng đăng ký",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Doanh nghiệp",
    value: "156",
    change: "+8%",
    icon: Building2,
    color: "text-green-600",
  },
  {
    title: "Bài viết",
    value: "45",
    change: "+3%",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    title: "Sự kiện",
    value: "28",
    change: "+5%",
    icon: Calendar,
    color: "text-orange-600",
  },
]

const recentActivities = [
  {
    id: 1,
    action: "Đăng ký mới",
    user: "Nguyễn Văn A",
    company: "ABC Technology",
    time: "2 phút trước",
  },
  {
    id: 2,
    action: "Doanh nghiệp mới",
    user: "XYZ Manufacturing",
    company: "Đã được duyệt",
    time: "15 phút trước",
  },
  {
    id: 3,
    action: "Bài viết mới",
    user: "Admin",
    company: "Công nghệ 4.0 trong sản xuất",
    time: "1 giờ trước",
  },
  {
    id: 4,
    action: "Liên hệ mới",
    user: "Trần Thị B",
    company: "Câu hỏi về triển lãm",
    time: "2 giờ trước",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tổng quan</h1>
        <p className="text-muted-foreground">Thống kê tổng quan hệ thống Industrial Expo2025</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> so với tháng trước
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-ipex-green rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} - {activity.company}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Thống kê nhanh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Lượt xem website</span>
                </div>
                <span className="text-sm font-medium">12,345</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Tăng trưởng đăng ký</span>
                </div>
                <span className="text-sm font-medium">+15%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">DN chờ duyệt</span>
                </div>
                <span className="text-sm font-medium">23</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Bài viết draft</span>
                </div>
                <span className="text-sm font-medium">8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
