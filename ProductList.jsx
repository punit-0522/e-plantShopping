import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Tulsi",
    price: 10,
    category: "Medicinal",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Neem",
    price: 15,
    category: "Medicinal",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 4,
    name: "Mint",
    price: 8,
    category: "Aromatic",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 5,
    name: "Lavender",
    price: 14,
    category: "Aromatic",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 6,
    name: "Rosemary",
    price: 13,
    category: "Aromatic",
    image: "https://via.placeholder.com/100"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  // Track added items
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));

    setAddedItems(prev => ({
      ...prev,
      [plant.id]: true
    }));
  };

  return (
    <div>
      <h2>Plants</h2>

      {["Medicinal", "Aromatic"].map(category => (
        <div key={category}>
          <h3>{category} Plants</h3>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                
                {/* ✅ Thumbnail */}
                <img src={plant.image} alt={plant.name} width="100" height="100" />

                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>

                {/* ✅ Disable button after adding */}
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems[plant.id]}
                >
                  {addedItems[plant.id] ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
