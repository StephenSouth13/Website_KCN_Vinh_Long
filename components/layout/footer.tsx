import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-ipex-green to-ipex-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VL</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Industrial Expo2025</h3>
                <p className="text-sm text-gray-400">Vĩnh Long</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Triển lãm Quốc tế Khu Công nghiệp Vĩnh Long - Nơi kết nối công nghệ và đổi mới
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white transition-colors">
                  Đăng ký tham dự
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-400 hover:text-white transition-colors">
                  Tham gia triển lãm
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-white transition-colors">
                  Lịch trình
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/floorplan" className="text-gray-400 hover:text-white transition-colors">
                  Sơ đồ triển lãm
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Thư viện ảnh
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Hỗ trợ 24/7</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ipex-green mt-0.5" />
                <div>
                  <p className="text-gray-400">Trung tâm Hội chợ Triển lãm</p>
                  <p className="text-gray-400">Thành phố Vĩnh Long, Vĩnh Long</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ipex-green" />
                <p className="text-gray-400">+84 270 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ipex-green" />
                <p className="text-gray-400">info@ipex2025.vn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 VSM | Được phát triển bởi Phòng Công nghệ thông tin</p>
        </div>
      </div>
    </footer>
  )
}
