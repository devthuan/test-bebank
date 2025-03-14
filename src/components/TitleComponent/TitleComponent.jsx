import classNames from "classnames/bind";
import styles from "./TitleComponent.module.scss"; // Import file CSS
import Button from "../Button/Button";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);
const TitleComponent = ({ title }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-[60px] pt-[60px]">
        <h1 className="text-[40px]">{title}</h1>
        <Button title="View all" />
      </div>
      {/* <div className="mt-[60px] pl-[60px] w-auto h-auto"></div> */}
    </div>
  );
};

export default TitleComponent;
