import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import NotFound from "./components/NotFound";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
        <Route
          path="/"
          element={<ProductList selectedCategory={selectedCategory} />}
        />
        <Route
          path="/categories/:category"
          element={<ProductList selectedCategory={selectedCategory} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
