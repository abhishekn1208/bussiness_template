// import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import cart from "/../assets/cart.png"

type MessageProp = {
  message : string
}

const Navbar = ({message}:MessageProp) => {
   const {totalQuantity } = useSelector(
    (state: RootState) => state.cart
  );
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center px-6 py-8 shadow-lg w-full h-[44px]">
      <h1 className="text-[18px] font-extrabold tracking-wide">{message}</h1>
      <h1 className="text-4xl hidden md:block md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-lg animate-pulse">
        Welcome to Lumière
      </h1>

      <button className="relative group"
      onClick={()=>navigate("/cart")}
      >
        <img
          src={cart}
          alt="cart"
          className="w-[40px] h-[44px] object-contain transition-transform duration-300 group-hover:scale-110"
        />

       {totalQuantity>0 && (
         <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md">
          { totalQuantity}
        </span>
       )}
      </button>
    </div>
  );
};

export default Navbar;
