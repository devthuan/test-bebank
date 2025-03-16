// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";

// const PageTransition = () => {
//   const location = useLocation();
//   console.log(location);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     setIsTransitioning(true);
//     const timer = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 900);
//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return (
//     <div className="w-full h-full relative">
//       {isTransitioning && (
//         <motion.div
//           initial={{
//             width: "50vw",
//             height: "0",
//             borderRadius: "18px",
//             opacity: 1,
//             left: "50%",
//             bottom: "100px",
//             translateX: "-50%",
//           }}
//           animate={{
//             width: "100vw",
//             height: "100vh",
//             borderRadius: 0,
//             opacity: 1,
//           }}
//           exit={{
//             width: "100vw",
//             height: "0",
//             opacity: 0,
//           }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           className="fixed bottom-0 left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]
//             bg-[#edddc3] z-[9999] "
//         />
//       )}
//     </div>
//   );
// };

// export default PageTransition;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="">
      {/* Hiệu ứng xuất hiện khi chuyển trang */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
          initial={{
            width: "50vw",
            height: "0",
            borderRadius: "18px",
            opacity: 1,
            left: "50%",
            bottom: "100px",
            translateX: "-50%",
          }}
          animate={{
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            opacity: 1,
          }}
          exit={{
            width: "100vw",
            opacity: 0,
            translateY: "-200%",
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed bottom-0 left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]
            bg-[#edddc3] z-[9999] "
        />
        )}
      </AnimatePresence>

      {/* Nội dung trang */}
      {children}
    </div>
  );
};

export default PageTransition;
