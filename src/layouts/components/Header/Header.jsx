// eslint-disable-next-line react/prop-types
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { LogoIcon, PlusIcon, TopArrowIcon } from "../../../components/Icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const Header = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Khi cuộn xuống >50px thì đổi màu
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cx(
        `w-screen h-[90px]  fixed z-10  top-0  
          ${
            isScrolled
              ? "bg-[#edddc3]  transition duration-700"
              : "bg-transparent transition duration-700"
          }
              ${className}
        `
      )}
    >
      <div className="w-full h-full px-[60px]  flex justify-between items-center border-b-[1px] border-black">
        <div className="w-[156px] ">
          <LogoIcon />
        </div>
        <div className="w-[400px] ">
          <ul className="flex w-full gap-4 mt-[10px]">
            <li className={cx("item", "text-[14px] font-normal  ")}>HOME</li>
            <li className={cx("item", "dropdown", "text-[14px] font-normal  ")}>
              <div className="text-[14px] font-normal flex items-center space-x-1 ">
                <span>SERVICES</span>
                <span>+</span>
              </div>
              <div className={cx("dropdown-menu")}>
                {dropMenu({ hoverIndex, setHoverIndex })}
              </div>
            </li>
            <li className={cx("item", "text-[14px] font-normal ")}>BLOG</li>
            <li className={cx("item", "text-[14px] font-normal ")}>ABOUT</li>
            <li className={cx("item", "text-[14px] font-normal ")}>CONTACT</li>
          </ul>
        </div>
        <div className={cx("item", "text-[14px] font-normal flex ")}>
          BOOK APPOINTMENT
          <span className="mt-[1px]">
            <TopArrowIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

const dropMenu = ({ hoverIndex, setHoverIndex }) => {
  const listMenu = [
    "Atlasology Plus",
    "Naturopathy",
    "Massage",
    "Foot Reflexology",
    "Dietary Advice",
    "Phyto­therapy",
    "Intestinal cleansing",
    "Iron Consultation",
    "Thyroid Health",
    "All Services",
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
        "w-screen h-[650px]  bg-[#888151] pt-[130px] pb-[60px] px-[60px]"
      )}
    >
      <div className="w-full h-full grid grid-cols-2 gap-8">
        <div className="max-w-[572px]">
          <ul className={cx("item-drop-list")}>
            {listMenu.map((item, index) => (
              <li
                key={index}
                className={cx(
                  "item-drop",
                  " tracking-[-2.8px]  flex text-[42px]  px-[10px]  justify-between items-center"
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
                  <span>{item}</span>
                  <span className={cx("icon")}>
                    <PlusIcon width="19" />
                  </span>
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
