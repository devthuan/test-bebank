import { useState, useRef } from "react";
import { ArrowRightIcon } from "../Icons";
import classNames from "classnames/bind";
import styles from "./DragToScroll.module.scss";
import { NavLink } from "react-router";

const cx = classNames.bind(styles);

const DragToScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMoveB = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 25; // Căn giữa block với con trỏ
    const y = e.clientY - rect.top - 400; // Căn giữa block với con trỏ
    setPosition({ x, y });
  };

  const dataItemProductService = [
    {
      title: "Atlasology Plus",
      image:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bfb83c62ed5413a33e2e37_pli-angebot-thumbs8.jpg",
    },
    {
      title: "Naturopathy",
      image:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fb75ddb3429732a76a3_pli-angebot-thumbs3.jpg",
    },
    {
      title: "Massage",
      image:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bbe3132250795f49e83b45_pli-angebot-thumbs5.jpg",
    },
    {
      title: "Foot Reflexology",
      image:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65c92fbcfcf52462598fdec5_pli-angebot-thumbs9.jpg",
    },
    {
      title: "Dietary Advice",
      image:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bb5fb0ba999399de48bfa6_pli-angebot-thumbs2.jpg",
    },
  ];

  // Bắt đầu kéo
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setMouseDown(true);
  };

  // Kết thúc kéo
  const handleMouseUp = () => {
    setIsDragging(false);
    setMouseDown(false);

  };

  // Khi di chuyển chuột
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // Tốc độ kéo
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={cx(
        "h-[683px] w-full overflow-hidden relative flex items-center "
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Kết thúc kéo nếu chuột rời khỏi container
      onMouseMove={handleMouseMove}
    >
      <div
        className={cx(  
          isMouseDown ? "text-red" : "",
          " cursor-pointer w-[70px] h-[70px] bg-black text-white flex justify-center items-center rounded-full absolute z-10 transition-transform ease-out duration-100"
        )}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        Drag
      </div>
      <div
        ref={containerRef}
        className={cx(
          "flex h-auto md:h-full lg:h-full w-full gap-[20px] overflow-x-hidden scroll-snap-type-x-mandatory scrollbar-hide cursor-grab"
        )}
        style={{ userSelect: "none" }} // Ngăn chọn văn bản khi kéo
        onMouseMove={handleMouseMoveB}
        onMouseUp={handleMouseUp} // Kết thúc kéo nếu chuột rời khỏi container
      >
        {dataItemProductService.map((item, index) => (
          <div
            key={index}
            className={cx(
              "item-hover",
              "ml-1 sm:ml-2 lg:ml-[5px] mt-2 sm:mt-3 lg:mt-[10px]",
              "relative flex-shrink-0",
              "h-[434px] sm:h-[500px] lg:h-[643px]",
              "w-[324px] sm:w-[400px] lg:w-[480px]",
              "bg-[#edddc3] rounded-lg"
            )}
          >
            <img
              className="absolute z-0 rounded-lg w-full h-full object-cover"
              src={item.image}
              alt=""
            />
            <div className="p-4 sm:p-8 lg:p-[40px] absolute bottom-4 sm:bottom-6 lg:bottom-[20px]">
              <h1 className="text-2xl sm:text-3xl lg:text-[42px]">
                {item.title}
              </h1>
              <NavLink to={"/services"}>
                <button
                  className={cx(
                    "button-with-icon",
                    "mt-4 sm:mt-6 lg:mt-[20px]"
                  )}
                >
                  <span className={cx("icon")}>
                    <ArrowRightIcon />
                  </span>
                  <span
                    className={cx(
                      "text",
                      "text-[16px] sm:text-[12px] md:text-[14px]"
                    )}
                  >
                    Learn more
                  </span>{" "}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragToScroll;
