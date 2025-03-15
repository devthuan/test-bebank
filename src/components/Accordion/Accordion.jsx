import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Accordion.module.scss"; // Import file CSS
import { PlusIconBold } from "../Icons";

const cx = classNames.bind(styles);
const Accordion = ({ items, bg = true }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Đóng nếu đã mở, mở nếu đã đóng
  };

  return (
    <div className={cx("accordion")}>
      {items?.map((item, index) => (
        <div
          key={index}
          className={cx(
            "accordion-item",
            `
          ${
            activeIndex === index
              ? bg
                ? "bg-[#edddc3]"
                : "bg-transparent"
              : ""
          }
            ${
              item.title === "Your body doesn't feel safe." ? "border-none" : ""
            }
          `
          )}
        >
          <div
            className={cx(
              "accordion-title",
              "py-[30px]",
              `${activeIndex === index ? "open_title" : ""}`
            )}
            onClick={() => handleClick(index)}
          >
            <p
              className={cx(
                "accordion__title-text",
                "text-[25px] uppercase pr-[30px] lg:pr-[0]"
              )}
            >
              {item.title}
            </p>
            <div>
              {activeIndex === index ? (
                <PlusIconBold width="25" className={cx("icon_plus_rotate")} />
              ) : (
                <PlusIconBold
                  width="25"
                  className={cx("icon_plus_rotate_revert")}
                />
              )}
            </div>
          </div>

          <p
            className={cx(
              "accordion-content",
              "text-[18px] ",
              `${activeIndex === index ? "open" : ""}`
            )}
          >
            {item?.content.split("<br>").map((line, i) => (
              <Fragment key={i}>
                <br />
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
