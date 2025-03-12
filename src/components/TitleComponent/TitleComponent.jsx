import classNames from "classnames/bind";
import styles from "./TitleComponent.module.scss"; // Import file CSS
import { ArrowRightIcon } from "../Icons";
import Button from "../Button/Button";

const cx = classNames.bind(styles);
const TitleComponent = ({ title }) => {
  return (
    <div className="">
      <div className="flex justify-between px-[60px] pt-[60px]">
        <h1 className="text-[40px]">{title}</h1>
        {/* <button className={cx("button-with-icon", "mt-[30px]")}>
          <span className={cx("icon")}>
            <ArrowRightIcon />
          </span>
          <span className={cx("text", "text-[16px]")}>View all</span>
        </button> */}
        <Button title="View all" />
      </div>
      <div className="mt-[60px] pl-[60px] w-auto h-auto"></div>
    </div>
  );
};

export default TitleComponent;
