const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products API - مباشرة بدون routes (مؤقت)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: req.body
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health Check
app.get('/api', (req, res) => {
  res.json({ 
    message: 'E-Commerce API Ready!',
    endpoints: ['GET/POST /api/products']
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', database: 'Connected' });
});

// 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend: http://localhost:${PORT}`);
});