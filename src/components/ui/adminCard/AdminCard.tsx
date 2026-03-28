import type React from "react";
import "./AdminCard.scss";
import { CiEdit, CiTrash } from "react-icons/ci";

export interface Admin {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface Props {
  product: Admin;
  onDelete: (id: number) => void;
  onEdit: (product: Admin) => void;
}

const AdminCard: React.FC<Props> = ({ product, onDelete, onEdit }) => {
  return (
    <div className="admin-card">
      <div className="admin-card-top">
        <img
          src={product.image} 
          alt={product.name}
          className="admin-card-image"
        />
        <div className="admin-card-info">
          <h4>{product.name}</h4>
          <p className="admin-card-price">{product.price}.00 KGS</p>
          <p className="admin-card-description">{product.description}</p>
        </div>
      </div>

      <hr className="admin-card-line" />

      <div className="admin-card-actions">
        <button
          type="button"
          className="action-btn delete-btn"
          onClick={() => onDelete(product.id)}
        >
          <CiTrash /> Удалить
        </button>
        <button
          type="button"
          className="action-btn edit-btn"
          onClick={() => onEdit(product)}
        >
          <CiEdit /> Редактировать
        </button>
        <button type="button" className="action-btn detail-btn">
          Детали
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
