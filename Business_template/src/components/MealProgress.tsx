import React from "react";

const steps = [
  { id: 1, icon: "/src/assets/mascot.png", label: "Waiter" },
  { id: 2, icon: "/src/assets/drinks.png", label: "Drinks" },
  { id: 3, icon: "/src/assets/starter.png", label: "Starter" },
  { id: 4, icon: "/src/assets/Meal.png", label: "Main Course" },
  { id: 5, icon: "/src/assets/Dessert.png", label: "Dessert" },
];

export default function MealProgress({ orderedCategories = [] }) {
  // Ensure Waiter is always considered active
  const activeLabels = ["Waiter", ...orderedCategories];

  return (
    <div className="w-full p-4 bg-white">
      <div className="flex items-center justify-center w-full h-[60px] shadow-2xl border border-gray-300 rounded-xl">
        {steps.map((step, index) => {
          const isActive = activeLabels.includes(step.label);

          // ✅ Check if the *next* step is also active to color the connecting line
          const nextStepActive =
            index < steps.length - 1 &&
            activeLabels.includes(steps[index + 1].label);

          return (
            <React.Fragment key={step.id}>
              <div className="relative flex-1 flex justify-center">
                <img
                  src={step.icon}
                  alt={step.label}
                  className={`w-[36px] h-[36px] md:w-24 md:h-24 md:object-contain object-cover transition duration-300 
                    ${isActive ? "grayscale-0 scale-105" : "grayscale opacity-70"}`}
                />
              </div>

              {/* ✅ Colored line between two active steps */}
              {index < steps.length - 1 && (
                <div
                  className={`h-[3px] md:mx-2 min-w-[39px] md:min-w-[60px] transition-colors duration-300 
                    ${
                      isActive && nextStepActive
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
