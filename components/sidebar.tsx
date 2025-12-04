"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  icon?: React.ReactNode
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Эхлэх",
    items: [
      { title: "Танилцуулга", href: "/" },
      { title: "Хичээлүүд", href: "/subjects" },
    ],
  },
  {
    title: "Веб Хөгжүүлэлт",
    items: [
      { title: "HTML", href: "/subjects/html" },
      { title: "CSS", href: "/subjects/css" },
      { title: "JavaScript", href: "/subjects/javascript" },
      { title: "ReactJS", href: "/subjects/reactjs" },
      { title: "NextJS", href: "/subjects/nextjs" },
    ],
  },
  {
    title: "Backend Хөгжүүлэлт",
    items: [
      { title: "Node.js", href: "/subjects/nodejs" },
      { title: "Express.js", href: "/subjects/expressjs" },
    ],
  },
  {
    title: "Програмчлалын Хэл",
    items: [
      { title: "Python", href: "/subjects/python" },
      { title: "Python with AI", href: "/subjects/python-ai" },
      { title: "C++", href: "/subjects/cpp" },
    ],
  },
  {
    title: "Аюулгүй байдал",
    items: [{ title: "Cybersecurity", href: "/subjects/cybersecurity" }],
  },
  {
    title: "Хиймэл оюун ухаан",
    items: [
      { title: "Machine Learning", href: "/subjects/machine-learning" },
      { title: "Computer Vision", href: "/subjects/computer-vision" },
      { title: "NLP", href: "/subjects/nlp" },
      { title: "Prompt Engineering", href: "/subjects/prompt-engineering" },
    ],
  },
  {
    title: "Архитектур",
    items: [
      { title: "Web/App Structure", href: "/subjects/web-app-structure" },
    ],
  },
  {
    title: "Өгөгдлийн сан",
    items: [
      { title: "SQL", href: "/subjects/sql" },
      { title: "MongoDB", href: "/subjects/mongodb" },
    ],
  },
  {
    title: "Хувилбар Удирдлага",
    items: [{ title: "GitHub", href: "/subjects/github" }],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border md:sticky md:block md:w-64 lg:w-72">
      <div className="h-full py-6 pr-6 lg:py-8">
        <nav className="space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight text-foreground">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
                      )}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      <span className="flex-1">{item.title}</span>
                      {isActive && <ChevronRight className="h-4 w-4 text-accent-foreground" />}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
