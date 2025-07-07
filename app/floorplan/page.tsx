"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Search, MapPin, Building2, Filter } from "lucide-react"
import companies from "@/lib/mock/companies.json"

const industries = ["Tất cả", "Tự động hóa", "Sản xuất", "Công nghệ", "Logistics", "Năng lượng"]

export default function FloorplanPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("Tất cả")

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === "Tất cả" || company.industry === selectedIndustry
    return matchesSearch && matchesIndustry && company.status === "approved"
  })

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sơ đồ Triển lãm</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Khám phá bố cục triển lãm và tìm kiếm doanh nghiệp tham gia
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Interactive Floor Plan */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Sơ đồ Tương tác</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Sơ đồ triển lãm IPEX 2025"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Sơ đồ Tương tác</h3>
                      <p className="text-lg">Click vào các khu vực để xem chi tiết</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm doanh nghiệp..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    className={selectedIndustry === industry ? "bg-ipex-green hover:bg-ipex-green/90" : ""}
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {company.booth}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{company.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-ipex-green/10 text-ipex-green hover:bg-ipex-green/20">
                      {company.industry}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Building2 className="h-4 w-4 mr-1" />
                      Chi tiết
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Không tìm thấy doanh nghiệp
              </h3>
              <p className="text-gray-500">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
