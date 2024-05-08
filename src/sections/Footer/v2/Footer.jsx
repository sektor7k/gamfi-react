import FooterBottom from "../FooterBottom/v1";
import shapeLeft from "assets/image/right.png"
import shapeRight from "assets/image/left.png"
import rocketThumb from "assets/image/footerimage.png"
import FooterStyleWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterStyleWrapper>

      <FooterBottom />

      <div className="footer_cta">
        <img src={shapeLeft} alt="shape" className="cta_shape cta_shape_left img-fluid" />
        <img src={shapeRight} alt="shape" className="cta_shape cta_shape_right img-fluid" />
        <div className="rocket_thumb">
          <img src={rocketThumb} alt="rocket icon" className="img-fluid" />
        </div>
        <a href="#" className="cta_link">PLAY NOW</a>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
