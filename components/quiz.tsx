"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: QuizQuestion[]
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    setAnswered(true)
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
  }

  if (showResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Үр дүн</CardTitle>
          <CardDescription>
            Та {questions.length} асуултаас {score} асуултанд зөв хариулсан байна
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">{Math.round((score / questions.length) * 100)}%</div>
            <p className="text-muted-foreground mt-2">
              {score === questions.length
                ? "Гайхалтай! Та бүх асуултанд зөв хариулсан байна!"
                : score >= questions.length / 2
                  ? "Сайн! Гэхдээ дахин оролдож болно."
                  : "Ахин оролдоорой!"}
            </p>
          </div>
          <Button onClick={resetQuiz} className="w-full">
            Дахин оролдох
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Асуулт {currentQuestion + 1} / {questions.length}
        </CardTitle>
        <CardDescription>{question.question}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
          disabled={answered}
        >
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 rounded-lg border p-4 ${
                answered
                  ? index === question.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : index === selectedAnswer
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                      : "border-border"
                  : "border-border hover:border-primary"
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                {option}
              </Label>
              {answered && index === question.correctAnswer && <CheckCircle2 className="h-5 w-5 text-green-500" />}
              {answered && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>

        {answered && question.explanation && (
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800 p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Тайлбар:</strong> {question.explanation}
            </p>
          </div>
        )}

        <div className="flex gap-2">
          {!answered ? (
            <Button onClick={handleAnswer} disabled={selectedAnswer === null} className="w-full">
              Хариулах
            </Button>
          ) : (
            <Button onClick={handleNext} className="w-full">
              {currentQuestion < questions.length - 1 ? "Дараагийн асуулт" : "Үр дүн харах"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
