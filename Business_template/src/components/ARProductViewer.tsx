import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import SuggestionFoodCard from "./SuggestionCart";
// import InfoCard from "./InfoCard";
import { useLocation } from "react-router-dom";
import tempura from "/assets/pinaC.jpeg";
import tempuraGif from "/assets/pina.gif";
import pina from "/assets/pina.jpeg";
import pinaGif from "/assets/colodo.gif";
import mocktail from "/assets/vMojito.jpeg";
// import cola from "/assets/Cola.jpg";
import lagoonGif from "/assets/blue.gif";
import lagoon from "/assets/lagoon.jpeg";
import vMojito from "/assets/vMojito.gif";

// import Navbar from "./Navbar";

export default function ARProductViewer({
  isAdd,
  setIsAdd,
  selectedCategory,
  setSelectedCategory,
  viewAR
}) {
  const router = useNavigate();
  const location = useLocation();
  const { drink } = location.state || {};
  if (!drink) {
    return (
      <div className="h-screen flex items-center justify-center font-extrabold text-3xl">
        AR View Not Available.
      </div>
    );
  }

  // console.log(drink);
  // const nutrients = [
  //   { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] }, // red → pink
  //   { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] }, // green gradient
  //   { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] }, // yellow → orange
  // ];
  const [isAdded, setIsAdded] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleAdd = (item) => {
    setIsAdd(true);
    // console.log(item)
    if (item.name === "Tempura Enoki Nest") {
      setSelectedCategory("Starter");
    }
    navigate("/cater");
  };


  const drinks = [
    {
      _id: 2,
      image: mocktail,
      name: "Virgin Mojito",
      price: 340,
      description:
        "Non-alcoholic versions of cocktails, often fruit- or syrup-based.",
      gif: vMojito,
      nutrients: [
        { label: "Calories", value: 85, colors: ["#ef4444", "#f472b6"] },
        // { label: "Protein", value: 15, colors: ["#22c55e", "#34d399"] },
        // { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
      category: "Drinks",
    },
    {
      _id: 3,
      image: lagoon,
      name: "Blue Lagoon",
      price: 820,
      description: "Vibrant lemon-lime soda mixed with blue curacao syrup.",
      gif: lagoonGif,
      nutrients: [
        { label: "ABV", value: 9, colors: ["#ef4444", "#f472b6"] },

        // { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        // { label: "Protein", value: 15, colors: ["#22c55e", "#34d399"] },
        // { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
      category: "Drinks",
    },
    {
      _id: 4,
      image: pina,
      name: "Piña Colada",
      price: 890,
      description:
        "Non-alcoholic version of a tropical cocktail with coconut and pineapple.",
      gif: pinaGif,
      nutrients: [
        { label: "Calories", value: 98, colors: ["#ef4444", "#f472b6"] },
        // { label: "Protein", value: 15, colors: ["#22c55e", "#34d399"] },
        // { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
      category: "Drinks",
    },
    {
      _id: 1,
      image: tempura,
      name: "Tempura Enoki Nest",
      price: 890,
      description:
        "Non-alcoholic version of a tropical cocktail with coconut and pineapple.",
      gif: tempuraGif,
      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Protien", value: 10, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },
    // {
    //   image: cola,
    //   name: "Coca-Cola",
    //   price: 820,
    //   description: "Vibrant lemon-lime soda mixed with blue curacao syrup.",
    // },
  ];

  return (
    <div className="px-0 py-2 " id="page-root">
      {/* <Navbar message="AR Menu"/> */}
      <div className="relative h-[500px] rounded-2xl shadow-lg">
        <Canvas
          camera={{ position: [0, 0, 4] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 5]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
        </Canvas>

        <img
          src={drink.gif}
          alt={drink.name}
          className="relative z-10 w-full md:w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 md:left-6 left-1 z-20 bg-gray-200 py-2 rounded-2xl shadow-2xl">
          {drink.nutrients.map((item, i) => (
            <motion.div
              key={item.label}
              className="relative flex flex-col items-center justify-center rounded-2xl md:p-4 md:w-[120px] h-[140px] w-[80px] "
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <p className="text-sm font-semibold text-gray-900 mb-3">
                {item.label}
              </p>

              {/* SVG Circular Progress Bar */}
              <div className="relative">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="none"
                    stroke={`url(#${item.label}-gradient)`}
                    strokeDasharray={283}
                    strokeDashoffset={283}
                    animate={{
                      strokeDashoffset: 283 - (283 * item.value) / 100,
                    }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                  />
                  <defs>
                    <linearGradient
                      id={`${item.label}-gradient`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={item.colors[0]} />
                      <stop offset="100%" stopColor={item.colors[1]} />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Value inside the circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">
                    {item.value} {item.label === "Calories" ? "kcal" : "%"}
                  </span>
                </div>
              </div>

              {/* Label below the circle */}
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="w-full border"> */}
      <div className="flex justify-center px-2">
        <button
          onClick={() => handleAdd(drink)}
          className="
      w-full md:w-1/2 flex items-center justify-center gap-2 
       border border-gray-600/50 
       bg-gradient-to-l from-gray-900 to-gray-600 backdrop-blur-md 
       rounded-md my-4 py-4 px-4 md:px-0 text-white 
       shadow-[0_4px_20px_rgba(0,0,0,0.4)]
       hover:shadow-[0_0_10px_rgba(228,179,1,0.3)]
       transition-all duration-300 text-lg font-bold
     "
        >
          {isAdded ? (
            "Go To Cart"
          ) : (
            <>
              {" "}
              <IoMdAdd size={28} /> Add{" "}
            </>
          )}{" "}
        </button>
      </div>
      {/* <InfoCard message="Allergen Information: Contains no major allergens; gluten-free and suitable for vegetarians & vegans."/> */}
      <div className="w-full mx-auto my-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
          Chef Recommendation
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {drinks.map((drink, index) => (
            <SwiperSlide key={index}>
              <SuggestionFoodCard
                image={drink.image}
                name={drink.name}
                onAdd={() => handleAdd(drink)}
                onViewAR={() => viewAR(drink)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
}
