import React from "react";
import groupIcon from "../assets/Group.svg";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AnimatedPrice from "./AnimatedPrice";
import { useNavigate } from "react-router-dom";

type FoodCardProps = {
  drink: {
    image: string;
    name: string;
    description: string;
    variables: {
      quantity: number;
      unit: string;
      price: number;
      icon: string;
    }[];
    offers?: {
      quantity: number;
      icon: string;
      price: number;
      off: number;
      unit: string;
    }[];
  };
  onAdd?: (count: number) => void;
  onViewAR?: () => void;
  selectedCategory: string;
};

const FoodCard: React.FC<FoodCardProps> = ({
  drink,
  onAdd,
  onViewAR,
  selectedCategory,
  setOrderedCategories,
}) => {
  const [count, setCount] = useState(0);
  const router = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(
    drink.variables?.[0] ||
      drink.offers?.[0] || {
        quantity: 0,
        unit: "",
        price: 0,
        icon: "",
      }
  );

  const handleAdd = () => {
    if (!selectedVariant || !selectedVariant.quantity) {
      alert("Please select a quantity before adding to cart.");
      return;
    }
    const newCount = count + 1;
    setCount(newCount);
    const item = {
      id: drink._id,
      name: drink.name,
      unit: selectedVariant.unit || "",
      variantQuantity: selectedVariant.quantity,
      price: selectedVariant.price || drink.price,
      quantity: newCount,
      category: selectedCategory,
      image: drink.image,
    };
    console.log(item);
    onAdd?.(item);
  };

  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
    onAdd?.(newCount);
    if (newCount === 0) {
      setOrderedCategories((prev) =>
        prev.filter((category) => category !== selectedCategory)
      );
    }
  };

  const handleCart = () => {
    router("/cart");
  };
  // console.log(count);
  const isOffer = "off" in selectedVariant;
  return (
    <div className="w-[322px] h-auto bg-white rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 px-4 py-4 flex flex-col">
      <div className="grid grid-cols-[1fr_3fr] gap-1 w-[302px] ">
        <div className="flex flex-col items-center justify-between">
          <div className="w-[80px] h-[80px] rounded-xl overflow-hidden">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="text-black text-lg font-extrabold mt-3">
            ₹{" "}
            {selectedCategory === "Starter"
              ? drink.price
              : selectedVariant.price}
          </span>
        </div>

        <div className="flex flex-col items-start w-[210px] px-2">
          <h4 className="text-xl font-semibold text-gray-800">{drink.name}</h4>
          <p className="text-gray-600 text-[10px] mt-1 leading-relaxed">
            {drink.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-1 gap-1">
        {count === 0 ? (
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 
            border border-gray-600/50 
            bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md 
            rounded-md py-2 px-5 text-white 
           shadow-md
            hover:shadow-[0_0_20px_rgba(228,179,1,0.3)]
            transition-all duration-300 text-base font-bold w-1/2"
          >
            <IoMdAdd size={20} /> ADD
          </button>
        ) : (
          <div
            className="flex items-center justify-between w-1/2 gap-3
            border border-gray-600/50 
            bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md 
            rounded-md py-2 px-4 text-white 
            shadow-md
            hover:shadow-[0_0_20px_rgba(228,179,1,0.3)]
            transition-all duration-300"
          >
            <button onClick={handleRemove} className="hover:text-[#e4b301]">
              <FaMinus />
            </button>
            <span className="font-semibold">{count}</span>
            <button onClick={handleAdd} className="hover:text-[#e4b301]">
              <FaPlus />
            </button>
          </div>
        )}

        <button
          onClick={onViewAR}
          className="flex items-center justify-center gap-2 py-2 px-2 
          border border-gray-400 text-gray-900 rounded-md w-1/2
          shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-yellow-50 
          text-base font-medium transition-all duration-300"
        >
          What’s Inside
          <img src={groupIcon} alt="AR icon" className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-around items-center mt-3">
        {drink?.variables &&
          drink?.variables?.map((variant, i) => (
            <button
              key={i}
              onClick={() => setSelectedVariant(variant)}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg border 
              ${
                selectedVariant.quantity === variant.quantity
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-300"
              } transition-all`}
            >
              {variant.quantity} {variant.unit}
              <img src={variant.icon} alt="" className="w-4 h-4" />
            </button>
          ))}
      </div>
      <div className="flex justify-around items-center mt-3">
        {drink?.offers?.map((offer, i) => {
          const discountedPrice = offer.price - (offer.price * offer.off) / 100;

          return (
            <>
              <button
                key={i}
                onClick={() => setSelectedVariant(offer)}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg border 
              ${
                selectedVariant.quantity === offer.quantity
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-gray-300"
              } transition-all`}
              >
                {`${offer.off}% off on ${offer.quantity} ${offer.unit}`}
                <img src={offer.icon} alt="" className="w-4 h-4" />
              </button>
              {isOffer && (
                <div className="mt-1 flex flex-col items-center text-sm">
                  <span>Get in</span>
                  <AnimatedPrice from={offer.price} to={discountedPrice} />
                </div>
              )}
            </>
          );
        })}
      </div>
      {count > 0 && (
        <div>
          <button
            onClick={() => handleCart()}
            className="flex gap-1 font-semibold items-center justify-center w-full border border-gray-300 py-2 mt-2 shadow-lg hover:bg-yellow-50 rounded-lg"
          >
            Go to Cart
            <img
              src="/../assets/cart.png"
              alt="cart"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
