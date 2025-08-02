"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CountdownTimer from "@/components/countdown-timer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Users, Building2, ArrowRight, Globe, Zap } from "lucide-react"

// Add these imports at the top
import { useState, useEffect } from "react"
import CMSOverlay from "@/components/cms-overlay"

const reasons = [
  {
    icon: Users,
    title: "Kết nối doanh nghiệp",
    description: "Gặp gỡ và kết nối với hơn 100 doanh nghiệp hàng đầu trong và ngoài nước",
  },
  {
    icon: Building2,
    title: "Công nghệ tiên tiến",
    description: "Khám phá những công nghệ 4.0 mới nhất trong sản xuất và quản lý",
  },
  {
    icon: Globe,
    title: "Thị trường quốc tế",
    description: "Mở rộng cơ hội xuất khẩu và hợp tác với các đối tác quốc tế",
  },
  {
    icon: Zap,
    title: "Đổi mới sáng tạo",
    description: "Tìm hiểu xu hướng đổi mới và ứng dụng công nghệ trong sản xuất",
  },
]

const partners = [
  { name: "Kiến văn", logo: "/logo/kienvan.png" },
  { name: "LG", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Panasonic", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Toyota", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Honda", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Mitsubishi", logo: "/placeholder.svg?height=60&width=120" },
]

const stats = [
  { number: "200+", label: "Doanh nghiệp tham gia" },
  { number: "15,000+", label: "Khách tham quan dự kiến" },
  { number: "50+", label: "Quốc gia và vùng lãnh thổ" },
  { number: "3", label: "Ngày triển lãm" },
]

export default function HomePage() {
  // Add this state and effect at the beginning of the component
  const [cmsMode, setCmsMode] = useState(false)

  useEffect(() => {
    const handleCMSToggle = () => {
      setCmsMode(document.body.classList.contains("cms-editing-mode"))
    }

    // Listen for CMS mode changes
    const observer = new MutationObserver(handleCMSToggle)
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src="/banners/banner.webp"
          alt="Vĩnh Long Industrial Park"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Hero section title: */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span data-cms-editable="hero-title-1">TRIỂN LÃM CUNG ỨNG KCN VĨNH LONG</span>
            <br />
            <span
              className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              data-cms-editable="hero-title-2"
            >
              KCN VĨNH LONG
            </span>
            <br />
    
          </h1>

          {/* Hero description: */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-cms-editable="hero-description">
            NGÀY SỰ KIỆN DIỄN RA : 01 - 03.11.2025
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-cms-editable="hero-description">
            Địa điểm: KCN Hòa Phú
          </p>

          <div className="mb-12">
            <p className="text-white/80 mb-6 text-lg">Sự kiện bắt đầu trong:</p>
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-ipex-green hover:bg-ipex-green/90 text-white px-8 py-4 text-lg">
              <Link href="/register">
                Đăng ký tham dự
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contribute">Tham gia triển lãm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-ipex-green mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Section titles: */}
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              data-cms-editable="reasons-title"
            >
              Tại sao nên tham gia sự kiện này?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Khám phá những lơi ích thiết thực khi tham gia sự kiện triển lãm quốc tế hàng đầu miền Tây.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-ipex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="h-8 w-8 text-ipex-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Đối tác chiến lược</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Những đơn vị hàng đầu đồng hành cùng sự kiện.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sẵn sàng tham gia Industrial Expo2025?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đừng bỏ lỡ cơ hội kết nối với hàng nghìn doanh nghiệp và khám phá những công nghệ tiên tiến nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Link href="/register">
                Đăng ký ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ipex-blue px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/about">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add the CMS overlay at the end before the closing div: */}
      <CMSOverlay isActive={cmsMode} onClose={() => setCmsMode(false)} />

      <Footer />
    </div>
  )
}
