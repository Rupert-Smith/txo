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
import { useMediaQuery } from "react-responsive";

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
        <FormBlock />
        <Footer />
        <div id="page-bottom" />
      </div>
    </>
  );
}

function Header() {
  const deviceIsDesktop = useMediaQuery({
    query: `(min-width: ${variables.desktopWidth})`,
  });

  const [openHeader, setOpenHeader] = useState(false);

  const headerRef = useRef(null);
  const headerRefMobile = useRef(null);

  useEffect(() => {
    const headerRefElement = headerRef.current;
    const headerRefMobileElement = headerRefMobile.current;
    gsap.fromTo(
      headerRefElement,
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
    gsap.fromTo(
      headerRefMobileElement,
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

  const headerItems = [
    {
      title: "ENQUIRIES",
      rowOne: "General",
      rowTwo: "+44 (0) 020 3613 4733",
      rowThree: "Info@txowork.com",
      mobileLineBreakBottom: false,
      mobileLineBreakTop: true,
    },
    {
      key: "itemTwo",
      title: <br />,
      rowOne: "Sales",
      rowTwo: "+44 (0) 020 3613 4733",
      rowThree: "Info@txowork.com",
      mobileLineBreakBottom: true,
      mobileLineBreakTop: false,
    },
    {
      key: "itemThree",
      title: "ADDRESS",
      rowOne: "Morelands",
      rowTwo: "5-23 Old Street",
      rowThree: "London EC1V 9HL",
      mobileLineBreakBottom: true,
      mobileLineBreakTop: false,
    },
    {
      key: "itemFour",
      title: "CONNECT",
      rowOne: "Instagram",
      rowTwo: "LinkedIn",
      rowThree: "Facebook",
      mobileLineBreakBottom: true,
      mobileLineBreakTop: false,
    },
  ];

  return (
    <>
      {deviceIsDesktop && (
        <header ref={headerRef} className={headerStyles["header"]}>
          <div className={headerStyles["header-items"]}>
            {headerItems.map((item) => {
              return (
                <ul key={item.key}>
                  <li>{item.title}</li>
                  <li>{item.rowOne}</li>
                  <li>{item.rowTwo}</li>
                  <li>{item.rowThree}</li>
                </ul>
              );
            })}
          </div>
        </header>
      )}
      {!deviceIsDesktop && (
        <div ref={headerRefMobile}>
          <header className={`${headerStyles["mobile-header-container"]}`}>
            <div
              onClick={() => {
                setOpenHeader(!openHeader);
              }}
              className={`${headerStyles["mobile-header-button"]} ${
                openHeader ? headerStyles["open"] : ""
              }`}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </header>
          {openHeader && (
            <div className={`${headerStyles["mobile-header-list"]}`}>
              {headerItems.map((item) => {
                return (
                  <ul key={item.key}>
                    {item.mobileLineBreakTop && (
                      <li
                        className={`${headerStyles["mobile-header-line-break-top"]}`}
                      />
                    )}
                    <li
                      className={`${headerStyles["header-mobile-list-small-font"]}`}
                    />
                    <li
                      className={`${headerStyles["header-mobile-title"]} ${headerStyles["header-mobile-list-small-font"]}`}
                    >
                      {item.title}
                    </li>
                    <li
                      className={`${headerStyles["header-mobile-list-medium-font"]}`}
                    >
                      {item.rowOne}
                    </li>
                    <li
                      className={`${headerStyles["header-mobile-list-medium-font"]}`}
                    >
                      {item.rowTwo}
                    </li>
                    <li
                      className={`${headerStyles["header-mobile-list-medium-font"]}`}
                    >
                      {item.rowThree}
                    </li>
                    {item.mobileLineBreakBottom && (
                      <li
                        className={`${headerStyles["mobile-header-line-break-bottom"]}`}
                      />
                    )}
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
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
      endTrigger: "#page-bottom",
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
  const sliderRefText = useRef<any>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);

  const [readMoreOpen, setReadMoreOpen] = useState(false);

  useEffect(() => {
    setCarouselWidth(sliderRefContainer.current.offsetWidth);
  }, [sliderRefContainer.current]);

  const carouselImages = [
    {
      name: "Modern Meeting Room",
      imageLink: CarouselImageOne,
      avaliability: `[Now]`,
      location: `[Soho]`,
      size: `[4,200] sqft`,
      description:
        "Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.",
    },
    {
      name: "Modern Reception",
      imageLink: CarouselImageTwo,
      avaliability: `[Sold]`,
      location: `[Paris]`,
      size: `[2,500] sqft`,
      description:
        "Peditaquis eum audaecto quam, susa consecae isto eum fugit. Quam eos premqui tem cupta il.",
    },
    {
      name: "Modern Office Space One",
      imageLink: CarouselImageThree,
      avaliability: `[Now]`,
      location: `[New York]`,
      size: `[3,000] sqft`,
      description:
        "Consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit. Quam eos premqui tem cupta il.",
    },
    {
      name: "Modern Social Space",
      imageLink: CarouselImageFour,
      avaliability: `[Now]`,
      location: `[Cambridge]`,
      size: `[1,100] sqft`,
      description:
        "Rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit. Quam eos premqui tem cupta il inimet as rerum. Sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist",
    },
    {
      name: "Meeting Office Space Two",
      imageLink: CarouselImageFive,
      avaliability: `[Sold]`,
      location: `[Scotland]`,
      size: `[3,800] sqft`,
      description:
        "Audaecto peditaquis eum  quam, susa consecae isto eum fugit.",
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
      sliderRefText.current.slickNext();
    }
    if (!nextPrev) {
      sliderRef.current.slickPrev();
      sliderRefText.current.slickPrev();
    }
  };

  const deviceIsDesktop = useMediaQuery({
    query: `(min-width: ${variables.desktopWidth})`,
  });

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
      {
        breakpoint: parseInt(variables.mobilewidth, 10),
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          centerPadding: "0px",
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleTouchMove = () => {
    handleNextSlide();
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
                key={image.name}
                className={carouselStyles["carousel-image"]}
                src={image.imageLink}
                onClick={() => {
                  if (deviceIsDesktop) {
                    handleNextSlide();
                  }
                }}
                onTouchMove={() => {
                  if (!deviceIsDesktop) {
                    handleTouchMove();
                  }
                }}
                alt={image.name}
              />
            );
          })}
        </Slider>
        <Slider ref={sliderRefText} {...slider_settings}>
          {carouselImages.map((image) => {
            return (
              <section
                key={image.name}
                className={imageInfoStyles["image-info-block"]}
              >
                <div
                  className={`${imageInfoStyles["image-info-row"]} ${imageInfoStyles["image-info-row-short"]}`}
                >
                  <p>{`Name: ${image.name}`}</p>
                  <p>{`Availability:  ${image.avaliability}`}</p>
                </div>
                {readMoreOpen && (
                  <>
                    <div
                      className={`${imageInfoStyles["image-info-row"]} ${imageInfoStyles["image-info-row-short"]}`}
                    >
                      <p>{`Location: ${image.location}`}</p>
                      <p>{`Size:  ${image.size}`}</p>
                    </div>
                    <div
                      className={`${imageInfoStyles["image-info-row"]} ${imageInfoStyles["image-info-row-long"]}`}
                    >
                      <p></p>
                      <p>{`${image.description}`}</p>
                    </div>
                  </>
                )}
                <p
                  onClick={() => {
                    setReadMoreOpen(!readMoreOpen);
                  }}
                  className={imageInfoStyles["read-more"]}
                >
                  {!readMoreOpen ? "Read More" : "Hide Text"}
                </p>
              </section>
            );
          })}
        </Slider>
      </section>
    </>
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
