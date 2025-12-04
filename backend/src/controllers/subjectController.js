import Subject from "../models/Subject.js"
import { getRandomQuiz } from "../utils/quizUtils.js"

// GET /api/subjects
export async function getSubjects(req, res, next) {
  try {
    const subjects = await Subject.find().select("-sections.quiz.answer") // hide correct answers by default
    res.json({ success: true, data: subjects })
  } catch (err) {
    next(err)
  }
}

// GET /api/subjects/:slug
export async function getSubjectBySlug(req, res, next) {
  try {
    const { slug } = req.params
    const { randomize, count } = req.query // ?randomize=true&count=20

    const subject = await Subject.findOne({ slug })
    if (!subject) {
      return res.status(404).json({ success: false, message: "Subject not found" })
    }

    // If randomize is requested, return randomized quiz
    if (randomize === "true") {
      const quizCount = count ? parseInt(count, 10) : 20
      const randomQuiz = getRandomQuiz(subject, quizCount)
      
      return res.json({
        success: true,
        data: {
          ...subject.toObject(),
          quiz: randomQuiz,
        },
      })
    }

    res.json({ success: true, data: subject })
  } catch (err) {
    next(err)
  }
}

// POST /api/subjects (teacher only)
export async function createSubject(req, res, next) {
  try {
    const { slug, title, description, sections } = req.body

    if (!slug || !title) {
      return res.status(400).json({ success: false, message: "Slug and title are required" })
    }

    const exists = await Subject.findOne({ slug })
    if (exists) {
      return res.status(409).json({ success: false, message: "Subject with this slug already exists" })
    }

    const subject = await Subject.create({ slug, title, description, sections: sections || [] })
    res.status(201).json({ success: true, data: subject })
  } catch (err) {
    next(err)
  }
}

// PUT /api/subjects/:slug
export async function updateSubject(req, res, next) {
  try {
    const { slug } = req.params
    const { title, description, sections } = req.body

    const subject = await Subject.findOne({ slug })
    if (!subject) {
      return res.status(404).json({ success: false, message: "Subject not found" })
    }

    if (title !== undefined) subject.title = title
    if (description !== undefined) subject.description = description
    if (sections !== undefined) subject.sections = sections

    await subject.save()
    res.json({ success: true, data: subject })
  } catch (err) {
    next(err)
  }
}

// DELETE /api/subjects/:slug
export async function deleteSubject(req, res, next) {
  try {
    const { slug } = req.params
    const subject = await Subject.findOneAndDelete({ slug })
    if (!subject) {
      return res.status(404).json({ success: false, message: "Subject not found" })
    }
    res.json({ success: true, message: "Subject deleted" })
  } catch (err) {
    next(err)
  }
}



