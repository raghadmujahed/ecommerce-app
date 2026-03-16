import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
// Import other pages...

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomePage = () => <div>Home Page</div>;
const ProductsPage = () => <div>Products Page</div>;

export default App;