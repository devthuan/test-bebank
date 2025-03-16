import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ScrollReveal.module.scss";

const cx = classNames.bind(styles);

const ScrollReveal = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      // setIsVisible(false);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cx(
        `scroll-reveal ${animation} ${isVisible ? "visible" : ""}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
