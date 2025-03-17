import { useEffect } from "react";

const SlowScroll = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const smoothScroll = () => {
      window.scrollTo({
        top: lastScrollY + (window.scrollY - lastScrollY) * 0.01, // Điều chỉnh tốc độ tại đây
        behavior: "smooth",
      });
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(smoothScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};

export default SlowScroll;
