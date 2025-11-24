import { useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import jd from '/assets/JD.jpg';
import jdGif from "/assets/jd.gif";
import glass from "/assets/glass.png";
import jmsn from "/assets/jamienson.png";
import cokeGif from "/assets/coke.gif";
import jb from "/assets/jim.png";
import tempura from "/assets/tempura.png";
import prawns from "/assets/prawn.jpg";
import lamb from "/assets/lamb.png";
import banner1 from "/assets/Banner1.png";
import banner2 from "/assets/Banner2.png";
import banner3 from "/assets/Banner3.png";

const Cater = ({
  orderedCategories,
  setOrderedCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const router = useNavigate();
  // const [selectedCategory,setSelectedCategory] = useState("Drinks")
  const dispatch = useDispatch();

  const drinks = [
    {
      _id: 1,
      name: "Jack Daniel",
      image: jd,
      description:
        "Jack Daniel’s is a smooth, charcoal-mellowed Tennessee whiskey known for its rich flavor and iconic heritage. Crafted in Lynchburg since 1866, it embodies bold character with a hint of sweetness.",
      gif: jdGif,

      variables: [
        { quantity: 30, unit: "ml", price: 890, icon: "/assets/glass.png" },
        {
          quantity: 60,
          unit: "ml",
          price: 1650,
          icon: glass,
        },
        {
          quantity: 90,
          unit: "ml",
          price: 2390,
          icon: glass,
        },
      ],

      offers: [
        {
          quantity: 750,
          unit: "ml",
          off: 10,
          icon: jd,
          price: 3500,
        },
      ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },

    {
      _id: 2,
      name: "Jameson",
      image: jmsn,
      description:
        "Jameson is a triple-distilled Irish whiskey celebrated for its smooth, balanced taste with notes of vanilla and spice.",
      gif: cokeGif,

      variables: [
        { quantity: 30, unit: "ml", price: 790, icon: glass },
        {
          quantity: 60,
          unit: "ml",
          price: 1490,
          icon: glass,
        },
        {
          quantity: 90,
          unit: "ml",
          price: 2190,
          icon: glass,
        },
      ],
      offers: [
        {
          quantity: 750,
          unit: "ml",
          off: 10,
          icon: jmsn,
          price: 3500,
        },
      ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },

    {
      _id: 3,
      name: "Jim Beam",
      image: jb,
      description:
        "Jim Beam is a classic Kentucky bourbon known for its rich caramel flavor and smooth, oaky finish.",
      gif: cokeGif,

      variables: [
        { quantity: 30, unit: "ml", price: 820, icon: "/assets/glass.png" },
        {
          quantity: 60,
          unit: "ml",
          price: 1590,
          icon: glass,
        },
        {
          quantity: 90,
          unit: "ml",
          price: 2290,
          icon: glass,
        },
      ],
      offers: [
        {
          quantity: 750,
          unit: "ml",
          off: 10,
          icon: jb,
          price: 3500,
        },
      ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },
  ];

  const starters = [
    {
      _id: 4,
      name: "Tempura Enoki Nest",
      image: tempura,
      description:
        "Delicate strands of enoki mushrooms fried to golden perfection, forming a crispy, airy nest. A light, artistic starter that pairs crunch with subtle umami flavor.",
      gif: jdGif,
      price: 390,

      // variables: [
      //   { quantity: 30, unit: "ml", price: 890, icon: "/assets/glass.png" },
      //   {
      //     quantity: 60,
      //     unit: "ml",
      //     price: 1650,
      //     icon: "/assets/glass.png",
      //   },
      //   {
      //     quantity: 90,
      //     unit: "ml",
      //     price: 2390,
      //     icon: "/assets/glass.png",
      //   },
      // ],

      // offers: [
      //   {
      //     quantity: 750,
      //     unit: "ml",
      //     off : 10,
      //     icon: "/assets/JD.jpg",
      //     price: 3500,
      //   },
      // ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },

    {
      _id: 5,
      name: "Wasabi Prawn Torpedoes",
      image: prawns,
      description:
        "Juicy prawns wrapped in a crisp golden shell, bursting with zesty wasabi heat. A bold fusion bite that fires up your palate with every crunch.",
      gif: cokeGif,
      price: 490,

      // variables: [
      //   { quantity: 30, unit: "ml", price: 790, icon: "/assets/glass.png" },
      //   {
      //     quantity: 60,
      //     unit: "ml",
      //     price: 1490,
      //     icon: "/assets/glass.png",
      //   },
      //   {
      //     quantity: 90,
      //     unit: "ml",
      //     price: 2190,
      //     icon: "/assets/glass.png",
      //   },
      // ],
      // offers: [
      //     {
      //       quantity: 750,
      //       unit: "ml",
      //       off : 10,
      //       icon: "/assets/jamienson.png",
      //       price: 3500,
      //     },
      //   ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },

    {
      _id: 6,
      name: "Harissa Lamb Cigars",
      image: lamb,
      description:
        "Crispy rolls stuffed with spiced lamb mince and North African harissa for a fiery kick. A smoky, elegant appetizer that blends heat, crunch, and rich aroma.",
      gif: cokeGif,
      price: 790,
      // variables: [
      //   { quantity: 30, unit: "ml", price: 820, icon: "/assets/glass.png" },
      //   {
      //     quantity: 60,
      //     unit: "ml",
      //     price: 1590,
      //     icon: "/assets/glass.png",
      //   },
      //   {
      //     quantity: 90,
      //     unit: "ml",
      //     price: 2290,
      //     icon: "/assets/glass.png",
      //   },
      // ],
      //  offers: [
      //         {
      //           quantity: 750,
      //           unit: "ml",
      //           off : 10,
      //           icon: "/assets/jim.png",
      //           price: 3500,
      //         },
      //       ],

      nutrients: [
        { label: "Carbs", value: 50, colors: ["#ef4444", "#f472b6"] },
        { label: "Sugar", value: 30, colors: ["#22c55e", "#34d399"] },
        { label: "Fat", value: 10, colors: ["#facc15", "#fb923c"] },
      ],
    },
  ];

  const meals = [];
  const desserts = [];

  const banners = [banner1, banner2, banner3];

  const handleProductView = (drink) => {
    // console.log(drink);
    router("/product", { state: { drink } });
  };

  const getSelectedItems = () => {
    switch (selectedCategory) {
      case "Starter":
        return starters;
      case "Meal":
        return meals;
      case "Dessert":
        return desserts;
      default:
        return drinks;
    }
  };

  const selectedItems = getSelectedItems();

  const handleAddToCart = async (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    if (!orderedCategories.includes(selectedCategory)) {
      setOrderedCategories((prev) => [...prev, selectedCategory]);
    }
  };

  return (
    <>
      <Banner banners={banners} />

      <div className="flex w-full bg-gray-50 px-2">
        <div className="h-screen sticky top-0">
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={(name) => setSelectedCategory(name)}
          />
        </div>

        {/* <div className="flex-1"> */}
        {/* <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Drinks</h2> */}

        <div className="flex flex-col gap-4 overflow-hidden px-2">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedCategory}
          </h2> */}
          {selectedItems && selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <FoodCard
                key={index}
                drink={item}
                onAdd={(item) => handleAddToCart(item)}
                onViewAR={() => handleProductView(item)}
                selectedCategory={selectedCategory}
                setOrderedCategories={setOrderedCategories}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-16 text-gray-500">
              {/* <img
      src="/assets/empty-category.png"
      alt="No items"
      className="w-40 h-40 mb-6 opacity-80"
    /> */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {selectedCategory} is coming soon 🚀
              </h2>
              <p className="text-gray-500">
                Looks like this category hasn’t been added yet. <br />
                Please ask the admin to add {selectedCategory.toLowerCase()} or
                check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
    // </div>
  );
};

export default Cater;
