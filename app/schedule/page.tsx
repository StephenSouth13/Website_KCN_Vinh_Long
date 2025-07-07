"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User, Filter } from "lucide-react"
import scheduleData from "@/lib/mock/schedule.json"

const categories = ["Tất cả", "Lễ hội", "Hội thảo", "Workshop", "Networking"]
const days = ["2025-03-15", "2025-03-16", "2025-03-17"]

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("2025-03-15")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filteredEvents = scheduleData.filter((event) => {
    const matchesDay = event.date === selectedDay
    const matchesCategory = selectedCategory === "Tất cả" || event.category === selectedCategory
    return matchesDay && matchesCategory
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (time: string) => {
    return time
  }

  const getDayName = (dateString: string) => {
    const date = new Date(dateString)
    const dayNames = ["Thứ 7", "Chủ nhật", "Thứ 2"]
    return dayNames[new Date(dateString).getDay() - 6] || `Ngày ${date.getDate()}`
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lịch trình Sự kiện</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Khám phá các hoạt động và sự kiện trong 3 ngày triển lãm
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Chọn ngày</h2>
            <div className="flex flex-wrap gap-4">
              {days.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 md:flex-none ${selectedDay === day ? "bg-ipex-green hover:bg-ipex-green/90" : ""}`}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {getDayName(day)} - {new Date(day).getDate()}/3
                </Button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Lọc theo danh mục</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-ipex-green hover:bg-ipex-green/90" : ""}
                >
                  <Filter className="mr-1 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{formatDate(selectedDay)}</h3>

            {filteredEvents.length > 0 ? (
              <div className="space-y-4">
                {filteredEvents
                  .sort((a, b) => a.startTime.localeCompare(b.startTime))
                  .map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="bg-ipex-green/10 text-ipex-green px-3 py-2 rounded-lg text-center min-w-[100px]">
                              <div className="font-bold text-lg">{formatTime(event.startTime)}</div>
                              <div className="text-sm">{formatTime(event.endTime)}</div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className="bg-ipex-green/10 text-ipex-green hover:bg-ipex-green/20">
                                {event.category}
                              </Badge>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">{event.description}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                              {event.speaker && (
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4" />
                                  <span>{event.speaker}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex-shrink-0">
                            <Button variant="outline" size="sm">
                              Đăng ký tham gia
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Chưa có sự kiện nào</h3>
                  <p className="text-gray-500">Không có sự kiện nào trong ngày này hoặc danh mục đã chọn</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Quick Overview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Tổng quan 3 ngày</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {days.map((day, index) => {
                const dayEvents = scheduleData.filter((event) => event.date === day)
                return (
                  <Card key={day}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-ipex-green" />
                        {getDayName(day)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-ipex-green">{dayEvents.length} sự kiện</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {dayEvents.length > 0 && (
                            <>
                              Từ {dayEvents[0]?.startTime} - {dayEvents[dayEvents.length - 1]?.endTime}
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
