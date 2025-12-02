import drinks from "/assets/drinks.webp";
import starter from "/assets/starter.webp";
import meal from "/assets/Meal.webp";
import dessert from "/assets/Dessert.webp";

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
    relative flex flex-col items-center gap-3 w-[60px] cursor-pointer transition-all duration-300
    md:py-6 py-4 px-3 rounded-xl text-gray-900
    border border-transparent
    ${isSelected
      ? "scale-110 bg-white/10 backdrop-blur-xl border-white/40 shadow-[0_8px_24px_rgba(255,255,255,0.25)] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/20 before:to-transparent"
      : "opacity-80 hover:opacity-100"
    }
  `}
>
              <span
                className={`text-sm md:text-base font-semibold transition-all ${
                  isSelected ? "text-gray-900 drop-shadow-sm" : "text-gray-900"
                }`}
              >
                {item.name}
              </span>

             <div
  className={`
    w-[45px] h-[45px] rounded-lg overflow-hidden flex items-center justify-center
    ${isSelected ? "bg-white/10" : "bg-transparent"}
  `}
>
  <img
    src={item.image}
    alt={item.name}
    className={`w-full h-full object-cover transition-all duration-300 ${
      isSelected ? "scale-110" : ""
    }`}
  />
</div>

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
