import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

import subjectRoutes from "./routes/subjectRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

const app = express()

// CORS
const allowedOrigin = process.env.CLIENT_ORIGIN || "*"
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
)

// Body parser
app.use(express.json({ limit: "1mb" }))

// MongoDB connection handler (for serverless)
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/amjilt-cyber-school"

// Optimize for serverless: reuse connections
let cachedConnection = null

async function connectDB() {
  if (cachedConnection) {
    return cachedConnection
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    cachedConnection = conn
    console.log("MongoDB connected")
    return conn
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}

// Connect to MongoDB before handling requests
app.use(async (req, res, next) => {
  try {
    await connectDB()
    next()
  } catch (error) {
    next(error)
  }
})

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "amjilt-cyber-school-backend" })
})

// Routes
app.use("/api/subjects", subjectRoutes)
app.use("/api/auth", authRoutes)

// 404 and error handlers
app.use(notFound)
app.use(errorHandler)

// Start server only if not in Vercel/serverless environment
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL_ENV

if (!isVercel) {
  const PORT = process.env.PORT || 5001

  async function start() {
    try {
      await connectDB()

      const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        console.log(`API available at http://localhost:${PORT}`)
      })

      // Handle port already in use error
      server.on("error", (err) => {
        if (err.code === "EADDRINUSE") {
          console.error(`\n❌ Port ${PORT} is already in use!`)
          console.error(`💡 Try one of these solutions:`)
          console.error(`   1. Change PORT in .env file to 5001 or 3001`)
          console.error(`   2. Kill the process using port ${PORT}: lsof -ti:${PORT} | xargs kill`)
          console.error(`   3. Disable AirPlay Receiver (System Settings > General > AirDrop & Handoff)\n`)
          process.exit(1)
        } else {
          throw err
        }
      })
    } catch (err) {
      console.error("Failed to start server:", err)
      process.exit(1)
    }
  }

  start()
}

// Export app for Vercel serverless functions
export default app



