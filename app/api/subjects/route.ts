import { NextResponse } from "next/server"

// Mock subjects data - In production, this would come from a database
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
]

export async function GET() {
  return NextResponse.json({ subjects })
}
