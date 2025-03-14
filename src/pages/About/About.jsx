import classNames from "classnames/bind";
import styles from "./About.module.scss";
import LineRow from "../../components/LineRow/LineRow";
import Accordion from "../../components/Accordion/Accordion";

const cx = classNames.bind(styles);
const About = () => {
  
   const items = [
     {
       title: "Certified Naturopath TEN (in Training)",
       content: `
         NhK - Institute for Integrative Naturopathy (2021-2025)

Nutrition (2022)

Foot Reflexology (2023)

Classic massage (2024)

TEN - Humoral Medicine (2024)

Phytotherapy (2025)

Completion of studies: March 2025

Federal diploma: March 2027`,
     },
     {
       title: "Atlasology Plus",
       content:
         "D. Zivkovic, Scharnstein AT 2019-2020",
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
    </div>
  );
};

export default About;
