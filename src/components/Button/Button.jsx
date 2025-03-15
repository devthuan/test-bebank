import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { ArrowRightIcon } from "../Icons";

const cx = classNames.bind(styles);

const Button = ({ title, classBtn, classIcon, classTitle }) => {
  return (
    <button
      className={cx(
        "button-with-icon",
        // "mt-[30px]",
        "mobile:mt-[10px]",
        "tablet:mt-[20px]",
        "desktop:mt-[30px]", // Added desktop class
        `${classBtn}`
      )}
    >
      <span
        className={cx(
          "icon",
          "mobile:icon-mobile",
          "tablet:icon-tablet",
          "desktop:icon-desktop",
          `${classIcon}`
        )}
      >
        <ArrowRightIcon />
      </span>
      <span
        className={cx(
          "text",
          "text-[16px]",
          "mobile:text-[12px]",
          "tablet:text-[14px]",
          "desktop:text-[16px]", // Added desktop class
          `${classTitle}`
        )}
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
