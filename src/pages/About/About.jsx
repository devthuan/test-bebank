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
    <div className="h-auto w-screen ">
      <div className="h-[1500px]">
        <img
          alt="images"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/66f8269123829030d5ef3da0_pli-uber-mich-hero-v3.jpg"
          className="absolute top-0 left-0 w-full h-auto  z-[-1]"
        />
        <h1 className={cx("health__blog-title", "text-center  pt-[85px] ")}>
          <p>Hi, I`m Leandra Isler, atlasology</p>
          <p>therapist and naturopath in</p>
          <p> training</p>
        </h1>
      </div>
      <LineRow padding="px-[60px] py-[130px]" />
      <div className="px-[60px]">
        <h1 className="text-[66px] tracking-[-3px] m-[-10px]">
          Back to the roots — this guiding principle accompanies me through my
          world like a common thread.
        </h1>
        <div className="grid grid-cols-2 gap-[60px] mt-[58px]">
          <p className="text-[18px]">
            At the age of seven, I had polyarthritis. Through various therapies
            in the field of conventional and complementary medicine, I was able
            to leave the disease behind me after 7 years. A short time later,
            the desire to research the origin ever greater so that I could also
            heal the effects that were still being felt. I set off back to my
            roots and learned so much
          </p>
          <p className="text-[18px]">
            valuable during this time, which brought the value of my medical
            history to a whole new level. I would like to share the experiences
            that have shaped, shaped and advanced me, together with the
            knowledge from my training courses, and hope to be able to do at
            least as much good as I was able to experience.
          </p>
        </div>
      </div>
      <LineRow padding="px-[60px] py-[80px]" />
      <div className="px-[60px]">
        <div className="grid grid-cols-3 gap-[60px] mt-[58px]">
          <div className="col-span-1 text-[30px]">My Education</div>
          <div className="col-span-2">
            <Accordion items={items} />
          </div>
        </div>
      </div>
      <div className="w-screen h-[834px] mt-[100px] relative">
        <iframe
          className="w-full h-full"
          src="https://player.vimeo.com/video/916423611?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
        ></iframe>
        <div
          className={cx(
            "wrap__icon-play",
            "flex justify-center items-center absolute top-2/4 left-2/4"
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
      <div className="">
        <div className="w-full text-center mt-[30px] px-[30px]">
          <h1 className="text-[156px] text-start pl-[200px]">Working</h1>
          <h1 className="text-[156px] flex justify-center gap-[200px]">
            <span className="text-[156px]">with me</span>
            <span className="text-[156px]">makes</span>
          </h1>
          <h1 className="text-[156px] text-right mr-[70px]">sense when you</h1>
        </div>
        <div className="w-full px-[60px] grid grid-cols-3 gap-4 mt-[60px]">
          {listDataBlock.map((item, index) => (
            <Block key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>

      <LineRow padding="px-[60px] py-[80px]" />

      <div className="w-full px-[60px]">
        <div className="w-full text-center  px-[30px]">
          <h1 className="text-[156px] text-center ">The light at the</h1>
          <h1 className="text-[156px] flex justify-center gap-[60px]">
            <span className="text-[156px]">End of the</span>
            <span className="text-[156px]">Tunnel</span>
          </h1>
          <h1 className="text-[156px] text-right mr-[10px]">is not a myth</h1>
        </div>
        <div className="mt-[120px]">
          {contentData?.map((item, index) => (
            <div key={index} className="grid grid-cols-6 mt-[68px] gap-x-28 ">
              <div className="col-span-2 text-[30px]">{item.title}</div>
              <div className="col-span-4 text-[18px]">{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      <LineRow padding="px-[60px] py-[80px]" />

      <div className="mt-[-30px]">
        <TitleComponent title="My Services" />;
          <DragToScroll />
      </div>
    </div>
  );
};

export default About;
