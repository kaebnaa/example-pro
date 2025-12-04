import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Code, Rocket, Users } from "lucide-react"

export default function HomePage() {
  const subjects = [
    { name: "HTML", description: "Вэб хуудасны үндэс", icon: "🌐", href: "/subjects/html" },
    { name: "CSS", description: "Загвар зохион байгуулалт", icon: "🎨", href: "/subjects/css" },
    { name: "JavaScript", description: "Интерактив програмчлал", icon: "⚡", href: "/subjects/javascript" },
    { name: "Python", description: "Програмчлалын үндэс", icon: "🐍", href: "/subjects/python" },
    { name: "Node.js", description: "Backend хөгжүүлэлт", icon: "📦", href: "/subjects/nodejs" },
    { name: "C++", description: "Системийн програмчлал", icon: "⚙️", href: "/subjects/cpp" },
  ]

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Баримтжуулалт",
      description: "Нарийвчилсан, ойлгомжтой баримтжуулалт ба жишээ код",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Дадлага ажил",
      description: "Бодит төслүүд дээр суралцах практик дасгалууд",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Орчин үеийн технологи",
      description: "Одоогийн салбарт хэрэглэгддэг технологиуд",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Сурагчдад ээлтэй",
      description: "Ахлах сургуулийн түвшинд тохирсон контент",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-8 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Amjilt Cyber School
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl text-balance">
                Ахлах сургуулийн сурагчдад зориулсан програмчлалын цогц баримтжуулалт. Орчин үеийн технологиудыг судлан,
                бодит төслүүд дээр практик ажиллаарай.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/subjects">Хичээл эхлүүлэх</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/subjects">Хичээлүүд үзэх</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-muted/50">
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subjects Section */}
        <section className="w-full px-4 md:px-8 py-12 md:py-24">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Суралцах хичээлүүд</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Програмчлалын үндсээс эхлээд дэвшилтэт сэдвүүд хүртэл
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <Link key={subject.name} href={subject.href}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 text-4xl">{subject.icon}</div>
                      <CardTitle className="text-2xl">{subject.name}</CardTitle>
                      <CardDescription className="text-base">{subject.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/subjects">Бүх хичээлүүд үзэх →</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
