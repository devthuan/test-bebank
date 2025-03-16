import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollSequenceGirl from "../ScrollSequenceGirl/ScrollSequenceGirl";

const ScrollStepAnimation = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [step, setStep] = useState(0);
  const [scrollDelta, setScrollDelta] = useState(0); // Đếm lượng cuộn
  const totalSteps = 4; // Số lượng đoạn text
  const scrollThreshold = 800; // Số pixel cần cuộn để hiển thị text tiếp theo

  useEffect(() => {
    const target = document.getElementById("target-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) {
          setIsFixed(true);
          setStep(1); // Hiển thị text đầu tiên
        }
      },
      { threshold: 0.5 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [step]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isFixed && step < totalSteps + 1) {
        event.preventDefault(); // Chặn cuộn
        setScrollDelta((prev) => prev + Math.abs(event.deltaY)); // Cộng dồn lượng cuộn

        if (scrollDelta >= scrollThreshold) {
          setScrollDelta(0); // Reset lượng cuộn
          setStep((prev) => prev + 1); // Hiển thị text tiếp theo
        }
      }
      if (step === totalSteps) {
        setTimeout(() => setIsFixed(false), 500); // Cho phép cuộn sau khi hiển thị hết text
      }
    };

    if (isFixed) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isFixed, step, scrollDelta]);

  return (
    <div style={{ height: "200vh", padding: "50px" }}>

      <div
        id="target-section"
        style={{
          position: isFixed ? "fixed" : "relative",
          top: isFixed ? "50%" : "auto",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          background: "#3498db",
          color: "#fff",
          textAlign: "center",
          padding: "50px",
          fontSize: "24px",
          borderRadius: "10px",
        }}
      >
        {step > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ádfasdf
          </motion.div>
        )}

        {step > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🚀 Cuộn nhiều hơn để hiển thị đoạn text tiếp theo.
          </motion.div>
        )}

        {step > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Khi hiện hết text, bạn có thể tiếp tục cuộn.
          </motion.div>
        )}
        {step > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Khi hiện hết text, bạn có thể tiếp tục cuộn.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScrollStepAnimation;
