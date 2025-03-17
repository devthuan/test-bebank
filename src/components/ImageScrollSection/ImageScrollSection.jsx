import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ScrollSequenceGirl from "../ScrollSequenceGirl/ScrollSequenceGirl";

const ImageScrollSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Animation cho text
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    [0, 1, 0]
  );
  const text3Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Animation position cho text
  const text1Y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);
  const text3Y = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);
  const text4Y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <div ref={sectionRef} style={{ height: "200vh" }}>
      {/* Fixed image section */}
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Hình ảnh full màn hình */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-100px",
            left: 0,
            zIndex: -1, // Đặt background phía sau
          }}
        >
          <ScrollSequenceGirl />
        </div>

        {/* Text animations hiển thị giữa hình ảnh */}
        <motion.div
          style={{
            opacity: text1Opacity,
            y: text1Y,
            position: "absolute",
            top: "40%",
            left: "10%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "10vw", // Responsive font size
            textAlign: "center",
          }}
        >
          Your
        </motion.div>
        <motion.div
          style={{
            opacity: text1Opacity,
            y: text1Y,
            position: "absolute",
            top: "40%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "10vw", // Responsive font size
            textAlign: "center",
          }}
        >
          Health
        </motion.div>

        <motion.div
          className="text-start w-auto"
          style={{
            opacity: text2Opacity,
            y: text2Y,
            position: "absolute",
            top: "20%",
            left: "15%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "8vw", // Responsive font size
            textAlign: "center",
          }}
        >
          is
        </motion.div>
        <motion.div
          className="text-start w-auto"
          style={{
            opacity: text2Opacity,
            y: text2Y,
            position: "absolute",
            top: "40%",
            left: "5%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "8vw", // Responsive font size
            textAlign: "center",
          }}
        >
          holistically
        </motion.div>
        <motion.div
          className="text-end"
          style={{
            opacity: text2Opacity,
            y: text2Y,
            position: "absolute",
            top: "40%",
            left: "85%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "8vw", // Responsive font size
            textAlign: "center",
          }}
        >
          in
        </motion.div>
        <motion.div
          className="text-end"
          style={{
            opacity: text2Opacity,
            y: text2Y,
            position: "absolute",
            top: "55%",
            left: "73%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "8vw", // Responsive font size
            textAlign: "center",
          }}
        >
          focus
        </motion.div>

        <motion.div
          className="hidden lg:flex w-[500px] h-[800px] border-[1px] border-[#edddc3]"
          style={{
            opacity: text3Opacity,
            y: text3Y,
            position: "absolute",
            top: "13%",
            left: "34%",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "10vw", // Responsive font size
            textAlign: "center",
          }}
        ></motion.div>
        <motion.div
          className="hidden lg:flex w-[473px] h-[800px] border-[1px] border-[#edddc3] bg-[#edddc3]"
          style={{
            opacity: text3Opacity,
            y: text4Y,
            position: "absolute",
            top: "13%",
            left: "0",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "10vw", // Responsive font size
            textAlign: "center",
          }}
        ></motion.div>
        <motion.div
          className="hidden lg:flex w-[416px] h-[800px] border-[1px] border-[#edddc3] bg-[#edddc3]"
          style={{
            opacity: text3Opacity,
            y: text4Y,
            position: "absolute",
            top: "13%",
            right: "0",
            transform: "translate(-50%, -50%)",
            color: "#edddc3",
            fontSize: "10vw", // Responsive font size
            textAlign: "center",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default ImageScrollSection;
