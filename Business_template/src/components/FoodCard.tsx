import React, { useState } from "react";
import groupIcon from "/assets/Group.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AnimatedPrice from "./AnimatedPrice";
import { useNavigate } from "react-router-dom";

type FoodCardProps = {
  drink: {
    _id?: string;
    image: string;
    name: string;
    description: string;
    price?: number;
    variables?: {
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
  onAdd?: (item: any) => void;
  onViewAR?: () => void;
  selectedCategory: string;
  setOrderedCategories?: any;
};

const FoodCard: React.FC<FoodCardProps> = ({
  drink,
  onAdd,
  onViewAR,
  selectedCategory,
  setOrderedCategories,
}) => {
  const [variantCounts, setVariantCounts] = useState({});
  const router = useNavigate();
// console.log(drink)
  // ⭐ Always store price inside selectedVariant
  const [selectedVariant, setSelectedVariant] = useState(
    drink.variables?.[0]
      ? { ...drink.variables[0], discountedPrice: undefined }
      : drink.offers?.[0]
      ? {
          ...drink.offers[0],
          discountedPrice:
            drink.offers[0].price -
            (drink.offers[0].price * drink.offers[0].off) / 100,
        }
      : {
          quantity: 0,
          unit: "",
          price: drink.price,
          icon: "",
          discountedPrice: undefined,
        }
  );

//   React.useEffect(() => {
//   if (drink.variables?.length > 0) {
//     setSelectedVariant({ ...drink.variables[0], discountedPrice: undefined });
//   } else if (drink.offers?.length > 0) {
//     const offer = drink.offers[0];
//     const discounted =
//       offer.price - (offer.price * offer.off) / 100;

//     setSelectedVariant({
//       ...offer,
//       discountedPrice: discounted,
//     });
//   } else {
//     setSelectedVariant({
//       quantity: 1,
//       unit: "",
//       price: drink.price ?? 0,
//       icon: "",
//       discountedPrice: undefined,
//     });
//   }

//   // also reset counts for the new product
//   setVariantCounts({});
// }, [drink]);


  // ⭐ Final price detection logic
  const getFinalPrice = () => {
    if (selectedVariant.discountedPrice !== undefined)
      return selectedVariant.discountedPrice;

    return selectedVariant.price !== undefined
      ? selectedVariant.price
      : drink.price;
  };

  // ⭐ Add item to cart
  const handleAdd = () => {
    if (!selectedVariant.quantity) {
      alert("Please select a quantity before adding to cart.");
      return;
    }

    const key = `${selectedVariant.quantity}${selectedVariant.unit}`;
    const finalPrice = getFinalPrice();
    console.log(finalPrice)
    // update local variant count
    setVariantCounts((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));

    const item = {
      id: `${drink._id}-${key}`, // unique per variant
      name: drink.name,
      image: drink.image,
      variantQuantity: selectedVariant.quantity,
      unit: selectedVariant.unit,
      price: finalPrice,
      originalPrice: selectedVariant.price,
      discounted: finalPrice < selectedVariant.price,
      quantity: (variantCounts[key] || 0) + 1,
      category: selectedCategory,
    };

    onAdd?.(item);
  };

  const handleRemove = () => {
    const key = `${selectedVariant.quantity}${selectedVariant.unit}`;

    if (!variantCounts[key]) return;

    setVariantCounts((prev) => {
      const updated = { ...prev };
      updated[key] = updated[key] - 1;
      if (updated[key] === 0) delete updated[key];
      return updated;
    });

    onAdd?.({
      id: `${drink._id}-${key}`,
      remove: true,
    });
  };

  const handleCart = () => router("/cart");

  const isOffer = selectedVariant.discountedPrice !== undefined;

  return (
    <div className="w-[322px] bg-white rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 py-4 flex flex-col">
      <div className="grid grid-cols-[1fr_3fr] px-1 w-[302px] ">
        <div className="flex flex-col items-center justify-between px-1">
          <img
            src={drink.image}
            alt={drink.name}
            className="w-[80px] h-[80px] object-cover hover:scale-105 transition-transform duration-300 rounded-xl"
          />
          <span className="text-black text-lg font-extrabold mt-3">
            ₹ {getFinalPrice()}
          </span>
        </div>

        <div className="flex flex-col items-start w-[210px]">
          <h4 className="text-xl font-semibold text-gray-800">{drink.name}</h4>
          <p className="text-gray-600 text-[10px] mt-1 leading-relaxed">
            {drink.description}
          </p>
        </div>
      </div>

      {/* ADD / REMOVE BUTTON */}
      <div className="flex items-center mt-1 px-1 gap-[1px]">
        {(variantCounts[`${selectedVariant.quantity}${selectedVariant.unit}`] ||
          0) === 0 ? (
          <button
            onClick={handleAdd}
            className="flex items-center justify-center p-[10px] w-[142px]
            border border-gray-600/50 
            bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md 
            rounded-md text-white shadow-md text-base font-bold
            hover:shadow-[0_0_20px_rgba(228,179,1,0.3)] transition-all duration-300"
          >
            <IoMdAdd size={20} /> ADD
          </button>
        ) : (
          <div
            className="flex items-center justify-between p-[10px] w-[143px]
            border border-gray-600/50 
            bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md 
            rounded-md text-white shadow-md transition-all"
          >
            <button onClick={handleRemove} className="hover:text-[#e4b301]">
              <FaMinus />
            </button>
            <span className="font-semibold">
              {variantCounts[
                `${selectedVariant.quantity}${selectedVariant.unit}`
              ] || 0}
            </span>{" "}
            <button onClick={handleAdd} className="hover:text-[#e4b301]">
              <FaPlus />
            </button>
          </div>
        )}

        <button
          onClick={onViewAR}
          className="flex items-center justify-center w-[142px] p-[10px] gap-1 border border-gray-400 text-gray-900 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-yellow-50 transition-all duration-300"
        >
          What’s Inside
          <img src={groupIcon} alt="AR icon" className="h-5 w-5" />
        </button>
      </div>

      {/* VARIABLES SELECTION */}
      <div className="flex items-center px-2 gap-1 mt-3 w-[302px]">
        {drink.variables?.map((variant, i) => (
          <button
            key={i}
            onClick={() =>
              setSelectedVariant({ ...variant, discountedPrice: undefined })
            }
            className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${
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

      {/* OFFERS */}
      <div className="flex items-center justify-center mt-3 w-[302px] p-[10px] gap-2">
        {drink.offers?.map((offer, i) => {
          const discounted = offer.price - (offer.price * offer.off) / 100;

          return (
            <React.Fragment key={i}>
              <button
                onClick={() =>
                  setSelectedVariant({
                    ...offer,
                    discountedPrice: discounted, // ⭐ FIXED
                  })
                }
                className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${
                  selectedVariant.quantity === offer.quantity
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-300"
                } transition-all`}
              >
                {offer.off}% off on {offer.quantity} {offer.unit}
                <img src={offer.icon} alt="" className="w-4 h-4" />
              </button>

              {selectedVariant.quantity === offer.quantity && (
                <div className="mt-1 flex flex-col items-center text-sm">
                  <span>Get in</span>
                  <AnimatedPrice from={offer.price} to={discounted} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {Object.values(variantCounts).some((v) => v > 0) && (
        <button
          onClick={handleCart}
          className="flex gap-1 font-semibold items-center justify-center w-full border border-gray-300 py-2 mt-2 shadow-lg hover:bg-yellow-50 rounded-lg"
        >
          Go to Cart
          <img
            src="../assets/cart.png"
            alt="cart"
            className="w-[24px] h-[24px]"
          />
        </button>
      )}
    </div>
  );
};

export default FoodCard;
