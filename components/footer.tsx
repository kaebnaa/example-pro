import Link from "next/link"
import { BookOpen, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full px-4 md:px-8 py-8 md:py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold">Amjilt Cyber School</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ахлах сургуулийн сурагчдад зориулсан програмчлалын цогц сургалт
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Хичээлүүд</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/subjects/html" className="text-muted-foreground hover:text-foreground transition-colors">
                  HTML
                </Link>
              </li>
              <li>
                <Link href="/subjects/css" className="text-muted-foreground hover:text-foreground transition-colors">
                  CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/subjects/javascript"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/subjects/python" className="text-muted-foreground hover:text-foreground transition-colors">
                  Python
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Холбоосууд</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Нүүр хуудас
                </Link>
              </li>
              <li>
                <Link href="/subjects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Бүх хичээлүүд
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Холбоо барих</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@amjiltcyber.mn</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Github className="h-4 w-4" />
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Amjilt Cyber School. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}
