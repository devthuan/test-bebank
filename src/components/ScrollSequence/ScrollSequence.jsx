import classNames from "classnames/bind";
import styles from "./ScrollSequence.module.scss";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const ScrollSequence = () => {
  const [scrollY, setScrollY] = useState(0);
  const [counter, setCounter] = useState(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Lấy giá trị scrollY hiện tại
      setScrollY(currentScrollY); // Cập nhật state scrollY

      const scrollDifference = currentScrollY - prevScrollY.current; // Tính sự chênh lệch scroll

      if (scrollDifference >= 0) {
        // Scroll xuống và đạt 50px
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          return newCounter > 52 ? 52 : newCounter; // Giới hạn counter tối đa là 52
        });
        prevScrollY.current = currentScrollY; // Cập nhật giá trị scrollY trước đó
      } else if (scrollDifference <= 0 || scrollDifference < 0) {
        // Scroll lên và đạt 50px
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;
          return newCounter < 0 ? 0 : newCounter; // Giới hạn counter tối thiểu là 0
        });
        prevScrollY.current = currentScrollY; // Cập nhật giá trị scrollY trước đó
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx()}>
      <img
        src={`https://clients.eseassets.ch/pli/assets/hero-sequence/v2/png/pli-home-hero-sequence-${String(
          counter
        ).padStart(5, "0")}.png`}
        alt="images tree"
        loading="lazy"
        className="absolute object-cover top-[170px] md:top-[250px]  lg:top-[200px] md:w-full lg:w-full left-0 w-auto h-[500px] md:h-[1000px] lg:h-[1100px] "
      />
    </div>
  );
};

export default ScrollSequence;
