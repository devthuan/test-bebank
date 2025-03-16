import classNames from "classnames/bind";
import styles from "./Block.module.scss";
import { PlusIcon } from "../Icons";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const cx = classNames.bind(styles);

const Block = ({ title, content, classWrap, classH1, classP }) => {
  return (
    <div
      className={cx(
        "px-[50px] py-[40px] md:px-[40px] md:py-[60px] lg:px-[30px] lg:py-[30px] w-full h-full bg-[#a58f6417] flex flex-col gap-y-[10px] md:gap-y-[15px] lg:gap-y-[20px]",
        "hover-box",
        classWrap
      )}
    >
      <PlusIcon />
      <ScrollReveal>
        <h1
          className={cx(
            "text-[24px] md:text-[18px] lg:text-[20px] text-left",
            classH1
          )}
        >
          {title}
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <p
          className={cx(
            "text-[16px] md:text-[14px] lg:text-[16px] leading-relaxed text-left",
            classP
          )}
        >
          {content}
        </p>
      </ScrollReveal>
    </div>
  );
};

export default Block;
