import JWT from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith("Bearer"))
    return res.status(403).json({ msg: `Invalid authorization header` });
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ msg: `You are not authenticated` });
  }
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    if (decoded.username) req.userId = decoded.userId;
    else res.status(403).json({ msg: `You are not authenticated!` });
  } catch (err) {
    res.status(403).json({ msg: `You are not authenticated ${err.message}` });
  }
};
