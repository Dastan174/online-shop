import React from "react";
import ProductCard from "../../productCard/ProductCard";
import type { Product } from "../../productCard/ProductCard";
import "./ProductsList.scss";
import img1 from "../../../assets/cardimg/image1.png";
import img2 from "../../../assets/cardimg/image2.png";
import img3 from "../../../assets/cardimg/image3.png";
import img4 from "../../../assets/cardimg/image4.png";
import img5 from "../../../assets/cardimg/image5.png";
import img6 from "../../../assets/cardimg/image6.png";
import img7 from "../../../assets/cardimg/image7.png";
import img8 from "../../../assets/cardimg/image8.png";
import img9 from "../../../assets/cardimg/image9.png";

const ProductsList: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Barberton Daisy",
      price: 119,
      image: img1,
    },

    {
      id: 2,
      name: "Angel Wing Begonia",
      price: 169,
      image: img2,
    },
    {
      id: 3,
      name: "African Violet",
      price: 199,
      oldPrice: 229,
      discount: "13% OFF",
      image: img3,
    },
    {
      id: 4,
      name: "Beach Spider Lily",
      price: 129,
      image: img4,
    },
    {
      id: 5,
      name: "Blushing Bromeliad",
      price: 139,
      image: img5,
    },
    {
      id: 6,
      name: "Aluminum Plant",
      price: 179,
      image: img6,
    },
    {
      id: 7,
      name: "Bird's Nest Fern",
      price: 99,
      image: img7,
    },
    {
      id: 8,
      name: "Broadleaf Lady Palm",
      price: 59,
      image: img8,
    },
    {
      id: 9,
      name: "Chinese Evergreen",
      price: 39,
      image: img9,
    },
  ];

  return (
    <section id="products-list">
      <div className="container">
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
