import React, { useRef, useEffect } from "react";
import carouselStyles from "./styles/_carousel.module.scss";
import heroStyles from "./styles/_hero.module.scss";
import imageInfoStyles from "./styles/_image-info.module.scss";
import formStyles from "./styles/_form.module.scss";
import footerStyles from "./styles/_footer.module.scss";
import headerStyles from "./styles/_header.module.scss";
import emptyScrollStyles from "./styles/_empty-scroll.module.scss";
import homeStyles from "./_home.module.scss";
import MeetingRoom from "assets/images/carousel_image.jpg";
import { ReactComponent as TxoLogo } from "assets/icons/txo_logo_2.svg";
import { ReactComponent as ThirdwayLogo } from "assets/icons/thirdway.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <>
      <Header />
      <div className={homeStyles["home-container"]}>
        <EmptyScrollBlock />
        <HeroBlock />
        <CarouselBlock />
        <ImageInfoBlock />
        <FormBlock />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const element = headerRef.current;
    gsap.fromTo(
      element,
      { opacity: "0" },
      {
        opacity: "1",
        scrollTrigger: {
          scrub: 0.1,
          start: "top top",
          end: "bottom top",
          trigger: "#animation-trigger-txo",
        },
      }
    );
  }, []);

  return (
    <header ref={headerRef} className={headerStyles["header"]}>
      <ul>
        <li>ENQUIRIES</li>
        <li>General</li>
        <li>+44 (0) 020 3613 4733</li>
        <li>Info@txowork.com</li>
      </ul>
      <ul>
        <li>&nbsp;</li>
        <li>Sales</li>
        <li>+44 (0) 020 3613 4733 </li>
        <li>Info@txowork.com</li>
      </ul>
      <ul>
        <li>ADDRESS</li>
        <li>Morelands</li>
        <li>5-23 Old Street</li>
        <li>London EC1V 9HL</li>
      </ul>
      <ul>
        <li>CONNECT</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
      </ul>
    </header>
  );
}

function EmptyScrollBlock() {
  const txoLogoRef = useRef(null);

  useEffect(() => {
    const element = txoLogoRef.current;
    gsap.fromTo(
      element,
      { scale: "1" },
      {
        scale: "0.3",
        scrollTrigger: {
          scrub: true,
          start: "top top",
          end: "bottom top",
          trigger: "#animation-trigger-txo",
        },
        yPercent: -240,
        xPercent: -35,
      }
    );
  }, []);

  return (
    <div
      id="animation-trigger-txo"
      className={emptyScrollStyles["empty-scroll-block"]}
    >
      <TxoLogo className={emptyScrollStyles["txo-logo"]} ref={txoLogoRef} />
    </div>
  );
}

function HeroBlock() {
  const heroIntroText = useRef(null);

  useEffect(() => {
    const element = heroIntroText.current;
    gsap.fromTo(
      element,
      { opacity: "0" },
      {
        opacity: "1",
        scrollTrigger: {
          scrub: 0.1,
          start: "top top",
          end: "bottom top",
          trigger: "#animation-trigger-txo",
        },
      }
    );
  }, []);

  return (
    <div className={heroStyles["hero-block"]}>
      <h1 ref={heroIntroText} className={heroStyles["hero-title"]}>
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
        <button
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Submit
        </button>
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
