import mongoose from "mongoose"

const quizSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: {
      type: [String],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "Quiz options are required",
      },
    },
    answer: { type: Number, required: true },
  },
  { _id: false },
)

const sectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    code: { type: String },
    quiz: [quizSchema],
  },
  { _id: false },
)

const subjectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    title: { type: String, required: true },
    description: { type: String },
    sections: [sectionSchema],
  },
  { timestamps: true },
)

const Subject = mongoose.model("Subject", subjectSchema)

export default Subject



