import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { ArrowRightIcon } from "../Icons";

const cx = classNames.bind(styles);

const Button = ({ title, classBtn, classIcon, classTitle }) => {
  return (
    <button className={cx("button-with-icon", "mt-[30px]", `${classBtn}`)}>
      <span className={cx("icon", `${classIcon}`)}>
        <ArrowRightIcon />
      </span>
      <span className={cx("text", "text-[16px]", `${classTitle}`)}>
        {title}
      </span>
    </button>
  );
};

export default Button;
