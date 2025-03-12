import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Header from "../../layouts/components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { PlusIcon } from "../../components/Icons";
import DragToScroll from "../../components/DragToScroll/DragToScroll";
import LineRow from "../../components/LineRow/LineRow";
import Accordion from "../../components/Accordion/Accordion";
import HealthBlog from "../../components/HealthBlog/HealthBlog";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";

const cx = classNames.bind(styles);
const Home = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const targetRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const contentBox = [
    {
      icon: <PlusIcon />,
      title: "Fuctional Testing",
      content: `I offer advanced tests for the intestines, hormones, and heavy
            metals to reveal hidden burdens on your body. Based on your results,
            I will create an individual lifestyle and supplement protocol to
            bring your body back into balance.`,
    },
    {
      icon: <PlusIcon />,
      title: "Personal Support",
      content: `I know how exhausting it can be to do it all by yourself, especially when you don't feel like yourself! I'll be here to support you and maintain your vision whenever you feel overwhelmed or frustrated.`,
    },
    {
      icon: <PlusIcon />,
      title: "A multidimensional approach",
      content: `I've realized that remedying chronic imbalances requires much more than just diet and exercise. In my work, scientific principles flow together with old traditional techniques and mental strengthening — something that is not possible with medication alone.`,
    },
  ];

  const items = [
    {
      title: "You have taken superficial measures for deep-rooted imbalances",
      content:
        "The truth is that counting calories, working out abs, and taking supplements at random won't solve poor gut health, sluggish liver, or poor hormone metabolism. To get long-lasting, real results, you need to dig deeper. Functional laboratory tests give you direct, unembellished insight into the state of your intestines, liver, hormones, minerals, thyroid, and adrenal glands.",
    },
    {
      title: "You have followed general advice and hoped for the best.",
      content:
        "What works for them doesn't have to work for you. Therefore, other people's exercise programs, diet plans, and supplement protocols can do much more harm than good. Without guidance and a personalized path, you'll keep going in circles, burning money and wasting time.",
    },
    {
      title: "You have chased symptoms instead of focusing on the cause.",
      content:
        "Symptoms aren't the problem, they're the result of the problem. Menstrual problems? infertility? Chronic fatigue? Bloating and constipation? hair loss? acne? Patch solutions such as contraceptives, laxatives, energy drinks or low-quality dietary supplements will never solve the real problem and you will find yourself in a constant cycle of symptom hunting. Suppressing symptoms may dampen the volume now, but your health will scream later.",
    },
    {
      title: "Your body doesn't feel safe.",
      content:
        "A body and mind that are constantly under stress will retain fat, inflammation, and toxins as protection. If you're chronically dieting, not managing your environment, or struggling with gut germs and mineral deficiencies, your body won't cooperate. To achieve long-lasting, sustainable health, we need to teach your body to feel safe again.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;

      // Xoay ảnh khi cuộn
      setRotation(scrollValue * 0.5); // Tăng hoặc giảm tốc độ xoay

      // Thu nhỏ ảnh khi cuộn xuống, nhưng không nhỏ hơn 0.3 lần kích thước gốc
      setScale(Math.max(1 - scrollValue * 0.001, 0.3));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5; // Kích hoạt khi cuộn 50% màn hình

      if (scrollY > triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Hiển thị ảnh full màn hình
        } else {
          setIsVisible(false); // Ẩn ảnh khi cuộn qua
        }
      },
      { threshold: 0.5 } // Kích hoạt khi 50% phần tử hiển thị
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="h-auto w-screen">
      <img
        src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
        alt="images"
        className="absolute top-0 left-0 w-full h-[1800px] z-[-1]"
      />
      <header
        className={`relative z-10 mb-[100px] 
        
        `}
      >
        <Header
          className={`${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        />
      </header>
      <div className="w-full text-center mt-[30px]">
        <h1 className="text-[156px]">Practice for</h1>
        <h1 className="text-[156px] flex justify-center gap-[200px]">
          <span className="text-[156px]">Atlasology</span>
          <span className="text-[156px]">and</span>
        </h1>
        <h1 className="text-[156px] text-right mr-[110px]">Naturopathy</h1>
      </div>
      <div className="mt-[50px] h-auto">
        <img
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2.png"
          alt="images"
          loading="lazy"
          srcSet="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2-p-500.png 500w, https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2-p-800.png 800w, https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2-p-1080.png 1080w, https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2-p-1600.png 1600w, https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2-p-2000.png 2000w, https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2.png 2500w"
          className="absolute top-[200px] w-full h-[1100px]"
          // style={{
          //   transform: `rotateY(${rotation}deg)`,
          //   transition: "transform 0.1s linear",
          //   transformOrigin: "center", // Quay quanh trục giữa
          // }}
        />

        <p
          ref={targetRef}
          className=" mt-[650px] p-[60px] text-[52px] border-y-[1px] border-black"
        >
          Welcome to the Practice Leandra Isler – your specialist in atlasology
          and naturopathy in Zurich Volketswil. I offer you holistic health
          solutions through Atlaslogy and naturopathy. With individual
          therapeutic approaches, I support you on your journey to greater
          well-being.
        </p>
      </div>
      <div className="mt-5" ref={imageRef}>
        <img
          src="https://clients.eseassets.ch/pli/assets/focus-sequence/v1/webp/pli-home-focus-sequence-00001.webp"
          className={` w-screen h-screen object-cover transition-opacity duration-1000 `}
          alt="Fullscreen Image"
        />
      </div>

      {/* This is what */}
      <div className="mx-[60px] mt-[120px] pb-[120px]  h-auto  text-center ">
        <div className="w-full text-center mt-[30px]">
          <h1 className="text-[156px]">This is what</h1>
          <h1 className="text-[156px] flex justify-center gap-[90px]">
            <span className="text-[156px]">distinguishes</span>
            <span className="text-[156px]">my</span>
          </h1>
          <h1 className="text-[156px] text-right mr-[110px]">treatments</h1>
        </div>

        <div className="grid grid-cols-3 w-full px-[60px] gap-[20px] mt-[110px] h-[430px] ">
          {contentBox.map((item, index) => {
            return (
              <div
                key={index}
                className={cx(
                  "p-[60px] w-full h-full bg-[#a58f6417] flex flex-col gap-y-[30px] ",
                  "hover-box"
                )}
              >
                {item.icon}
                <h1 className="text-[24px] text-left ">{item.title}</h1>
                <p className="18px leading-relaxed text-left ">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <LineRow />

      {/* services */}
      <div className="">
        <TitleComponent title="My Services" />
        <div className="mt-[60px] pl-[60px] w-auto h-auto">
          {<DragToScroll />}
        </div>
      </div>

      <LineRow />

      <div className="w-full text-center mt-[30px]">
        <h1 className="text-[156px]">Searching</h1>
        <h1 className="text-[156px] flex justify-center gap-[200px]">
          <span className="text-[156px]">for</span>
          <span className="text-[156px]">sustainable</span>
        </h1>
        <h1 className="text-[156px] text-right mr-[110px]">health</h1>
      </div>

      <div className="w-screen px-[60px] mt-[60px]">
        <Accordion items={items} />
      </div>

      <LineRow padding="px-[60px] py-[100px]" />

      <div className="">
        <HealthBlog />
      </div>

      <LineRow padding="px-[60px] py-[100px]" />

      <div className="w-full px-[60px] mx-auto ">
        <Support />
      </div>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
