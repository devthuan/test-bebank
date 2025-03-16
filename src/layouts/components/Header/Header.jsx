import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { LogoIcon, PlusIcon, TopArrowIcon } from "../../../components/Icons";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
const cx = classNames.bind(styles);

const Header = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const listMenu = [
    { title: "Atlasology Plus", url: "/services" },
    { title: "Naturopathy", url: "/services" },
    { title: "Massage", url: "/services" },
    { title: "Foot Reflexology", url: "/services" },
    { title: "Dietary Advice", url: "/services" },
    { title: "Phyto­therapy", url: "/services" },
    { title: "Intestinal cleansing", url: "/services" },
    { title: "Iron Consultation", url: "/services" },
    { title: "Thyroid Health", url: "/services" },
    { title: "All Services", url: "/services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true); // Khi cuộn xuống >50px thì đổi màu
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <div
      className={cx(
        `w-screen lg:h-[90px] h-[60px] fixed z-10 top-0  
          ${
            isScrolled
              ? "bg-[#edddc3] transition duration-700"
              : "bg-transparent transition duration-700"
          }
              ${className}
        `
      )}
    >
      <div className="absolute z-10 w-full h-full px-4 md:px-10 lg:px-16 flex justify-between items-center border-b-[1px] border-black">
        <div className="w-[120px] md:w-[156px] pt-[10px]">
          <LogoIcon />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block w-[400px]">
          <ul className="flex w-full gap-3 mt-[10px]">
            <Link to={"/"}>
              <li
                className={cx(
                  "item",
                  "text-[14px] font-normal hover:opacity-70 transition-opacity duration-300"
                )}
              >
                HOME
              </li>
            </Link>
            <li
              className={cx("item", "dropdown", "text-[14px] font-normal")}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="text-[14px] font-normal flex items-center space-x-1 hover:opacity-70 transition-opacity duration-300">
                <span>SERVICES</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={cx("dropdown-menu", {
                  "opacity-0 invisible": !isDropdownOpen,
                  "opacity-100 visible": isDropdownOpen,
                })}
              >
                {dropMenu({ hoverIndex, setHoverIndex })}
              </div>
            </li>
            <NavLink to={"/blog"}>
              <li
                className={cx(
                  "item",
                  "text-[14px] font-normal hover:opacity-70 transition-opacity duration-300"
                )}
              >
                BLOG
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li
                className={cx(
                  "item",
                  "text-[14px] font-normal hover:opacity-70 transition-opacity duration-300"
                )}
              >
                ABOUT
              </li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li
                className={cx(
                  "item",
                  "text-[14px] font-normal hover:opacity-70 transition-opacity duration-300"
                )}
              >
                CONTACT
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Desktop Book Appointment */}
        <div className="hidden lg:flex items-center text-[14px] font-normal pt-[10px] hover:opacity-70 transition-opacity duration-300 cursor-pointer">
          BOOK APPOINTMENT
          <span className="mt-[1px] transform transition-transform duration-300 group-hover:translate-y-1">
            <TopArrowIcon />
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className=" lg:hidden text-[32px] md:text-[40px] cursor-pointer transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "×" : "="}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-[0] z-1 bottom-0 left-0 w-full h-[calc(100vh)] bg-[#888151] 
        transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-8 md:px-10 pt-[100px]">
          <nav className="space-y-6 md:space-y-8">
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className="block text-2xl md:text-3xl font-normal hover:opacity-70 transition-opacity"
            >
              HOME
            </NavLink>
            <div>
              <button
                onClick={toggleMobileServices}
                className="block text-2xl md:text-3xl font-normal hover:opacity-70 transition-opacity w-full text-left"
              >
                SERVICES {isMobileServicesOpen ? "-" : "+"}
              </button>
              <div
                className={`pl-4 mt-4 space-y-4 ${
                  isMobileServicesOpen ? "block" : "hidden"
                }`}
              >
                {listMenu.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.url}
                    onClick={toggleMobileMenu}
                    className="block text-xl md:text-2xl font-normal hover:opacity-70 transition-opacity"
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink
              to="/blog"
              onClick={toggleMobileMenu}
              className="block text-2xl md:text-3xl font-normal hover:opacity-70 transition-opacity"
            >
              BLOG
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMobileMenu}
              className="block text-2xl md:text-3xl font-normal hover:opacity-70 transition-opacity"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMobileMenu}
              className="block text-2xl md:text-3xl font-normal hover:opacity-70 transition-opacity"
            >
              CONTACT
            </NavLink>
          </nav>

          <div className="mt-12 md:mt-16">
            <button className="text-xl md:text-2xl font-normal flex items-center hover:opacity-70 transition-opacity">
              BOOK APPOINTMENT
              <span className="ml-2">
                <TopArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const dropMenu = ({ hoverIndex, setHoverIndex }) => {
  const listMenu = [
    { title: "Atlasology Plus", url: "/services" },
    { title: "Naturopathy", url: "/services" },
    { title: "Massage", url: "/services" },
    { title: "Foot Reflexology", url: "/services" },
    { title: "Dietary Advice", url: "/services" },
    { title: "Phyto­therapy", url: "/services" },
    { title: "Intestinal cleansing", url: "/services" },
    { title: "Iron Consultation", url: "/services" },
    { title: "Thyroid Health", url: "/services" },
    { title: "All Services", url: "/services" },
  ];

  const listImages = [
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bfb83c62ed5413a33e2e37_pli-angebot-thumbs8.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fc284e1b75e4a4931f1_pli-angebot-thumbs4.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bbe3132250795f49e83b45_pli-angebot-thumbs5.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65c92fbcfcf52462598fdec5_pli-angebot-thumbs9.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fb0ba999399de48bfa6_pli-angebot-thumbs2.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fc284e1b75e4a4931f1_pli-angebot-thumbs4.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bc236dfcb5dbe2a26470d6_pli-angebot-thumbs6.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fa7345f8bb10b3dbf9e_pli-angebot-thumbs1.jpg",
    "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bfae6db68dbbea9efb4c06_pli-angebot-thumbs7.jpg",
  ];

  return (
    <div
      className={cx(
        "dropdown-menu",
        "w-screen h-[650px] bg-[#888151] pt-[130px] pb-[60px] px-[60px]",
        "transition-all duration-300 transform"
      )}
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-[572px]">
          <ul className={cx("item-drop-list")}>
            {listMenu.map((item, index) => (
              <li
                key={index}
                className={cx(
                  "item-drop",
                  "tracking-[-2.8px] flex text-[42px] px-[10px] justify-between items-center"
                )}
                onMouseEnter={() => setHoverIndex(index)} // Cập nhật index khi hover
                onMouseLeave={() => setHoverIndex(null)} // Reset khi rời chuột
              >
                <div
                  className={cx(
                    "wrap-text",
                    "flex w-full pl-[5px] h-full justify-between"
                  )}
                >
                  <a
                    to={item.url}
                    className="flex w-full pl-[5px] h-full justify-between"
                  >
                    <span>{item.title}</span>
                    <span className={cx("icon")}>
                      <PlusIcon width="19" />
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full">
          <div className="relative w-full h-full flex items-center justify-center pb-[30px]">
            {hoverIndex !== null && (
              <img
                src={listImages[hoverIndex]}
                alt="Hovered Image"
                className={cx(
                  hoverIndex !== null && "visible",
                  "img-animation",
                  "absolute w-auto h-full object-cover transition-opacity duration-300 ease-in-out opacity-100"
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
