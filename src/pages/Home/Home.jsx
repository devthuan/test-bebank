import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useEffect, useRef, useState } from "react";
import { PlusIcon } from "../../components/Icons";
import DragToScroll from "../../components/DragToScroll/DragToScroll";
import LineRow from "../../components/LineRow/LineRow";
import Accordion from "../../components/Accordion/Accordion";
import HealthBlog from "../../components/HealthBlog/HealthBlog";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import Block from "../../components/Block/Block";
import ScrollSequence from "../../components/ScrollSequence/ScrollSequence";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import ScrollSequenceGirl from "../../components/ScrollSequenceGirl/ScrollSequenceGirl";
import ScrollTriggerAnimation from "../../components/ScrollTriggerAnimation/ScrollTriggerAnimation";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);
const Home = () => {
  const imageRef = useRef(null); // Ref để theo dõi phần tử ảnh
  const [isFullScreen, setIsFullScreen] = useState(false); // State để kiểm soát hiệu ứng

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

  const listDataBlog = [
    {
      images:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/66ab8f489ef6bf459f18ffb2_pli-blog-schleudertrauma%20(1).jpg",
      title: "Whiplash",
      desciption: "How to treat whiplash – Causes, Symptoms, and Treatments",
      date: "31/7/24",
      time: "5min",
    },
    {
      images:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/6696e91f419480c07c9f0811_praxis-leandra-isler-nuetzt-atlaslogie-wirklich%20(1).jpg",
      title: "A therapeutic method under the microscope",
      desciption: "Atlas logic: What is really behind it?",
      date: "16/7/24",
      time: "7min",
    },
    {
      images:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bd55dccd55ec754f4d5a69_LeandraIsler_FODMAP_Ernaehrung.jpg",
      title: "FOD MAP",
      desciption: "What this abbreviation has to do with your intestines",
      date: "17/5/24",
      time: "5min",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        console.log(rect);
        // Kiểm tra nếu ảnh nằm trong viewport
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setIsFullScreen(true); // Kích hoạt hiệu ứng full màn hình
        } else {
          setIsFullScreen(false); // Tắt hiệu ứng
        }
        console.log(isFullScreen);
      }
    };

    window.addEventListener("scroll", handleScroll); // Lắng nghe sự kiện scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp khi component unmount
    };
  }, []);

  return (
    <div className="h-auto w-full mx-auto">
      <img
        src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
        alt="background header img"
        className={cx(
          "letter-animation",
          "absolute top-0 left-0 w-full h-[800px] md:h-[1600px] lg:h-[1800px] z-[-1]"
        )}
      />

      <div className="px-[30px] w-full text-center mt-[100px] md:mt-[120px] lg:mt-[30px]">
        <ScrollReveal>
          <h1
            className={cx(
              "text-[60px] md:text-[80px] lg:text-[156px] tracking-[-2px] md:tracking-[-3px]"
            )}
          >
            Practice for
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="text-[60px] w-full md:text-[80px] lg:text-[156px] tracking-[-2px] md:tracking-[-3px] flex items-center justify-between ">
            <h1 className={cx("fade-in-text")}>Atlasology</h1>
            <h1 className={cx("fade-in-text")}>and</h1>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <h1
            className={cx(
              "fade-in-text",
              "text-[60px] md:text-[80px] lg:text-[156px] tracking-[-2px] md:tracking-[-3px] text-center lg:text-right lg:mr-[110px]"
            )}
          >
            Naturopathy
          </h1>
        </ScrollReveal>

        <div className="mt-[-300px] md:mt-[-450px] lg:mt-[-600px] h-full mb-[1000px]">
          <ScrollReveal delay={800}>
            <ScrollSequence />
          </ScrollReveal>
        </div>
      </div>

      <div className="mt-[430px] md:pt-[430px] lg:mt-[330px] h-auto">
        <LineRow padding="py-[60px] " />
        <ScrollReveal>
          <p
            className={cx(
              " p-[20px] md:p-[40px] lg:p-[60px] text-[24px] md:text-[36px] lg:text-[52px] "
            )}
          >
            Welcome to the Practice Leandra Isler – your specialist in
            atlasology and naturopathy in Zurich Volketswil. I offer you
            holistic health solutions through Atlaslogy and naturopathy. With
            individual therapeutic approaches, I support you on your journey to
            greater well-being.
          </p>
        </ScrollReveal>

        <LineRow padding="py-[60px]" />
      </div>

      <div
        ref={imageRef}
        className={cx(
          "image-container",
          "fullscreen",
          ` ${isFullScreen ? "fullscreen" : ""}`,
          "mt-5"
        )}
      >
        <ScrollSequenceGirl />
      </div>

      {/* This is what */}
      <div className=" mx-[40px] lg:mx-[40px] mt-[60px] md:mt-[90px] lg:mt-[120px] pb-[60px] md:pb-[90px] lg:pb-[120px] h-auto ">
        <div className="px-[20px] w-full text-center mt-[20px] md:mt-[25px] lg:mt-[30px]">
          <ScrollReveal>
            <h1 className="text-start md:text-center text-[40px] md:text-[80px] lg:text-[156px]">
              This is what
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="w-full text-[40px] md:text-[80px] lg:text-[156px] flex  justify-between   ">
              <span className="">distinguishes</span>
              <span className="">my</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-end text-[40px] md:text-[80px] lg:text-[156px]  lg:text-right lg:mr-[110px]">
              treatments
            </h1>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-auto gap-[20px] mt-[40px] md:mt-[70px] lg:mt-[110px] h-auto lg:h-[430px]">
          {contentBox.map((item, index) => {
            return (
              <Block key={index} title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>

      <LineRow />
      {/* services */}
      <div className="w-full h-full">
        <TitleComponent title="My Services" />
        <div className="mt-[30px] md:mt-[45px] lg:mt-[60px] px-[20px] md:px-[40px] lg:px-[60px] w-auto h-auto">
          {<DragToScroll />}
        </div>
      </div>

      <LineRow padding="  md:px-[40px] lg:px-[60px] pt-[50px] md:pt-[75px] lg:pt-[100px]" />
      <div className="w-full px-[40px] text-center mt-[30px] md:mt-[40px] lg:mt-[50px]">
        <ScrollReveal>
          <h1 className="text-[40px] md:text-[80px] lg:text-[156px]">
            Searching
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="w-full text-[40px] md:text-[80px] lg:text-[156px] flex justify-between md:gap-[100px] lg:gap-[200px]">
            <span className="text-start">for</span>
            <span className="text-end">sustainable</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="text-[40px] md:text-[80px] lg:text-[156px] text-end lg:text-right lg:mr-[110px]">
            health
          </h1>
        </ScrollReveal>
      </div>

      <div className="w-full  px-[40px]  mt-[30px] md:mt-[45px] lg:mt-[60px]">
        <Accordion items={items} />
      </div>

      <LineRow padding=" md:px-[40px] lg:px-[60px] py-[120px] md:py-[75px] lg:py-[100px]" />
      <div className="px-[40px] h-full w-full">
        <HealthBlog dataBlog={listDataBlog} />
      </div>
    </div>
  );
};

export default Home;
