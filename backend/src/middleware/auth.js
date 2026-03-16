const { verifyToken } = require('../utils/jwt'); 
const authenticateToken = (req, res, next) =
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) return res.status(401).json({ error: 'Token required' }); 
  try { 
    req.user = verifyToken(token); 
    next(); 
  } catch { res.status(403).json({ error: 'Invalid token' }); } 
}; 
module.exports = { authenticateToken }; 
