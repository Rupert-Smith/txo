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
import { RemoveScroll } from "react-remove-scroll";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { fontSize } from "@mui/system";
import useWindowResize from "./hooks/useWindowResize";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const [openMobileHeader, setOpenMobileHeader] = useState(false);

  return (
    <>
      <Header
        openMobileHeader={openMobileHeader}
        setOpenMobileHeader={setOpenMobileHeader}
      />
      <div className={homeStyles["home-container"]}>
        <div className={openMobileHeader ? homeStyles["hide"] : ""}>
          <EmptyScrollBlock openMobileHeader={openMobileHeader} />
          <HeroBlock />
          <CarouselBlock />
          <FormBlock />
          <Footer />
          <div id="page-bottom" />
        </div>
      </div>
    </>
  );
}

type HeaderProps = {
  openMobileHeader: boolean;
  setOpenMobileHeader: Function;
};

function Header({ openMobileHeader, setOpenMobileHeader }: HeaderProps) {
  const deviceIsDesktop = useMediaQuery({
    query: `(min-width: ${variables.desktopWidth})`,
  });

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
      key: "itemOne",
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
            {openMobileHeader && (
              <TxoLogo className={headerStyles["txo-logo"]} />
            )}
            <div
              onClick={() => {
                setOpenMobileHeader(!openMobileHeader);
              }}
              className={`${headerStyles["mobile-header-button"]} ${
                openMobileHeader ? headerStyles["open"] : ""
              }`}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </header>
          {openMobileHeader && (
            <RemoveScroll>
              <div className={`${headerStyles["mobile-header-list"]}`}>
                {headerItems.map((item, index) => {
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
                        className={`${
                          index !== 1
                            ? headerStyles["header-mobile-title"]
                            : headerStyles[
                                "header-mobile-title-empty-title-row"
                              ]
                        } ${headerStyles["header-mobile-list-small-font"]}`}
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
            </RemoveScroll>
          )}
        </div>
      )}
    </>
  );
}

type EmptyScrollBlockProps = {
  openMobileHeader: boolean;
};

