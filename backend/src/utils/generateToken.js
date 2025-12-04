import jwt from "jsonwebtoken"

export function generateToken(user) {
  const payload = {
    id: user._id,
    role: user.role,
    email: user.email,
  }

  const secret = process.env.JWT_SECRET || "dev-secret"
  const expiresIn = process.env.JWT_EXPIRES_IN || "7d"

  return jwt.sign(payload, secret, { expiresIn })
}



