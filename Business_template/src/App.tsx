import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import MealProgress from "./components/MealProgress";
import ProductPage from "./pages/Product";
import Cater from "./pages/Cater";
import CartPage from "./pages/cart";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  const [orderedCategories, setOrderedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Drinks");
  const [isAdd, setIsAdd] = useState(false);

  const hideNavbarRoutes = ["/product", "/"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <>
      <div className="h-screen flex flex-col">
        {!shouldHideNavbar && <Navbar message="Arrange Your Meal" />}

        {!shouldHideNavbar && (
          <MealProgress orderedCategories={orderedCategories} />
        )}

        <main className="flex-1 bg-gray-50 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cater"
              element={
                <Cater
                  setOrderedCategories={setOrderedCategories}
                  orderedCategories={orderedCategories}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  setIsAdd={setIsAdd}
                  isAdd={isAdd}
                />
              }
            />
            <Route
              path="/product"
              element={<ProductPage setIsAdd={setIsAdd} isAdd={isAdd} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  setOrderedCategories={setOrderedCategories}
                  orderedCategories={orderedCategories}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              }
            />
          </Routes>
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
