import React, { useRef, useEffect, useState } from "react";
import carouselStyles from "./styles/_carousel.module.scss";
import heroStyles from "./styles/_hero.module.scss";
import imageInfoStyles from "./styles/_image-info.module.scss";
import formStyles from "./styles/_form.module.scss";
import footerStyles from "./styles/_footer.module.scss";
import headerStyles from "./styles/_header.module.scss";
import emptyScrollStyles from "./styles/_empty-scroll.module.scss";
import homeStyles from "./_home.module.scss";
import CarouselImageOne from "assets/images/carousel-images/c1.jpg";
import CarouselImageTwo from "assets/images/carousel-images/c2.jpeg";
import CarouselImageThree from "assets/images/carousel-images/c3.jpeg";
import CarouselImageFour from "assets/images/carousel-images/c4.jpeg";
import CarouselImageFive from "assets/images/carousel-images/c5.jpeg";
import Slider from "react-slick";
import { ReactComponent as TxoLogo } from "assets/icons/txo_logo_2.svg";
import { ReactComponent as ThirdwayLogo } from "assets/icons/thirdway.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import gsap from "gsap";
import variables from "theme/_constants.module.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

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
          end: "+=50%",
        },
      }
    );
  }, []);

  return (
    <header ref={headerRef} className={headerStyles["header"]}>
      <div className={headerStyles["header-items"]}>
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
      </div>
    </header>
  );
}

function EmptyScrollBlock() {
  const windowHeight = useRef(document.createElement("div"));

  const txoLogoRef = useRef(null);

  useEffect(() => {
    const txoLogoRefElement = txoLogoRef.current;

    gsap.to(txoLogoRefElement, {
      scale: 0.3,
      transformOrigin: "top 20px",
      scrollTrigger: {
        start: "top top",
        end: "+=70%",
        scrub: true,
        pinSpacing: false,
      },
    });

    ScrollTrigger.create({
      trigger: "#pin-trigger",
      start: "top top",
      endTrigger: "#fake-id", // using a non-existent id to ensure the effect stays in place indefinitely
      end: "bottom top",
      pin: "#pin-me",
      pinSpacing: false,
    });
  }, []);

  return (
    <>
      <section
        className={emptyScrollStyles["empty-scroll-block"]}
        ref={windowHeight}
      />
      <div id="pin-trigger">
        <TxoLogo
          id="pin-me"
          ref={txoLogoRef}
          className={emptyScrollStyles["txo-logo"]}
        />
      </div>
    </>
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
          scrub: 0.2,
          start: "top top",
          end: "+=100%",
        },
      }
    );
  }, []);

  return (
    <section className={heroStyles["hero-block"]}>
      <h1
        id="hero-block"
        ref={heroIntroText}
        className={heroStyles["hero-title"]}
      >
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
    </section>
  );
}

function CarouselBlock() {
  const sliderRefContainer = useRef<any>(null);

  const sliderRef = useRef<any>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    setCarouselWidth(sliderRefContainer.current.offsetWidth);
  }, [sliderRefContainer.current]);

  const carouselImages = [
    { description: "Modern Meeting Room", imageLink: CarouselImageOne },
    { description: "Modern Reception", imageLink: CarouselImageTwo },
    {
      description: "Modern Office Space One",
      imageLink: CarouselImageThree,
    },
    {
      description: "Modern Social Space",
      imageLink: CarouselImageFour,
    },
    {
      description: "Meeting Office Space Two",
      imageLink: CarouselImageFive,
    },
  ];

  const [mouseOnCarousel, setMouseOnCarousel] = useState(false);

  const handleMouseOnCarousel = (mouseOnCarouselUpdated: boolean) => {
    setMouseOnCarousel(mouseOnCarouselUpdated);
  };

  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: React.MouseEvent) => {
    setCoord({ x: event.screenX, y: event.screenY });
  };

  const nextPrev = carouselWidth / 2 < coord.x;

  const handleNextSlide = () => {
    if (nextPrev) {
      sliderRef.current.slickNext();
    }
    if (!nextPrev) {
      sliderRef.current.slickPrev();
    }
  };

  document.onmousemove = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("#carouselSection")!.style.marginLeft = x + "px";
    document.getElementById("#carouselSection")!.style.marginTop =
      y - 150 + "px";
  };

  const slider_settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: false,
    speed: 500,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: parseInt(variables.desktopWidth, 10),
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        style={{ display: `${mouseOnCarousel ? "block" : "none"}` }}
        className={carouselStyles["custom-cursor"]}
        id="#carouselSection"
      >
        {`${nextPrev ? "Next" : "Prev"}`}
      </div>
      <section
        ref={sliderRefContainer}
        onMouseEnter={() => {
          handleMouseOnCarousel(true);
        }}
        onMouseLeave={() => {
          handleMouseOnCarousel(false);
        }}
        onMouseMove={handleMouseMove}
      >
        <Slider ref={sliderRef} {...slider_settings}>
          {carouselImages.map((image) => {
            return (
              <img
                key={image.description}
                className={carouselStyles["carousel-image"]}
                src={image.imageLink}
                onClick={handleNextSlide}
                alt={image.description}
              />
            );
          })}
        </Slider>
      </section>
    </>
  );
}

function ImageInfoBlock() {
  return (
    <section className={imageInfoStyles["image-info-block"]}>
      <div className={imageInfoStyles["image-info-name-avaliability"]}>
        <p>Name: Sample Title</p>
        <p>{`Availability: [Now]`}</p>
      </div>
      <p className={imageInfoStyles["read-more"]}>Read More</p>
    </section>
  );
}

function FormBlock() {
  return (
    <section className={formStyles["form-block"]}>
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
    </section>
  );
}

function Footer() {
  return (
    <footer className={footerStyles["footer-block"]}>
      <ThirdwayLogo />
      <ul>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Accessibility</li>
      </ul>
    </footer>
  );
}

export { Home };
