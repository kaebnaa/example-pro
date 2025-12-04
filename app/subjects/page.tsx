"use client"

import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const subjects = [
  {
    slug: "html",
    title: "HTML",
    description: "Вэб хуудасны бүтэц ба семантик үндэс суурь",
    icon: "🌐",
    category: "Веб хөгжүүлэлт",
  },
  {
    slug: "css",
    title: "CSS",
    description: "Вэб хуудасны загвар, өнгө, зохион байгуулалт",
    icon: "🎨",
    category: "Веб хөгжүүлэлт",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description: "Интерактив вэб програмчлалын үндэс",
    icon: "⚡",
    category: "Веб хөгжүүлэлт",
  },
  {
    slug: "nodejs",
    title: "Node.js",
    description: "JavaScript серверийн програмчлал",
    icon: "📦",
    category: "Backend хөгжүүлэлт",
  },
  {
    slug: "expressjs",
    title: "Express.js",
    description: "Вэб апликейшн ба API хөгжүүлэлт",
    icon: "🚀",
    category: "Backend хөгжүүлэлт",
  },
  {
    slug: "python",
    title: "Python",
    description: "Програмчлалын үндсэн ойлголтууд",
    icon: "🐍",
    category: "Програмчлалын хэл",
  },
  {
    slug: "python-ai",
    title: "Python with AI",
    description: "Хиймэл оюун ухааны үндэс суурь",
    icon: "🤖",
    category: "Програмчлалын хэл",
  },
  {
    slug: "cpp",
    title: "C++",
    description: "Системийн програмчлал ба объект хандалт",
    icon: "⚙️",
    category: "Програмчлалын хэл",
  },
  {
    slug: "github",
    title: "GitHub",
    description: "Хувилбар удирдлага ба хамтын ажиллагаа",
    icon: "🔧",
    category: "Хувилбар удирдлага",
  },
  {
    slug: "reactjs",
    title: "ReactJS",
    description: "Frontend хөгжүүлэлтийн framework",
    icon: "⚛️",
    category: "Веб хөгжүүлэлт",
  },
  {
    slug: "nextjs",
    title: "NextJS",
    description: "React production framework",
    icon: "▲",
    category: "Веб хөгжүүлэлт",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Кибер аюулгүй байдал ба хамгаалалт",
    icon: "🔒",
    category: "Аюулгүй байдал",
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Машин сургалт ба AI",
    icon: "🤖",
    category: "Хиймэл оюун ухаан",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    description: "Компьютерийн хараа ба зураг боловсруулалт",
    icon: "👁️",
    category: "Хиймэл оюун ухаан",
  },
  {
    slug: "nlp",
    title: "Neural Language Model",
    description: "Байгалийн хэл боловсруулалт",
    icon: "💬",
    category: "Хиймэл оюун ухаан",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    description: "AI prompt инженерчлэл",
    icon: "🎯",
    category: "Хиймэл оюун ухаан",
  },
  {
    slug: "web-app-structure",
    title: "Web/App Structure",
    description: "Вэб болон апликейшний бүтэц, архитектур",
    icon: "🏗️",
    category: "Архитектур",
  },
  {
    slug: "sql",
    title: "SQL",
    description: "Structured Query Language - Өгөгдлийн сан удирдах",
    icon: "🗄️",
    category: "Өгөгдлийн сан",
  },
  {
    slug: "mongodb",
    title: "MongoDB",
    description: "NoSQL документ-суурилсан өгөгдлийн сан",
    icon: "🍃",
    category: "Өгөгдлийн сан",
  },
]

function SubjectsContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.title.toLowerCase().includes(searchQuery) ||
      subject.description.toLowerCase().includes(searchQuery) ||
      subject.category.toLowerCase().includes(searchQuery),
  )

  const categories = Array.from(new Set(subjects.map((s) => s.category)))

  return (
    <div className="flex-1">
      <div className="w-full px-4 md:px-8 py-8 md:py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-balance">Хичээлүүд</h1>
            <p className="text-lg text-muted-foreground mt-2">Програмчлалын янз бүрийн сэдвүүдийг судлаарай</p>
          </div>

          {searchQuery && (
            <div className="text-sm text-muted-foreground">
              "{searchQuery}" хайлтын үр дүн: {filteredSubjects.length} хичээл
            </div>
          )}

          {categories.map((category) => {
            const categorySubjects = filteredSubjects.filter((s) => s.category === category)
            if (categorySubjects.length === 0) return null

            return (
              <div key={category} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySubjects.map((subject) => (
                    <Link key={subject.slug} href={`/subjects/${subject.slug}`}>
                      <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                        <CardHeader>
                          <div className="mb-2 text-4xl">{subject.icon}</div>
                          <CardTitle className="text-2xl">{subject.title}</CardTitle>
                          <CardDescription className="text-base">{subject.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {filteredSubjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">"{searchQuery}" хайлтаар илэрц олдсонгүй</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SubjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Suspense fallback={<div>Уншиж байна...</div>}>
          <SubjectsContent />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
