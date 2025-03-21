import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./LineRow.module.scss";

const cx = classNames.bind(styles);

const LineRow = ({ padding = "px-[30px] md:px-[80px] lg:px-[100px]" }) => {
  const lineRef = useRef(null);
  // console.log("lineRef: ", lineRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineRef.current.classList.add(cx("visible"));
        }
      },
      { threshold: 0.1 }
    );

    // console.log("observer: ", lineRef);

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className={cx("line-row", "w-full", padding)}>
      <span ref={lineRef} className={cx("line", "w-full")}></span>
    </div>
  );
};

export default LineRow;
