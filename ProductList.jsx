import React, { useState } from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Indoor Plants",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    image: "https://via.placeholder.com/150",
  },
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="product-list">
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div className="products">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
