import React from "react";
import { MainLayout } from "components/layout/main-layout";
import carouselStyles from "./styles/_carousel.module.scss";
import heroStyles from "./styles/_hero.module.scss";
import imageInfoStyles from "./styles/_image-info.module.scss";
import formStyles from "./styles/_form.module.scss";
import footerStyles from "./styles/_footer-styles.module.scss";
import homeStyles from "./_home.module.scss";
import { Header } from "components/header";
import MeetingRoom from "assets/images/carousel_image.jpg";
import { ReactComponent as TxoLogo } from "assets/icons/txo_logo_2.svg";
import { ReactComponent as ThirdwayLogo } from "assets/icons/thirdway.svg";
// import { StickyFooter } from "components/sticky-footer";

function Home() {
  return (
    <>
      <Header />
      <div className={homeStyles["home-container"]}>
        <HeroBlock />
        <CarouselBlock />
        <ImageInfoBlock />
        <FormBlock />
        <Footer />
      </div>
      {/* <StickyFooter /> */}
    </>
  );
}

function HeroBlock() {
  return (
    <div className={heroStyles["hero-block"]}>
      <h1 className={heroStyles["hero-title"]}>
        We’re hands-on and committed to evolving your business to strive for
        better.
      </h1>
      <div className={heroStyles["hero-subsection"]}>
        <h2 className={heroStyles["hero-subtitle"]}>OUR OFFERING</h2>
        <p className={heroStyles["hero-paragraph"]}>
          We provide physical, pragmatic and personal business guidance. Success
          is never static. Neither are we. We’ll be your business partners for
          positive change.
        </p>
      </div>
    </div>
  );
}

function CarouselBlock() {
  return (
    <div>
      <img
        className={carouselStyles["carousel"]}
        src={MeetingRoom}
        alt="Meeting Room"
      />
    </div>
  );
}

function ImageInfoBlock() {
  return (
    <div className={imageInfoStyles["image-info-block"]}>
      <div className={imageInfoStyles["image-info-name-avaliability"]}>
        <p>Name: Sample Title</p>
        <p>{`Availability: [Now]`}</p>
      </div>
      <p className={imageInfoStyles["read-more"]}>Read More</p>
    </div>
  );
}

function FormBlock() {
  return (
    <div className={formStyles["form-block"]}>
      <h2>STAY UPDATED</h2>
      <form>
        <h1>Newsletter</h1>
        <input placeholder="Full Name" type="text" />
        <input placeholder="Company Name" type="text" />
        <input placeholder="Email Address" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <div className={footerStyles["footer-block"]}>
      <ThirdwayLogo />
      <ul>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Accessibility</li>
      </ul>
    </div>
  );
}

export { Home };
