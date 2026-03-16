const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'CUSTOMER'
      }
    });
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    
    res.json({ 
      success: true, 
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req