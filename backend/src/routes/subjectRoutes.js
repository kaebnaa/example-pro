import express from "express"
import {
  getSubjects,
  getSubjectBySlug,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../controllers/subjectController.js"
import { protect, teacherOnly } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/", getSubjects)
router.get("/:slug", getSubjectBySlug)

router.post("/", protect, teacherOnly, createSubject)
router.put("/:slug", protect, teacherOnly, updateSubject)
router.delete("/:slug", protect, teacherOnly, deleteSubject)

export default router



