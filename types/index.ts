export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  category: string
}

export interface Company {
  id: string
  name: string
  logo: string
  description: string
  industry: string
  website: string
  contact: string
  status: "pending" | "approved" | "rejected"
  booth?: string
}

export interface ScheduleEvent {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  speaker?: string
  category: string
}

export interface GalleryImage {
  id: string
  url: string
  title: string
  album: string
  description?: string
}

export interface Registration {
  id: string
  name: string
  email: string
  company: string
  phone: string
  date: string
  status: "pending" | "confirmed"
}

export interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: "new" | "replied"
}

export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "staff"
  avatar?: string
}
