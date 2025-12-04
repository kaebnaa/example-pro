"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Search } from "./search"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Amjilt Cyber School</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <nav className="flex items-center space-x-2">
            <Link
              href="/subjects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Хичээлүүд
            </Link>
            <Link
              href="/test"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Тест
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
