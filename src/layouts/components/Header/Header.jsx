// eslint-disable-next-line react/prop-types
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { LogoIcon, PlusIcon, TopArrowIcon } from "../../../components/Icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const Header = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
              <div className={cx("dropdown-menu")}>{dropMenu()}</div>
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

const dropMenu = () => {
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
                  " tracking-[-1.8px] flex text-[42px]  px-[10px]  justify-between items-center"
                )}
              >
                <div className={cx("")}>
                  <span>{item}</span>
                </div>
                <span className={cx("icon")}>
                  <PlusIcon width="19" />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">image</div>
      </div>
    </div>
  );
};
