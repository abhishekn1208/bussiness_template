import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import Banner from "../components/Banner";
import AddedItems from "../components/AddedItems";
import CouponComponent from "../components/CouponComp";
import PaymentOptions from "../components/Payment";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import banner1 from "/assets/Banner1.png"
import banner2 from "/assets/Banner2.png"
import banner3 from "/assets/Banner3.png"

const CartPage = ({selectedCategory,setSelectedCategory,setOrderedCategories,orderedCategories}) => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch()
  const navigate = useNavigate();
// console.log(items)  // console.log(totalPrice);
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cater"); // redirect path — adjust as needed
    }
  }, [items, navigate]);
  //       if (items.length === 0) {
  //     return (
  //       <div>
  //       </div>
  //     );
  //   }
  const handleRemove = (id: string,selectedCategory:string) => {
    // console.log(items)
    setOrderedCategories((prev) =>
        prev.filter((category) => category !== selectedCategory)
      );
    
    dispatch(removeFromCart(id)); // Your redux action
  };
  const banners = [
    banner1,
    banner2,
    banner3,
  ];
  return (
    <div className="px-2 py-4">
        <h1
        className="text-[24px] font-semibold"
        >Checkout</h1>
      <Banner banners={banners} />
      <AddedItems items={items} totalPrice={totalPrice} totalQuantity={totalQuantity} onRemove={handleRemove}/>
      <CouponComponent/>
      <PaymentOptions/>
    </div>
  );
};

export default CartPage;
