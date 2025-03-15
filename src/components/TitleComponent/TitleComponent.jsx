import classNames from "classnames/bind";
import styles from "./TitleComponent.module.scss"; // Import file CSS
import Button from "../Button/Button";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);
const TitleComponent = ({ title }) => {
  return (
    <div className="h-full w-full px-[30px]">
      <div className="h-full flex items-center justify-between   lg:px-[60px] pt-[20px]  lg:pt-[60px]">
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px]">{title}</h1>
        <Button title="View all" />
      </div>
    </div>
  );
};

export default TitleComponent;
