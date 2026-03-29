import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCard from "../../ui/adminCard/AdminCard";
import type { Admin } from "../../ui/adminCard/AdminCard";
import img1 from "../../../assets/cardimg/image1.png";
import "./AdminProducts.scss";

const DEFAULT_PRODUCTS: Admin[] = [
  {
    id: 1,
    name: "Barberton Daisy",
    price: 8000,
    image: img1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 2,
    name: "Mountain Boot",
    price: 9500,
    image: img1,
    description: "Удобные ботинки для прогулок и горного туризма.",
  },
];

const STORAGE_KEY = "adminProducts";

const AdminProducts: React.FC = () => {
  const [products, setProducts] = useState<Admin[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved) as Admin[];
      } catch {
        return DEFAULT_PRODUCTS;
      }
    }
    return DEFAULT_PRODUCTS;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (product: Admin) => {
    navigate("/admin-edit", { state: product });
  };

  return (
    <section id="admin-products">
      <div className="container">
        <div className="admin-products">
          {products.length === 0 ? (
            <p>Товары отсутствуют.</p>
          ) : (
            products.map((item) => (
              <AdminCard
                key={item.id}
                product={item}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
