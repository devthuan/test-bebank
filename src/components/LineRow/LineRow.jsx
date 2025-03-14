import classNames from "classnames/bind";
import styles from "./LineRow.module.scss";

const cx = classNames.bind(styles);

const LineRow = ({ padding = 'px-[60px]' }) => {
  return (
    <div className={`w-full ${padding} flex `}>
      <span className="w-full h-[1px] bg-black"></span>
    </div>
  );
};

export default LineRow;
