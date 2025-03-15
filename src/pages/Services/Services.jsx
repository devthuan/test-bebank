import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import LineRow from "../../components/LineRow/LineRow";
import Description from "../../components/Description/Description";
import Block from "../../components/Block/Block";
import { ArrowRightIcon } from "../../components/Icons";
import DragToScroll from "../../components/DragToScroll/DragToScroll";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import Footer from "../../layouts/components/Footer/Footer";

const cx = classNames.bind(styles);
const Services = () => {
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

  const dataDescriptions = [
    "Although atlasology is a novel concept, vertebral treatments per se are not an invention of modern times, as healers were already aware of the importance of the atlas in ancient times.",
    "The first cervical vertebra is called atlas — it supports the head. It is of particular importance for all vertebral bodies, as malpositions in this area can have far-reaching effects.",
    "Atlasology has an effect on the nervous system, the balance system, the body's statics and muscle tension. Atlas logic helps the body activate its self-healing powers in the best possible way.",
    "If the atlas (the uppermost cervical vertebra) is displaced, nerve impulse disorders can occur and the vertebral column and thus the entire musculoskeletal system can get out of statics. This can lead to a wide variety of complaints, but mainly to head, neck and back pain.",
    "Atlasology makes it possible to swing the atlas back to its central location. In addition, the body regains the best possible statics and any pelvic misalignment is eliminated. This in turn allows nerve impulses to flow freely from and to the body cells.",
    "In contrast to manipulative methods, there are no risks typical of the treatment due to decades of experience in atlasology, as the technical implementation is carried out without pulling, twisting or tilting the cervical spine.",
  ];

  const dataBlocks = [
    {
      title: "Time and costs",
      content:
        "You can expect around 60 minutes per appointment. A session costs 80 CHF.Attention: Until I graduate as a naturopath (May 2025), health insurance only covers foot reflexology services. You can find more information about this here.",
    },
    {
      title: "cancelling",
      content:
        "I would like to point out to you that appointments at least 48 hours before the agreed appointment must be cancelled so that you do not incur any costs. Should a cancellation be made later, the costs will unfortunately be charged. Thank you for your understanding and I hope you take this into account so that I can make the best possible time schedule and use my resources effectively.",
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-auto w-full  sm:px-8 lg:px-[60px]">
        <div className="w-full h-screen">
          <h1 className="text-2xl sm:text-5xl lg:text-[166px] text-center mt-12 sm:mt-24 lg:mt-[153px] tracking-tight sm:tracking-normal lg:tracking-[-8px]">
            Atlasology Plus
          </h1>
          <img
            alt="images"
            src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
            className="absolute top-0 left-0 w-full object-cover h-[300px] sm:h-[800px] lg:h-[1400px] z-[-1]"
          />
          <img
            alt="images"
            src="https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bfb83e77a6b18b99b766a2_pli-angebot-atlaslogie.png"
            className="absolute top-[-50px] sm:top-[-150px] lg:top-[-300px] right-0 left-0 w-full lg:w-[1380px] h-auto z-[-1]"
          />
        </div>

        <div className="px-[30px] mt-16 sm:mt-32 lg:mt-[250px]">
          <LineRow padding="py-8 sm:py-16 lg:py-[119px]" />
          <p className=" text-[30px] lg:text-[66px] leading-[1]">
            The first cervical vertebra is called atlas — it supports the head.
            It is of particular importance for all vertebral bodies, as
            malpositions in this area can have far-reaching effects.
          </p>
          <LineRow padding="py-8 sm:py-16 lg:py-[100px]" />
        </div>
        <div className="px-[30px]">
          <Description title="When does atlasology make sense?" data={items} />
        </div>
        <LineRow padding="px-[30px] py-[50px] md:py-[100px]" />
        <div className="px-[30px]">
          <div
            className={cx(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-[60px]"
            )}
          >
            <div className="col-span-1 text-[20px] md:text-[30px]">
              Atlasology explained
            </div>
            <div className="col-span-2">
              {dataDescriptions?.map((item, index) => {
                return (
                  <p
                    className="pb-[10px] text-[14px] md:text-[18px]"
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <LineRow padding="px-[30px] py-[50px] md:py-[100px]" />
        <div className="px-[30px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataBlocks?.map((item, index) => {
            return (
              <div className="" key={index}>
                <Block title={item.title} content={item.content} />
              </div>
            );
          })}
        </div>
        <LineRow padding="px-[30px] py-[50px] md:py-[100px]" />
        <div className="px-[30px] w-full flex flex-col items-center">
          <div className="w-full text-center mt-8 sm:mt-12 lg:mt-[30px]">
            <h1 className="text-2xl sm:text-5xl lg:text-[156px] text-start pl-8 sm:pl-24 lg:pl-[200px]">
              Start now
            </h1>
            <h1 className="text-2xl sm:text-5xl lg:text-[156px] flex flex-col md:flex-row justify-center gap-[20px] md:gap-[200px]">
              <span className="text-2xl sm:text-5xl lg:text-[156px]">
                into a
              </span>
              <span className="text-2xl sm:text-5xl lg:text-[156px]">
                better life
              </span>
            </h1>
            <h1 className="text-2xl sm:text-5xl lg:text-[156px] text-right mr-4 sm:mr-8 lg:mr-[70px]">
              for yourself
            </h1>
          </div>
          <button className={cx("button-with-icon", "mt-[60px]")}>
            <span className={cx("icon")}>
              <ArrowRightIcon />
            </span>
            <span className={cx("text", "text-[16px] font-medium")}>
              Book appointment
            </span>
          </button>
        </div>
        <LineRow padding="px-[30px] py-[50px] md:py-[100px]" />
      </div>
      <div className="mt-[-30px] md:mt-[-60px]">
        <TitleComponent title="More Services" />
        <DragToScroll />
      </div>

      <div className="mt-[-15px] md:mt-[-30px]">
        <Footer hiddenSupport="true" />
      </div>
    </div>
  );
};

export default Services;
