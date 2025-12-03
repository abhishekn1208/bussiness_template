import { useLocation, useNavigate } from "react-router-dom";
import ARProductViewer from "../components/ARProductViewer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const ProductPage = ({
  setIsAdd,
  isAdd,
  selectedCategory,
  setSelectedCategory,
  setOrderedCategories,
  orderedCategories
}) => {
  const [added,setAdded] = useState(true)
    const location = useLocation();

   const router = useNavigate();
    const handleProductView = (drink) => {
    router("/product", { state: { drink } });
  };
 useEffect(() => {
  if (location.state?.drink) {
    const el = document.getElementById("page-root");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}, [location.state]);
  return (
   <div id="product">
      <Navbar message="What's Inside" />
      <ARProductViewer
        viewAR={handleProductView}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        orderedCategories={orderedCategories}
        setOrderedCategories={setOrderedCategories}
      />
    </div>
  );
};

export default ProductPage;
