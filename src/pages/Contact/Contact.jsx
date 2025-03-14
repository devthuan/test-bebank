import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { ArrowRightIcon, TopArrowIcon } from "../../components/Icons";

const cx = classNames.bind(styles);
const Contact = () => {
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
    <div className="h-screen w-screen  ">
      <div className="px-[60px]">
        <div className="w-full h-auto max-h-screen ">
          <img
            alt="images"
            src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
            className="absolute top-0 left-0 w-full object-cover h-full  z-[-1]"
          />
          <img
            alt="images"
            src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659add45a6850e7bd1d48119_pli-home-hero2.png"
            className="absolute top-[100px] right-0 w-[693px] h-auto  z-[-1]"
          />
        </div>
        <div className="relative w-[633px] h-screen flex flex-col justify-center">
          <div className="absolute top-[140px]">
            <h1 className="text-[137px] mb-[40px]">Contact</h1>
            <div className="w-[632px]  ">
              {dataContact?.map((item, index) => (
                <div
                  key={index}
                  className="h-auto justify-center items-start grid grid-cols-4 border-y-[1px] border-black py-[14px]"
                >
                  <div className="text-[16px] font-medium uppercase">
                    {item.title}
                  </div>
                  <div className="max-w-[270px]  text-[16px] font-medium uppercase col-span-2">
                    {item.address}
                  </div>
                  <div className="flex justify-center">
                    <span className="text-[16px] font-medium uppercase">
                      {item.describe}
                    </span>
                    <span>
                      <TopArrowIcon />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 h-[155px] rounded-md bg-[#888151] flex justify-between items-center px-[30px]">
            <p className="text-[27px] w-[318px] font-medium">
              Book your appointment directly online
            </p>
            <button className={cx("button-with-icon", "mt-[30px]")}>
              <span className={cx("icon")}>
                <ArrowRightIcon />
              </span>
              <span className={cx("text", "text-[16px] font-medium")}>
                Book appointment
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
