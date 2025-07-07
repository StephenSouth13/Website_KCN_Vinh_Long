"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ImageIcon, Filter, Search, X } from "lucide-react"
import galleryData from "@/lib/mock/gallery.json"

const albums = ["Tất cả", "KCN Vĩnh Long", "Công nghệ 4.0", "Sự kiện"]

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState("Tất cả")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const filteredImages = galleryData.filter((image) => {
    return selectedAlbum === "Tất cả" || image.album === selectedAlbum
  })

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-ipex-green to-ipex-blue">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thư viện Ảnh</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Khám phá hình ảnh về KCN Vĩnh Long và công nghệ hiện đại
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Album Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Chọn album</h2>
            <div className="flex flex-wrap gap-4">
              {albums.map((album) => (
                <Button
                  key={album}
                  variant={selectedAlbum === album ? "default" : "outline"}
                  onClick={() => setSelectedAlbum(album)}
                  className={selectedAlbum === album ? "bg-ipex-green hover:bg-ipex-green/90" : ""}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {album}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Search className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-1">{image.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Không có hình ảnh</h3>
              <p className="text-gray-500">Album này chưa có hình ảnh nào</p>
            </div>
          )}

          {/* Album Stats */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Thống kê album</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {albums.slice(1).map((album) => {
                const albumCount = galleryData.filter((image) => image.album === album).length
                return (
                  <Card key={album}>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-ipex-green mb-2">{albumCount}</div>
                      <div className="text-gray-600 dark:text-gray-400">{album}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative">
              <Image
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
