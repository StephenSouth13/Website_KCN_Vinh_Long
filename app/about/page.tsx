import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Target, Eye, Award, Users, Building, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Sứ mệnh",
    description:
      "Kết nối doanh nghiệp, thúc đẩy đổi mới sáng tạo và phát triển bền vững trong khu vực Đồng bằng sông Cửu Long",
  },
  {
    icon: Eye,
    title: "Tầm nhìn",
    description:
      "Trở thành triển lãm công nghiệp hàng đầu Việt Nam, cầu nối giữa các doanh nghiệp trong nước và quốc tế",
  },
  {
    icon: Award,
    title: "Giá trị cốt lõi",
    description: "Chất lượng, đổi mới, bền vững và hợp tác - những giá trị định hướng mọi hoạt động của chúng tôi",
  },
]

const achievements = [
  { number: "17+", label: "Năm hoạt động phát triển bền vững" },
  { number: "50+", label: "Doanh nghiệp đã thu hút đầu tư vào khu công nghiệp" },
  { number: "4+", label: "Quốc gia có dữ án đầu tư từ FDI" },
  { number: "1", label: "Triển lãm xúc tiến công nghiệp trọng điểm đầu tiên tại Vĩnh Long" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về INDUSTRIAL EXPO 2025</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Triển lãm Quốc tế Khu Công nghiệp Vĩnh Long - Nơi kết nối doanh nghiệp,phát triển thu hút đầu tư trong khu vực.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Khám phá INDUSTRIAL EXPO 2025</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Xem video giới thiệu về triển lãm và những hoạt động đặc sắc
              </p>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-ipex-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Video giới thiệu INDUSTRIAL EXPO 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tầm nhìn - Sứ mệnh - Giá trị
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-ipex-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-ipex-green" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Thành tựu đạt được</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Những con số ấn tượng qua các năm tổ chức</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-ipex-green mb-2">{achievement.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Vinh Long */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Về Khu Công nghiệp Vĩnh Long
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Khu Công nghiệp Vĩnh Long là một trong những khu công nghiệp phát triển mạnh nhất tại vùng Đồng bằng
                  sông Cửu Long, với vị trí địa lý thuận lợi và hạ tầng hiện đại.
                </p>
                <p>
                  Với diện tích hơn 1,000 hecta, KCN Vĩnh Long đã thu hút hàng trăm doanh nghiệp trong và ngoài nước đầu
                  tư, tạo việc làm cho hàng nghìn lao động địa phương.
                </p>
                <p>
                  Triển lãm Industrial Expo 2025 được tổ chức nhằm quảng bá tiềm năng phát triển của khu vực, kết nối các doanh
                  nghiệp và thúc đẩy ứng dụng công nghệ 4.0 trong sản xuất.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <Building className="h-8 w-8 text-ipex-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Doanh nghiệp</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-ipex-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lao động</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-ipex-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ngành sản xuất</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Khu Công nghiệp Vĩnh Long"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
