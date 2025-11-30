import drinks from "/assets/drinks.png";
import starter from "/assets/starter.png";
import meal from "/assets/Meal.png";
import dessert from "/assets/Dessert.png";

type SidebarProps = {
  onSelectCategory: (name: string) => void;
  selectedCategory: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const menuItems = [
    { name: "Drinks", image: drinks },
    { name: "Starter", image: starter },
    { name: "Meal", image: meal },
    { name: "Dessert", image: dessert },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-400 via-gray-100 to-gray-100 top-0 sticky duration-300 rounded-md overflow-y-auto w-[80px]">
      <ul className="space-y-6 py-4 pb-8 flex flex-col justify-center items-center">
        {menuItems.map((item) => {
          const isSelected = selectedCategory === item.name;

          return (
 <li
  key={item.name}
  onClick={() => onSelectCategory(item.name)}
  className={`
    flex flex-col items-center gap-3 w-[60px] cursor-pointer transition-all duration-300
    md:py-6 py-4 px-3 rounded-xl text-gray-900
    border border-transparent  /* always keep a border */
    ${isSelected 
      ? "scale-110 bg-white/20 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.4)] border-white/40"
      : "opacity-80 hover:opacity-100"
    }
  `}
>


  <span
    className={`text-sm md:text-base font-semibold transition-all ${
      isSelected
        ? "text-gray-900 drop-shadow-sm"
        : "text-gray-900"
    }`}
  >
    {item.name}
  </span>

  <img
    src={item.image}
    alt={item.name}
    className={`
      w-full object-contain rounded-md transition-all duration-300 
      ${isSelected ? "scale-110" : ""}
    `}
  />
</li>

          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
