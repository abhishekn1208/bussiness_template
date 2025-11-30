import React from "react";
import { FaTrash } from "react-icons/fa";

type AddedItemsProps = {
  items: {
    id: string;
    name: string;
    image: string;
    variantQuantity?: number;
    unit?: string;
    quantity: number;
    price: number;
    category?: string;
  }[];
  totalPrice: number;
  totalQuantity: number;
  onRemove?: (id: string) => void; // ✅ New prop
};

const AddedItems: React.FC<AddedItemsProps> = ({
  items,
  totalPrice,
  totalQuantity,
  onRemove,
  selectedCategory
}) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] bg-white rounded-lg shadow-md p-6 text-gray-600">
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-sm text-gray-500">
          Add some delicious items to get started!
        </p>
      </div>
    );
  }

  const groupedItems = items.reduce((groups, item) => {
    const category = item.category || "Others";
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {} as Record<string, typeof items>);

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-md space-y-6">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <h4 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800">
            {category}
          </h4>
          <div className="space-y-4">
            {categoryItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Left: Image + Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-300 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-medium text-gray-900 text-[15px]">
                      {item.name}
                    </h2>
                   {selectedCategory==="Drinks" && (
                     <p className="text-sm text-gray-600">
                      Quantity: {item.variantQuantity}
                      {item.unit} × {item.quantity>1 ? item.quantity-1 : item.quantity}
                    </p>
                   )}
                  </div>
                </div>

                {/* Right: Price + Remove */}
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-semibold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>

                  {/* 🗑 Remove Button */}
                  <button
                    onClick={() => onRemove?.(item.id,category)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    title="Remove item"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Summary */}
      <div className="border-t pt-3 mt-4 flex justify-between text-[16px] font-semibold text-gray-800">
        <span>Total Items: {totalQuantity}</span>
        <span>Total: ₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default AddedItems;
