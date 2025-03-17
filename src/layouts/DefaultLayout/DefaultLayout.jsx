import { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useDelayRender from "../../hooks/useDelayRender";

const DefaultLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const targetRef = useRef(null);
  const isReady = useDelayRender(1200);

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
    <>
      {isReady && (
        <div className="h-full w-screen ">
          <header className="w-full h-full mb-[90px]">
            <Header
              className={`${
                isHeaderVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              } transition-all duration-300`}
            />
          </header>
          {/* <div className="h-auto w-full px-4 md:px-8 lg:px-16">{children}</div> */}
          <div className="h-auto w-full max-w-[2000px] mx-auto ">
            {children}
          </div>
          <footer className="">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default DefaultLayout;
