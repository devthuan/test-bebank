import classNames from "classnames/bind";
import styles from "./Description.module.scss";
import Accordion from "../Accordion/Accordion";

const cx = classNames.bind(styles);

const Description = ({ title, data }) => {
  return (
    <div className={cx("grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[60px]")}>
      <div className="col-span-1 text-[20px] md:text-[30px]">{title}</div>
      <div className="col-span-1 md:col-span-2">
        <Accordion items={data} />
      </div>
    </div>
  );
};

export default Description;
