const jwt = require('jsonwebtoken'); 
const signToken = (payload) =, process.env.JWT_SECRET, { expiresIn: '7d' }); 
const verifyToken = (token) =, process.env.JWT_SECRET); 
module.exports = { signToken, verifyToken }; 
