import { useNavigate } from "react-router-dom";
import ARProductViewer from "../components/ARProductViewer";
import Navbar from "../components/Navbar";

const ProductPage = ({
  setIsAdd,
  isAdd,
  selectedCategory,
  setSelectedCategory,
  setOrderedCategories,
  orderedCategories
}) => {
   const router = useNavigate();
   const handleProductView = (drink) => {
    // console.log(drink);
    router("/product", { state: { drink } });
  };
  return (
    <>
      <Navbar message="AR Menu" />

      <ARProductViewer 
      viewAR={()=>handleProductView(item)}
      isAdd={isAdd}
      setIsAdd={setIsAdd}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      orderedCategories={orderedCategories}
      setOrderedCategories={setOrderedCategories}
      />
    </>
  );
};

export default ProductPage;
