import "./CartProducts.scss";
import { TfiTrash } from "react-icons/tfi";

const CartProducts = () => {
  return (
    <div className="cart">
      <div className="product">
        <img
          src="https://img.freepik.com/free-psd/monstera-deliciosa-plant-pot-lush-green-leaves-home-decor-indoor-plant-tropical-foliage-vibrant-green-potted-plant-houseplant-greenery-plant-photography_191095-84025.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
        <h3>Barberton Daisy</h3>
      </div>
      <div className="price">
        <h5>$119.00</h5>
        <div className="counter">
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
        <h4>$238.00</h4>
        <button className="trash">
          <TfiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
