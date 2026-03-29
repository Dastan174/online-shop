import img from "../../../assets/greenshop/image copy.png";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={img} alt="" />
          <div className="header-nav">
            <nav>Home</nav>
            <nav>Shop</nav>
            <nav>Plant Care</nav>
            <nav>Blogs</nav>
          </div>
          <div className="header-cards">
            <IoSearch />
            <CiShoppingCart />
            <button>
              <IoLogOutOutline />
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
