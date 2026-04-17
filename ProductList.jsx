import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Tulsi", price: 10, category: "Medicinal" },
  { id: 2, name: "Mint", price: 8, category: "Aromatic" },
  { id: 3, name: "Aloe Vera", price: 12, category: "Medicinal" },
  { id: 4, name: "Lavender", price: 15, category: "Aromatic" },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>

      {["Medicinal", "Aromatic"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button onClick={() => dispatch(addToCart(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
