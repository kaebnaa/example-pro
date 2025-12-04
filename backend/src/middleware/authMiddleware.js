import jwt from "jsonwebtoken"
import User from "../models/User.js"

export async function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization || ""
    const token = authHeader.startsWith("Bearer ") ? authHeader.replace("Bearer ", "") : null

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized, token missing" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-secret")
    const user = await User.findById(decoded.id).select("-password")
    if (!user) {
      return res.status(401).json({ success: false, message: "Not authorized, user not found" })
    }

    req.user = user
    next()
  } catch (err) {
    return res.status(401).json({ success: false, message: "Not authorized, invalid token" })
  }
}

export function teacherOnly(req, res, next) {
  if (!req.user || req.user.role !== "teacher") {
    return res.status(403).json({ success: false, message: "Teacher role required" })
  }
  next()
}



