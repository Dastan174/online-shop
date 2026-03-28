import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Admin } from "../../ui/adminCard/AdminCard";
import "./AdminEdit.scss";

const STORAGE_KEY = "adminProducts";

const AdminEdit: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productFromNav = location.state as Admin | undefined;

  const [product, setProduct] = useState<Admin>({
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  useEffect(() => {
    if (productFromNav) {
      setProduct(productFromNav);
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Admin[];
        if (parsed.length > 0) setProduct(parsed[0]);
      }
    }
  }, [productFromNav]);

  const handleChange = (field: keyof Admin, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [field]: field === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? (JSON.parse(saved) as Admin[]) : [];
    const updated = parsed.map((item) =>
      item.id === product.id ? product : item,
    );
    if (!parsed.find((item) => item.id === product.id)) updated.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    navigate("/admin-products");
  };

  return (
    <section className="admin-edit-section">
      <div className="admin-edit-container">
        <h2 className="admin-edit-title">Редактировать товар</h2>

        <form onSubmit={handleSubmit} className="admin-edit-form">
          <div className="form-group">
            <label className="form-label">Название</label>
            <input
              type="text"
              className="form-input"
              value={product.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Введите название"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Цена (KGS)</label>
            <input
              type="number"
              className="form-input"
              value={product.price}
              onChange={(e) => handleChange("price", e.target.value)}
              placeholder="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Описание</label>
            <textarea
              className="form-textarea"
              value={product.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Введите описание товара"
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Изображение (URL или путь)</label>
            <input
              type="text"
              className="form-input"
              value={product.image}
              onChange={(e) => handleChange("image", e.target.value)}
              placeholder="https://... или /src/assets/..."
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-save">
              Сохранить
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() => navigate("/admin-products")}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminEdit;
