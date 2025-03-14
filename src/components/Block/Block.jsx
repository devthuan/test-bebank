import classNames from "classnames/bind";
import styles from "./Block.module.scss";
import { PlusIcon } from "../Icons";

const cx = classNames.bind(styles);

const Block = ({ title, content, classWrap, classH1, classP }) => {
  return (
    <div
      className={cx(
        "px-[60px] py-[40px] w-full h-full bg-[#a58f6417] flex flex-col gap-y-[30px] ",
        "hover-box",
        classWrap
      )}
    >
      <PlusIcon />
      <h1 className={cx("text-[24px] text-left", classH1)}>{title}</h1>
      <p
        className={cx(
          "18px leading-relaxed text-left",
          "18px leading-relaxed text-left ",
          classP
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default Block;
