import { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const targetPosition = targetRef.current.getBoundingClientRect().top;

      if (targetPosition < window.innerHeight / 2) {
        setIsHeaderVisible(false); // Khi cuộn đến phần tử, header ẩn
      } else {
        setIsHeaderVisible(true); // Khi cuộn lên, header hiện lại
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-screen ">
      <header className="w-full h-auto mb-[90px]">
        <Header
          className={`${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        />
      </header>
      <div className="h-auto w-full">{children}</div>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
