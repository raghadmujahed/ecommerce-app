const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{product.name}</span>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;