import "./Hero.scss";
import mainimg from "../../../assets/image/image.png";
import smallimg from "../../../assets/image/image copy.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <p className="hero-subtitle">Welcome to GreenShop</p>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p className="hero-desc">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="hero-btn">SHOP NOW</button>
          </div>
          <div className="hero-img">
            <img className="main-img" src={mainimg} alt="" />
            <img className="small-img" src={smallimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
