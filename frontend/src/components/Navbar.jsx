import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            E-Store
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-blue-600">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;