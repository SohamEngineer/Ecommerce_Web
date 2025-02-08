import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate=useNavigate();
    const handleShop=()=>{
        navigate("/productlist")
    }
  return (
    <div className="about-container">
      <h2 className="about-title">A FEW WORDS</h2>
      <h1 className="about-heading">ABOUT US</h1>
      <div className="about-content">
        <div className="about-left">
          <p>OUR JOURNEY BEGAN WITH A SHARED LOVE FOR THIS
            <br /> BEWITCHING SEASON</p>
        </div>
        <div className="about-right">
          <p>
            Our journey began with a shared passion for all things Halloween, 
            from the thrill of dressing up in spooky costumes to the joy of 
            decorating our homes with enchanting decorations and indulging in 
            sweet treats that make the season truly special.
          </p>
          <p>
            Our team of Halloween enthusiasts and connoisseurs has scoured the 
            realms of costumes, decorations, and confections to bring you a 
            handpicked selection of the finest and most bewitching items. Each 
            costume we offer has been chosen to ignite your imagination and 
            make your Halloween dreams a reality.
          </p>
          <p>
            Join us as we celebrate the magic, creativity, and enchantment 
            that Halloween has to offer.
          </p>
        </div>
      </div>
      <div className="banner">
  <div className="banner-content">
    <p className="new-collection">NEW COLLECTION</p>
    <h1 className="Title">Unwrap Sweets, Embrace Costumes, and Decorate with Delight! Shop, Create, and Celebrate Halloween with Us Today!</h1>
    
    <button className="shop-now-button" onClick={handleShop}>SHOP NOW</button>
  </div>
    </div> 
    </div>
  );
}

export default About;
