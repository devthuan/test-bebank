import classNames from "classnames/bind";
import styles from "./LineRow.module.scss";

const cx = classNames.bind(styles);

const LineRow = ({ padding = "p-[60px]" }) => {
  return (
    <div className={`w-screen ${padding} flex justify-center items-center`}>
      <span className="w-full h-[1px] bg-black"></span>
    </div>
  );
};

export default LineRow;
