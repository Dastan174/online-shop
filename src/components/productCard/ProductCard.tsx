import React from "react";
import "./ProductCard.scss";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-img">
        {product.discount && (
          <span className="discount">{product.discount}</span>
        )}
        <img src={product.image} alt={product.name} />
        <div className="icons">
          <CiShoppingCart />
          <CiHeart />
          <CiSearch />
        </div>
      </div>
      <h4>{product.name}</h4>
      <div className="price">
        <span className="new">${product.price}.00</span>
        {product.oldPrice && (
          <span className="old">${product.oldPrice}.00</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
