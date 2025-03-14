import "./App.css";
import ProductList from "./components/products";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/Navbar";
import SpecialPriceList from "./components/specialprices";

function App() {
  return (
    <Router>
      <Navbar /> {/* Se muestra en todas las páginas */}
      <Routes>
       <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/special-prices" element={<SpecialPriceList />} />
      </Routes>
    </Router>
  );
}

export default App;
