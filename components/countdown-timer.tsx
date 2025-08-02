"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Thay đổi ngày, giờ và phút tại đây.
    const targetDate = new Date("2025-11-03T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        // Dừng đếm ngược khi thời gian kết thúc
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold text-white">{value.toString().padStart(2, "0")}</div>
          </div>
          <div className="text-white/80 text-sm md:text-base mt-2 capitalize">
            {unit === "days" ? "Ngày" : unit === "hours" ? "Giờ" : unit === "minutes" ? "Phút" : "Giây"}
          </div>
        </div>
      ))}
    </div>
  )
}