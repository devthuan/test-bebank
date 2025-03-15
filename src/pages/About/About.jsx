import classNames from "classnames/bind";
import styles from "./About.module.scss";
import LineRow from "../../components/LineRow/LineRow";
import Accordion from "../../components/Accordion/Accordion";
import Block from "../../components/Block/Block";
import DragToScroll from "../../components/DragToScroll/DragToScroll";
import TitleComponent from "../../components/TitleComponent/TitleComponent";

const cx = classNames.bind(styles);
const About = () => {
  const items = [
    {
      title: "Certified Naturopath TEN (in Training)",
      content: `NhK - Institute for Integrative Naturopathy (2021-2025) <br>
          Nutrition (2022) <br>
         Foot Reflexology (2023) <br>
         Classic massage (2024) <br>
         TEN - Humoral Medicine (2024) <br>
         Phytotherapy (2025) <br> 
         Completion of studies: March 2025 Federal diploma: March 2027`,
    },
    {
      title: "Atlasology Plus",
      content: "D. Zivkovic, Scharnstein AT <br> 2019-2020",
    },
  ];

  const listDataBlock = [
    {
      title: "are persistent",
      content:
        "and are satisfied with nothing less than the perfect wellbeing in your body, health, and standards.",
    },
    {
      title: "have the understanding",
      content:
        "that this kind of work requires patience, grace, and true engagement and “commitment.”",
    },
    {
      title: "dont want Baind-Aid solutions",
      content:
        "and would like to know how you can create sustainable, long-term health for yourself.",
    },
  ];

  const contentData = [
    {
      title: "There is not the one root of all problems",
      content:
        "Surprise: Your health problems can't be traced back to a single cause. Rather, there are a variety of factors that throw your body out of balance. Our job is to focus on the things we can influence and trust the body to do the rest.",
    },
    {
      title: "I work like a detective",
      content:
        "Unlike most healthcare professionals, I'm not just treating symptoms or playing Russian roulette with your health and medications. Instead, I use functional laboratory diagnostics to get a holistic picture of your intestinal health, hormones, minerals and detoxification processes. This allows us to identify covert stressors that hinder your body's natural self-healing.",
    },
    {
      title: "I'm betting on the holistic healing of your body and soul",
      content:
        "I've realized that remedying chronic imbalances requires much more than just diet and exercise. My program combines functional laboratory tests and scientific principles with methods for energetic healing and mental strengthening — something that is not possible with medication alone.",
    },
  ];

  return (
    <div className="h-auto w-full">
      <div className="h-[1500px]">
        <img
          alt="images"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/66f8269123829030d5ef3da0_pli-uber-mich-hero-v3.jpg"
          className="absolute top-0 left-0 w-full h-[1200px] object-cover z-[-1]"
        />
        <h1
          className={cx(
            "health__blog-title",
            "text-center lg:pt-[85px] pt-[35px]"
          )}
        >
          <p>Hi, I`m Leandra Isler, atlasology</p>
          <p>therapist and naturopath in</p>
          <p> training</p>
        </h1>
      </div>
      <LineRow padding="px-[30px]  py-[130px]" />
      <div className="px-[30px] md:px-8 lg:px-16">
        <h1 className="text-[24px] md:text-[36px] lg:text-[66px] tracking-[-1px] md:tracking-[-3px] m-[-10px]">
          Back to the roots — this guiding principle accompanies me through my
          world like a common thread.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[60px] mt-[20px] md:mt-[58px]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            At the age of seven, I had polyarthritis. Through various therapies
            in the field of conventional and complementary medicine, I was able
            to leave the disease behind me after 7 years. A short time later,
            the desire to research the origin ever greater so that I could also
            heal the effects that were still being felt. I set off back to my
            roots and learned so much
          </p>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            valuable during this time, which brought the value of my medical
            history to a whole new level. I would like to share the experiences
            that have shaped, shaped and advanced me, together with the
            knowledge from my training courses, and hope to be able to do at
            least as much good as I was able to experience.
          </p>
        </div>
      </div>
      <LineRow padding="px-[30px] py-[80px]" />
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[60px] mt-[20px] md:mt-[58px]">
          <div className="ml-5 lg:ml-0 col-span-1 text-[20px] md:text-[24px] lg:text-[30px]">
            My Education
          </div>
          <div className="col-span-2">
            <Accordion items={items} />
          </div>
        </div>
      </div>
      <div className="lg:w-screen lg:ml-[-65px] h-[400px] md:h-[834px] mt-[50px] md:mt-[100px] relative">
        <iframe
          className="w-full h-full"
          src="https://player.vimeo.com/video/916423611?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
        ></iframe>
        <div
          className={cx(
            "wrap__icon-play",
            "flex justify-center items-center absolute top-[180px] md:top-[380px] left-[160px] md:left-[660px]"
          )}
        >
          <img
            src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/65b50adff0c82fe1a0e0b44e_ese-ui-play-black.svg"
            loading="lazy"
            width="16"
            alt=""
            className={cx("cursor-video__play-img")}
          />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16">
        <div className="w-full text-center mt-[30px]">
          <h1 className="text-[56px]  md:text-[56px] lg:text-[156px] text-start pl-4 md:pl-[200px]">
            Working
          </h1>
          <h1 className="text-[56px]  md:text-[56px] lg:text-[156px] flex justify-between gap-4 md:gap-[200px]">
            <span className="text-[56px]  md:text-[56px] lg:text-[156px]">
              with me
            </span>
            <span className="text-[56px]  md:text-[56px] lg:text-[156px]">
              makes
            </span>
          </h1>
          <h1 className="text-[56px]  md:text-[56px] lg:text-[156px] text-right  md:mr-[70px]">
            sense when you
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-[20px] md:mt-[60px]">
          {listDataBlock.map((item, index) => (
            <Block key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>

      <LineRow padding="px-[30px] py-[80px]" />

      <div className="px-4 md:px-8 lg:px-16">
        <div className="w-full text-center">
          <h1 className=" text-[51px] md:text-[56px] lg:text-[156px] text-center">
            The light at the
          </h1>
          <h1 className=" text-[51px] md:text-[56px] lg:text-[156px] flex justify-between ">
            <span className=" md:text-[56px] lg:text-[156px]">End of the</span>
            <span className=" md:text-[56px] lg:text-[156px]">Tunnel</span>
          </h1>
          <h1 className=" text-[51px] md:text-[56px] lg:text-[156px] text-right pr-4 md:mr-[10px]">
            is not a myth
          </h1>
        </div>
        <div className="mt-[60px] md:mt-[120px]">
          {contentData?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-6 mt-[30px] md:mt-[68px] gap-x-4 md:gap-x-28 gap-y-8"
            >
              <div className="col-span-1 md:col-span-2 text-[30px] md:text-[24px] lg:text-[30px]">
                {item.title}
              </div>
              <div className="col-span-1 md:col-span-4 text-[14px] md:text-[16px] lg:text-[18px]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <LineRow padding="px-[30px] py-[80px]" />

      <div className="lg:w-screen lg:ml-[-60px] mt-[-30px]">
        <TitleComponent title="My Services" />
        <DragToScroll />
      </div>
    </div>
  );
};

export default About;
