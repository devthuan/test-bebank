import { useEffect } from "react";
import { useParams } from "react-router";

const ScrollToTop = () => {
  const params = useParams(); // Lấy tham số từ URL

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]); // Cuộn lên đầu khi params thay đổi

  return null;
};

export default ScrollToTop;
