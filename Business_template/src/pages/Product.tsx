import ARProductViewer from "../components/ARProductViewer";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  return (
    <>
      <Navbar message="AR Menu" />

      <ARProductViewer />
    </>
  );
};

export default ProductPage;
