"use client"

import { useState, useEffect, useMemo } from "react"
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
  randomize?: boolean
  maxQuestions?: number
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
 * Shuffle options and update correct answer index
 */
function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const { options, correctAnswer } = question
  const indexedOptions = options.map((option, index) => ({ option, originalIndex: index }))
  const shuffled = shuffleArray(indexedOptions)
  const newAnswerIndex = shuffled.findIndex((item) => item.originalIndex === correctAnswer)

  return {
    ...question,
    options: shuffled.map((item) => item.option),
    correctAnswer: newAnswerIndex,
  }
}

export function Quiz({ questions, randomize = true, maxQuestions = 20 }: QuizProps) {
  const [randomKey, setRandomKey] = useState(0) // Force re-randomization on reset

  // Randomize questions on mount or when randomKey changes
  const randomizedQuestions = useMemo(() => {
    if (!randomize || questions.length === 0) {
      return questions
    }

    // Shuffle all questions
    const shuffled = shuffleArray(questions)

    // Take up to maxQuestions
    const selected = shuffled.slice(0, Math.min(maxQuestions, shuffled.length))

    // Shuffle options for each question
    return selected.map((q) => shuffleQuestionOptions(q))
  }, [questions, randomize, maxQuestions, randomKey])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  // Reset when questions change
  useEffect(() => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
  }, [randomizedQuestions])

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    setAnswered(true)
    if (selectedAnswer === randomizedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    // Re-randomize by changing key
    setRandomKey((prev) => prev + 1)
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
            Та {randomizedQuestions.length} асуултаас {score} асуултанд зөв хариулсан байна
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">
              {Math.round((score / randomizedQuestions.length) * 100)}%
            </div>
            <p className="text-muted-foreground mt-2">
              {score === randomizedQuestions.length
                ? "Гайхалтай! Та бүх асуултанд зөв хариулсан байна!"
                : score >= randomizedQuestions.length / 2
                  ? "Сайн! Гэхдээ дахин оролдож болно."
                  : "Ахин оролдоорой!"}
            </p>
          </div>
          <Button onClick={resetQuiz} className="w-full">
            Дахин оролдох (Шинэ асуултууд)
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = randomizedQuestions[currentQuestion]

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Асуулт {currentQuestion + 1} / {randomizedQuestions.length}
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
              {currentQuestion < randomizedQuestions.length - 1 ? "Дараагийн асуулт" : "Үр дүн харах"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
