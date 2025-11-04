import React from "react";
import cash from "/src/assets/cash.png"
import online from "/src/assets/barcode.png"

const PaymentOptions: React.FC = () => {
  const options = [
    {
      name: "Pay Cash",
      logo: cash,
    },
    {
      name: "Pay Online",
      logo: online,
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex justify-around">
      {options && options.length > 0 ? (
        options.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 mb-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={option.logo}
                alt={option.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-800 font-medium text-base">
                {option.name}
              </span>
            </div>

            <div className="text-sm text-gray-600"></div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">No options available.</p>
      )}
    </div>
  );
};

export default PaymentOptions;
