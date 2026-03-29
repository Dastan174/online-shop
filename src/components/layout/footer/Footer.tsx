import "./Footer.css";
import logo from "../../../assets/Logo.png";
import { CiLocationOn } from "react-icons/ci";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { LiaYoutubeSquare } from "react-icons/lia";
import lastLogo from "../../../assets/Rectangle 35.png";
import footerLogo from "../../../assets/1e460c89ee17b2b09a69f96d2552ed3b0b04ac05.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer1">
          <img src={logo} alt="" />
          <div className="location">
            <Link to={"#"}>
              <CiLocationOn />
            </Link>
            <p>
              70 West Buckingham Ave. <br />
              Farmingdale, NY 11735
            </p>
          </div>
          <div className="message">
            <Link to={"#"}>
              <LuMessageSquareMore />
            </Link>

            <p>contact@greenshop.com</p>
          </div>
          <div className="call">
            <Link to={"#"}>
              <FiPhoneCall />
            </Link>

            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className="footer2">
          <div className="account">
            <h2>My Account</h2>
            <p>
              My Account <br />
              Our stores <br />
              Contact us <br />
              Career <br />
              Specials
            </p>
          </div>
          <div className="help">
            <h2>Help & Guide</h2>
            <p>
              Help Center <br />
              How to Buy <br />
              Shipping & Delivery <br />
              Product Policy <br />
              How to Return
            </p>
          </div>
          <div className="categories">
            <h2>Categories</h2>
            <p>
              House Plants <br />
              Potter Plants <br />
              Seeds <br />
              Small Plants <br />
              Accessories
            </p>
          </div>
          <div className="social">
            <h2>Social Media</h2>
            <div className="icons">
              <button>
                <FaFacebookSquare />
              </button>
                <button>
                <FaInstagramSquare />
                </button>
                <button>
                <AiFillTwitterSquare />
                </button>
                <button>
                <BiLogoLinkedinSquare />
                </button>
                <button>
                <LiaYoutubeSquare />
                </button>
            </div>
            <div className="accept">
              <h2>We accept</h2>
              <img src={footerLogo} alt="" />
            </div>
          </div>
        </div>
        <img src={lastLogo} alt="" />
      </div>
    </section>
  );
};

export default Footer;
