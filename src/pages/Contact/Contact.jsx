import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { ArrowRightIcon, TopArrowIcon } from "../../components/Icons";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import LineRow from "../../components/LineRow/LineRow";
import useDelayRender from "../../hooks/useDelayRender";
const cx = classNames.bind(styles);
const Contact = () => {
  const isReady = useDelayRender(1200);
  const dataContact = [
    {
      title: "Address",
      address: "Praxis Leandra Isler Huzlenstrasse 63 8604 Volketswil",
      describe: "Directions",
    },
    {
      title: "Phone",
      address: "+41 79 666 91 01",
      describe: "Call now",
    },
    { title: "Mail", address: "info@leandra-isler.ch", describe: "Send Mail" },
  ];

  return (
    <>
      {isReady && (
        <div className="h-full w-full">
          <div className="px-4 md:px-[60px]">
            <div className=" w-full h-auto max-h-screen">
              <img
                alt="images"
                src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
                className="absolute top-0 left-0 lg:w-full w-auto object-cover  h-[1800px] lg:h-full  md:h-[2300px]  z-[-1]"
              />
              <ScrollReveal>
                <img
                  alt="images"
                  src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2.png"
                  className="absolute top-[900px] lg:top-[150px] md:top-[800px] sm:left-0  md:left-0 lg:left-[calc(50%+20px)] w-full object-cover md:w-auto h-[400px]  md:h-[900px] lg:h-[600px] z-[-1]"
                />
              </ScrollReveal>
            </div>
            <div className="relative sm:w-full md:w-full lg:w-[632px] h-screen flex flex-col justify-center">
              <div className="absolute w-full top-[140px]">
                <ScrollReveal>
                  <h1 className="text-[40px] lg:text-[138px] md:text-[82px] mb-[20px] md:mb-[40px]">
                    Contact
                  </h1>
                </ScrollReveal>
                <div className="w-full md:w-full">
                  <LineRow padding="0" />

                  {dataContact?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="h-auto justify-center items-start grid grid-cols-1 md:grid-cols-4  py-[14px]"
                      >
                        <ScrollReveal delay={parseInt(index + "00")}>
                          <div className="text-[16px] font-medium uppercase">
                            {item.title}
                          </div>
                        </ScrollReveal>
                        <ScrollReveal
                          delay={parseInt(index + "00")}
                          className={"col-span-2"}
                        >
                          <div className="max-w-full md:max-w-[270px] text-[16px] font-medium uppercase col-span-2">
                            {item.address}
                          </div>
                        </ScrollReveal>
                        <ScrollReveal delay={parseInt(index + "00")}>
                          <div className="flex justify-start mt-2 lg:justify-center md:justify-center">
                            <span className="text-[16px] font-medium uppercase">
                              {item.describe}
                            </span>
                            <span>
                              <TopArrowIcon />
                            </span>
                          </div>
                        </ScrollReveal>
                      </div>
                      <LineRow padding="0" />
                    </>
                  ))}
                </div>
              </div>

              <ScrollReveal className="w-full lg:absolute lg:bottom-0">
                <div className="w-full p-[30px] lg:absolute mt-[500px] md:mt-[150px] lg:bottom-0 h-auto lg:h-[155px] rounded-md bg-[#888151] flex flex-col md:flex-row justify-between items-center ">
                  <p className=" text-[34px] md:text-[27px] w-full md:w-[318px] font-medium">
                    Book your appointment directly online
                  </p>
                  <button
                    className={cx("button-with-icon", "mt-[20px] md:mt-[0]")}
                  >
                    <span className={cx("icon")}>
                      <ArrowRightIcon />
                    </span>
                    <span className={cx("text", "text-[16px] font-medium")}>
                      Book appointment
                    </span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