function EmptyScrollBlock({ openMobileHeader }: EmptyScrollBlockProps) {
  const windowHeight = useWindowResize()[1];

  const emptyScrollBlock = useRef(document.createElement("div"));

  const txoLogoRef = useRef(null);

  useEffect(() => {
    const txoLogoRefElement = txoLogoRef.current;

    gsap.to(txoLogoRefElement, {
      scale: 0.3,
      transformOrigin: "top 0px",
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

  const calculateWindowPercentageVariable = () => {
    let percentageVariable = 15.5;

    if (windowHeight > 1000) {
      percentageVariable = 17;
    }

    if (windowHeight > 1300) {
      percentageVariable = 18;
    }

    if (windowHeight > 1400) {
      percentageVariable = 20;
    }
    if (windowHeight > 1500) {
      percentageVariable = 22;
    }
    if (windowHeight > 1700) {
      percentageVariable = 25;
    }

    return percentageVariable;
  };
  const emptyScrollBlockHeight = Math.ceil(
    windowHeight / calculateWindowPercentageVariable()
  );

  return (
    <>
      <section
        style={{ height: `${emptyScrollBlockHeight}vh` }}
        className={`${emptyScrollStyles["empty-scroll-block"]}`}
        ref={emptyScrollBlock}
      />
      <div
        id="pin-trigger"
        className={openMobileHeader ? homeStyles["hide"] : ""}
      >
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
        <div className={heroStyles["hero-subtitle"]}>OUR OFFERING</div>
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

  const [readMoreOpen, setReadMoreOpen] = useState(false);

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

  const [nextPrev, setNextPrev] = useState(false);

  const handleNextSlide = () => {
    if (nextPrev) {
      sliderRef.current.slickNext();
    }
    if (!nextPrev) {
      sliderRef.current.slickPrev();
    }
  };

  const deviceIsDesktop = useMediaQuery({
    query: `(min-width: ${variables.desktopWidth})`,
  });

  document.onmousemove = function (e) {
    const rect = document
      .getElementById("carouselSection")!
      .getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    setNextPrev(window.outerWidth / 2 < x);

    document.getElementById("carouselCursor")!.style.marginLeft = x + "px";
    document.getElementById("carouselCursor")!.style.marginTop = y + "px";
  };

  const [carouselImagesFiltered, setCarouselImagesFiltered] = useState(
    carouselImages[0]
  );

  const slider_settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCarouselImagesFiltered(carouselImages[newIndex]);
    },
    arrows: false,
    speed: 500,
    focusOnSelect: true,
    swipeToSlide: true,

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
      <section
        onClick={() => {
          if (deviceIsDesktop) {
            handleNextSlide();
          }
        }}
        className={carouselStyles["carousel-image"]}
        id="carouselSection"
        ref={sliderRefContainer}
        onMouseEnter={() => {
          setMouseOnCarousel((state) => !state);
        }}
        onMouseLeave={() => {
          setMouseOnCarousel((state) => !state);
        }}
      >
        {deviceIsDesktop && (
          <div
            style={{ display: `${mouseOnCarousel ? "block" : "none"}` }}
            className={carouselStyles["custom-cursor"]}
            id="carouselCursor"
          >
            {`${nextPrev ? "Next" : "Prev"}`}
          </div>
        )}

        <Slider ref={sliderRef} {...slider_settings}>
          {carouselImages.map((image) => {
            return (
              <img key={image.name} src={image.imageLink} alt={image.name} />
            );
          })}
        </Slider>
      </section>
      <div
        key={carouselImagesFiltered.name}
        className={imageInfoStyles["image-info-block"]}
      >
        <div className={imageInfoStyles["two-columns"]}>
          <div>{`Name: ${carouselImagesFiltered.name}`}</div>
          <div>{`Availability:  ${carouselImagesFiltered.avaliability}`}</div>
        </div>
        <div className={` ${imageInfoStyles["line-break"]}`} />

        {readMoreOpen && (
          <>
            <div
              className={`${imageInfoStyles["column"]}  ${imageInfoStyles["two-columns"]}`}
            >
              <div>{`Location: ${carouselImagesFiltered.location}`}</div>
              <div>{`Size:  ${carouselImagesFiltered.size}`}</div>
            </div>

            {deviceIsDesktop ? (
              <div
                className={`${imageInfoStyles["column"]} ${imageInfoStyles["one-column"]} `}
              >
                <div>{`${carouselImagesFiltered.description}`}</div>
              </div>
            ) : (
              <div
                className={`${imageInfoStyles["column"]} ${imageInfoStyles["two-columns"]} `}
              >
                <div />
                <div>{`${carouselImagesFiltered.description}`}</div>
              </div>
            )}
          </>
        )}
        <div
          onClick={() => {
            setReadMoreOpen(!readMoreOpen);
          }}
          className={imageInfoStyles["read-more"]}
        >
          {!readMoreOpen ? "Read More" : "Hide Text"}
        </div>
      </div>

      {/* <div
          className={`${imageInfoStyles["image-info-row"]} ${
            readMoreOpen
              ? imageInfoStyles["image-info-row-short"]
              : imageInfoStyles["image-info-row-long"]
          }`}
        >
          <p>{`Name: ${carouselImagesFiltered.name}`}</p>
          <p>{`Availability:  ${carouselImagesFiltered.avaliability}`}</p>
        </div>
        {readMoreOpen && (
          <div className={imageInfoStyles["image-info-table"]}>
            <div
              className={`${imageInfoStyles["image-info-row"]} ${imageInfoStyles["image-info-row-short"]}`}
            >
              <p
                className={`${imageInfoStyles["image-info-column"]} `}
              >{`Location: ${carouselImagesFiltered.location}`}</p>
              <p
                className={`${imageInfoStyles["image-info-column"]} `}
              >{`Size:  ${carouselImagesFiltered.size}`}</p>
            </div>
            {deviceIsDesktop ? (
              <div
                className={`${imageInfoStyles["image-info-row"]} ${imageInfoStyles["image-info-row-long"]}`}
              >
                <p />
                <p
                  className={`${imageInfoStyles["image-info-column"]} `}
                >{`${carouselImagesFiltered.description}`}</p>
              </div>
            ) : (
              <div className={`${imageInfoStyles["mobile-bottom-row"]}`}>
                <p
                  className={`${imageInfoStyles["image-info-column"]} `}
                >{`${carouselImagesFiltered.description}`}</p>
                <div className={` ${imageInfoStyles["image-info-row-long"]}`} />
              </div>
            )}
          </div>
        )}
        <p
          onClick={() => {
            setReadMoreOpen(!readMoreOpen);
          }}
          className={imageInfoStyles["read-more"]}
        >
          {!readMoreOpen ? "Read More" : "Hide Text"}
        </p>
      </div> */}
    </>
  );
}

function FormBlock() {
  return (
    <section className={formStyles["form-block"]}>
      <div className={formStyles["stay-updated"]}>STAY UPDATED</div>
      <form>
        <h1>Newsletter</h1>
        <input
          className={formStyles["full-name"]}
          placeholder="Full Name"
          type="text"
        />
        <input
          className={formStyles["company-name"]}
          placeholder="Company Name"
          type="text"
        />
        <input
          className={formStyles["email-address"]}
          placeholder="Email Address"
          type="text"
        />
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
      <ThirdwayLogo className={footerStyles["third-way-logo"]} />
      <ul>
        <NavLink
          className={footerStyles["terms-and-conditions"]}
          to="#terms-and-conditions"
        >
          <li>Terms and Conditions</li>
        </NavLink>
        <NavLink
          className={footerStyles["privacy-policy"]}
          to="#privacy-policy"
        >
          <li>Privacy Policy</li>
        </NavLink>
        <NavLink className={footerStyles["cookie-policy"]} to="#cookie-policy">
          <li>Cookie Policy</li>
        </NavLink>
        <NavLink to="#accessibility">
          <li>Accessibility</li>
        </NavLink>
      </ul>
    </footer>
  );
}

export { Home };
