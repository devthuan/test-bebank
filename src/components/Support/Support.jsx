import classNames from "classnames/bind";
import styles from "./Support.module.scss";
import { ArrowRightIcon } from "../Icons";

const cx = classNames.bind(styles);

const Support = () => {
  return (
    <div className={cx("wrap-support", "flex h-[437px] w-full")}>
      <div className={cx("wrap-img", " h-[437px] w-[443px]")}>
        <img
          className="h-[437px] w-[500px] object-cover"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/66f8258db96e6857093b6f01_pli-cta-image-3.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#888151] px-[60px] py-[80px]">
        <h1 className="text-[75px] tracking-[-3px]">Let me help you</h1>

        <p className="text-[24px] leading-[33px] mt-[20px]">
          Do you have a physical problem that you would like to address with the
          tools of complementary medicine? Then I`m the right person for you.
        </p>
        <div className="mt-[40px]">
          <button className={cx("button-with-icon", "mt-[30px]")}>
            <span className={cx("icon")}>
              <ArrowRightIcon />
            </span>
            <span className={cx("text", "text-[16px]")}>Book appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
