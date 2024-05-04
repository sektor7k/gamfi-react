import Button from "components/button";
import BannerStyleWrapper from "./Banner.style";


const Banner = () => {
  
  return (
    <>
      <BannerStyleWrapper>
        
        <div class="container d-flex justify-content-center align-items-center vh-100">
          <div class="row">
            <div class="col-md-12">
              <div class="gamfi_v2_hero_left text-center">
                <h2>
                  Multichain DeFi Web <span>3.0</span> Ecosystem
                </h2>
                <p>
                  The next generation gaming ecosystem for IGOs and NFT market
                </p>
                <div class="banner-btns d-flex justify-content-center">
                  <Button href="#" md variant="mint">
                    Play Now
                  </Button>
                </div>


              </div>
            </div>
          </div>
        </div>

      </BannerStyleWrapper>
    </>
  );
};

export default Banner;
