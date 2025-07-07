import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import newsData from "@/lib/mock/news.json"
import { notFound } from "next/navigation"

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsData.find((item) => item.slug === params.slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const relatedArticles = newsData.filter((item) => item.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />

      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại tin tức
              </Link>
            </Button>

            {/* Article Header */}
            <div className="mb-8">
              <Badge className="mb-4 bg-ipex-green/10 text-ipex-green hover:bg-ipex-green/20">{article.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="h-5 w-5" />
                  <span>Chia sẻ:</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{article.excerpt}</p>
              <div className="whitespace-pre-line text-gray-800 dark:text-gray-200 leading-relaxed">
                {article.content}
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="border-t pt-12">
                <h2 className="text-2xl font-bold mb-8">Tin tức liên quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge className="mb-2 text-xs bg-ipex-green/10 text-ipex-green">
                          {relatedArticle.category}
                        </Badge>
                        <h3 className="font-semibold mb-2 line-clamp-2 text-sm">{relatedArticle.title}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                          <Link href={`/news/${relatedArticle.slug}`}>Đọc thêm</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
