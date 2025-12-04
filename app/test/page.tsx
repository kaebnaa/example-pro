"use client"

import { useState, useEffect, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Quiz } from "@/components/quiz"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Lightbulb, BookOpen, Loader2 } from "lucide-react"
import Link from "next/link"

// Dynamically import subjectsData from the subject page
// In production, this should come from an API

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  subjectTitle?: string // Track which subject the question came from
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Collect all quiz questions from all subjects
 */
async function collectAllQuizQuestions(): Promise<QuizQuestion[]> {
  const allQuestions: QuizQuestion[] = []

  // Dynamically import subjectsData
  const { subjectsData } = await import("../subjects/[slug]/page")

  Object.values(subjectsData).forEach((subject: any) => {
    // Collect from sections
    if (subject.sections && Array.isArray(subject.sections)) {
      subject.sections.forEach((section: any) => {
        if (section.quiz && Array.isArray(section.quiz)) {
          section.quiz.forEach((quiz: any) => {
            allQuestions.push({
              question: quiz.question,
              options: quiz.options || [],
              correctAnswer: quiz.correctAnswer || quiz.answer || 0,
              explanation: quiz.explanation,
              subjectTitle: subject.title,
            })
          })
        }
      })
    }

    // Collect from direct quiz array (backward compatibility)
    if (subject.quiz && Array.isArray(subject.quiz)) {
      subject.quiz.forEach((quiz: any) => {
        allQuestions.push({
          question: quiz.question,
          options: quiz.options || [],
          correctAnswer: quiz.correctAnswer || quiz.answer || 0,
          explanation: quiz.explanation,
          subjectTitle: subject.title,
        })
      })
    }
  })

  return allQuestions
}

export default function TestPage() {
  const [allQuestions, setAllQuestions] = useState<QuizQuestion[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Collect all questions from all subjects
    const loadQuestions = async () => {
      const questions = await collectAllQuizQuestions()
      setAllQuestions(questions)
      setIsLoading(false)
    }
    loadQuestions()
  }, [])

  // Get random 20 questions
  const randomQuestions = useMemo(() => {
    if (allQuestions.length === 0) return []

    const shuffled = shuffleArray(allQuestions)
    return shuffled.slice(0, Math.min(20, shuffled.length))
  }, [allQuestions])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Тест бэлтгэж байна...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (allQuestions.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="container py-12 md:py-24">
            <Card>
              <CardHeader>
                <CardTitle>Тест олдсонгүй</CardTitle>
                <CardDescription>Одоогоор асуулт байхгүй байна.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/subjects">Хичээлүүд рүү буцах</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="w-full px-4 md:px-8 py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Нэгдсэн Тест</h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Бүх хичээлүүдийн агуулгаас холилдсон {randomQuestions.length} асуулт
                </p>
              </div>
            </div>
          </div>

          {/* Info Alert */}
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Тестийн мэдээлэл</AlertTitle>
            <AlertDescription>
              Энэ тест нь бүх хичээлүүдийн агуулгаас холилдсон {randomQuestions.length} асуулт агуулна. 
              Асуултууд болон хариултуудын байрлал random-р өөрчлөгдөнө. 
              Нийт {allQuestions.length} асуултаас {randomQuestions.length} асуулт сонгогдоно.
            </AlertDescription>
          </Alert>

          {/* Quiz Component */}
          {randomQuestions.length > 0 && (
            <div className="space-y-4">
              <Quiz questions={randomQuestions} randomize={false} maxQuestions={20} />
            </div>
          )}

          {/* Back to Subjects */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/subjects">Хичээлүүд рүү буцах</Link>
            </Button>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

