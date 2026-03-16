// Add to productsController.js
async getProduct(req, res) {
  try {
    const { slug } = req.params;
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        images: true
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({
      ...product,
      stockAvailable: product.stock > 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}