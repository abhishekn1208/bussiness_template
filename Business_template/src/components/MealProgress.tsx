import React from "react";
import mascot from '../assets/mascot.png'
import drinks from '/../assets/drinks.png'
import starter from "/../assets/starter.png"
import meal from "/../assets/Meal.png"
import dessert from "/../assets/Dessert.png"



const steps = [
  { id: 1, icon:mascot, label: "Waiter" },
  { id: 2, icon:drinks , label: "Drinks" },
  { id: 3, icon: starter, label: "Starter" },
  { id: 4, icon: meal, label: "Main Course" },
  { id: 5, icon: dessert, label: "Dessert" },
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
