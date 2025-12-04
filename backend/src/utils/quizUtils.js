/**
 * Quiz utility functions for randomizing questions and options
 */

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
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
function shuffleOptions(question) {
  const { options, answer } = question
  const indexedOptions = options.map((option, index) => ({ option, originalIndex: index }))
  const shuffled = shuffleArray(indexedOptions)
  const newAnswerIndex = shuffled.findIndex((item) => item.originalIndex === answer)

  return {
    ...question,
    options: shuffled.map((item) => item.option),
    correctAnswer: newAnswerIndex,
  }
}

/**
 * Get random quiz questions from all sections
 * @param {Object} subject - Subject object with sections
 * @param {number} count - Number of questions to return (default: 20)
 * @returns {Array} Array of randomized quiz questions
 */
export function getRandomQuiz(subject, count = 20) {
  // Collect all quiz questions from all sections
  const allQuestions = []
  
  if (subject.sections && Array.isArray(subject.sections)) {
    subject.sections.forEach((section) => {
      if (section.quiz && Array.isArray(section.quiz)) {
        section.quiz.forEach((quiz) => {
          allQuestions.push({
            question: quiz.question,
            options: quiz.options || [],
            correctAnswer: quiz.answer || quiz.correctAnswer || 0,
            explanation: quiz.explanation,
          })
        })
      }
    })
  }

  // Also check if subject has direct quiz array (for backward compatibility)
  if (subject.quiz && Array.isArray(subject.quiz)) {
    subject.quiz.forEach((quiz) => {
      allQuestions.push({
        question: quiz.question,
        options: quiz.options || [],
        correctAnswer: quiz.correctAnswer || quiz.answer || 0,
        explanation: quiz.explanation,
      })
    })
  }

  // If no questions found, return empty array
  if (allQuestions.length === 0) {
    return []
  }

  // Shuffle all questions
  const shuffledQuestions = shuffleArray(allQuestions)

  // Take up to 'count' questions (or all if less than count)
  const selectedQuestions = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length))

  // Shuffle options for each question
  return selectedQuestions.map((question) => shuffleOptions(question))
}

