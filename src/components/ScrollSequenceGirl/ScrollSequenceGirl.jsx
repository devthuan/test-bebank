import classNames from "classnames/bind";
import styles from "./ScrollSequenceGirl.module.scss";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const ScrollSequenceGirl = () => {
  const [scrollY, setScrollY] = useState(0);
  const [counter, setCounter] = useState(1);
  const prevScrollY = useRef(0);

  const imgRef = useRef(null); // Thêm ref cho ảnh
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Cập nhật khi ảnh vào viewport
      },
      { threshold: 0.2 } // 20% ảnh xuất hiện mới tính
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return; // Chỉ tính khi ảnh vào viewport

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Lấy giá trị scrollY hiện tại
      setScrollY(currentScrollY); // Cập nhật state scrollY

      const scrollDifference = currentScrollY - prevScrollY.current; // Tính sự chênh lệch scroll

      if (scrollDifference > 0) {
        // Scroll xuống và đạt 50px
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          return newCounter > 139 ? 139 : newCounter; // Giới hạn counter tối đa là 52
        });
        prevScrollY.current = currentScrollY; // Cập nhật giá trị scrollY trước đó
      } else if (scrollDifference < 0) {
        // Scroll lên và đạt 50px
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;
          return newCounter < 0 ? 1 : newCounter; // Giới hạn counter tối thiểu là 0
        });
        prevScrollY.current = currentScrollY; // Cập nhật giá trị scrollY trước đó
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <div className={cx("w-full h-auto")}>
      <img
        ref={imgRef}
        src={`https://clients.eseassets.ch/pli/assets/focus-sequence/v1/webp/pli-home-focus-sequence-${String(
          counter
        ).padStart(5, "0")}.webp`}
        alt="images tree"
        loading="lazy"
        className="absolute object-cover top-[170px] md:top-[250px] h-full  lg:top-[200px] md:w-full lg:w-full left-0 w-auto "
      />
      {/* <img
        src={`https://clients.eseassets.ch/pli/assets/focus-sequence/v1/webp/pli-home-focus-sequence-${String(
          counter
        ).padStart(5, "0")}.webp`}
        alt="images tree"
        loading="lazy"
        className="absolute object-cover top-[170px] md:top-[250px]  lg:top-[200px] md:w-full lg:w-full left-0 w-auto h-[500px] md:h-[1000px] lg:h-[1250px] "
      /> */}
    </div>
  );
};

export default ScrollSequenceGirl;
