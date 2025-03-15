import { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";

const ContactLayout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log(targetRef);
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
    <div className="h-screen w-screen">
      <header className="w-full h-auto">
        <Header
          className={`${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          } transition-all duration-300`}
        />
      </header>
      <div className="h-auto w-full ">{children}</div>
      {/* <div className="h-auto w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        {children}
      </div> */}
    </div>
  );
};

export default ContactLayout;
