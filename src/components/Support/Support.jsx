import classNames from "classnames/bind";
import styles from "./Support.module.scss";
import { ArrowRightIcon } from "../Icons";

const cx = classNames.bind(styles);

const Support = () => {
  return (
    <div
      className={cx(
        "wrap-support",
        "flex flex-col md:flex-row h-[610px] md:h-[407px] w-full"
      )}
    >
      <div
        className={cx(
          "wrap-img",
          "h-[200px] w-full  md:h-[407px] md:w-[280px]"
        )}
      >
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/66f8258db96e6857093b6f01_pli-cta-image-3.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#888151] px-[20px] py-[40px] md:px-[60px] md:py-[80px]">
        <h1 className="text-[40px] md:text-[50px] tracking-[-1px] md:tracking-[-3px]">
          Let me help you
        </h1>

        <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[33px] mt-[10px] md:mt-[10px]">
          Do you have a physical problem that you would like to address with the
          tools of complementary medicine? Then I`m the right person for you.
        </p>
        <div className="mt-[20px] md:mt-[40px]">
          <button className={cx("button-with-icon", "mt-[20px] md:mt-[30px]")}>
            <span className={cx("icon")}>
              <ArrowRightIcon />
            </span>
            <span className={cx("text", "text-[14px] md:text-[16px]")}>
              Book appointment
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
