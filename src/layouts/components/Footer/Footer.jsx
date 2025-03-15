import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { LogoIcon } from "../../../components/Icons";
import LineRow from "../../../components/LineRow/LineRow";
import Support from "../../../components/Support/Support";
import Accordion from "../../../components/Accordion/Accordion";
import { title } from "motion/react-client";

const cx = classNames.bind(styles);

const Footer = ({ hiddenSupport = false }) => {
  const items = [
    {
      title: "Pages",
      content:
        "Home <br> Services <br> Health Blog <br> About me <br> Contact <br> Appointments",
    },
    {
      title: "opening hours",
      content:
        "Home <br> Services <br> Health Blog <br> About me <br> Contact <br> Appointments",
    },

    {
      title: "Contact",
      content:
        "Praxis Leandra Isler <br> Huzlenstrasse 63 <br> 8604 Volketswil <br> +41 79 666 91 01 <br> info@leandra-isler.ch",
    },
  ];

  return (
    <div className="h-full w-full">
      {hiddenSupport ? (
        ""
      ) : (
        <>
          <LineRow padding="py-[120px] lg:py-[60px]" />
          <div className="w-full px-[30px] md:px-[30px] mx-auto">
            <Support />
          </div>
        </>
      )}
      <div
        className={cx(
          "relative px-[0] flex flex-col md:flex-row h-full md:h-[437px] w-full"
        )}
      >
        <img
          className="h-full md:h-[694px] w-full object-cover absolute z-[-1]"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659b17a3a0ec2e337dbf90c7_pli-background-footer-p-1600.jpg"
          alt=""
        />
        <div className="relative  pt-[320px] w-full h-auto">
          <div className="py-8 md:py-[40px] px-4 md:px-[60px]">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="md:hidden mb-8 md:mb-0">
                <div className="w-[156px]">
                  <LogoIcon />
                </div>
                <div className="w-[240px] text-[14px] mt-[30px]">
                  Copyright 2023 © Praxis Leandra Isler, All rights reserved
                </div>
              </div>

              <div className="hidden md:flex lg:flex w-full md:w-[725px]  flex-col md:flex-row justify-between">
                <div className="w-auto mb-8 md:mb-0">
                  <h1 className="mb-[32px] uppercase font-medium">Pages</h1>
                  <ul>
                    <li className="mt-[2px] text-[14px]">Home</li>
                    <li className="mt-[2px] text-[14px]">Services</li>
                    <li className="mt-[2px] text-[14px]">Health</li>
                    <li className="mt-[2px] text-[14px]">Blog</li>
                    <li className="mt-[2px] text-[14px]">About me</li>
                    <li className="mt-[2px] text-[14px]">Contact</li>
                    <li className="mt-[2px] text-[14px]">Appointment</li>
                  </ul>
                </div>

                <div className="w-auto mb-8 md:mb-0 md:ml-[100px]">
                  <h1 className="mb-[32px] uppercase font-medium">
                    Opening hours
                  </h1>
                  <ul>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">Mo</div>
                      <div>8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">Di</div>
                      <div>8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">Mi</div>
                      <div>8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">thu</div>
                      <div>8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">Fr</div>
                      <div>8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px]">
                      <div className="w-[70px] uppercase">Sat/Sun</div>
                      <div>Closed</div>
                    </li>
                  </ul>
                </div>

                <div className="w-auto">
                  <h1 className="mb-[32px] uppercase font-medium">Contact</h1>
                  <ul>
                    <li className="mt-[2px] text-[14px]">Home</li>
                    <li className="mt-[2px] text-[14px]">
                      Praxis Leandra Isler
                    </li>
                    <li className="mt-[2px] text-[14px]">Huzlenstrasse 63</li>
                    <li className="mt-[2px] text-[14px]">8604 Volketswil</li>
                    <li className="mt-[2px] text-[14px]">+41 79 666 91 01</li>
                    <li className="mt-[2px] text-[14px]">
                      info@leandra-isler.ch
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <LineRow padding="hidden md:flex lg:flex mt-[60px] mb-[30px]" />
            <div className="hidden md:flex lg:flex  flex-col md:flex-row justify-between items-center">
              <div className="text-[14px] uppercase font-medium mb-4 md:mb-0">
                Made by ESE Agency
              </div>
              <div className="  gap-4">
                <span className="uppercase font-medium text-[14px]">
                  Imprint and Data protection
                </span>
                <span className="uppercase font-medium text-[14px]">de</span>
                <span className="uppercase font-medium text-[14px]">en</span>
              </div>
            </div>
          </div>
          {/* FOOTER MOBILE */}
          <div className="flex md:hidden lg:hidden">
            <Accordion bg={false} items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
