import "./App.css";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
