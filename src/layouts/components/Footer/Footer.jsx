import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { LogoIcon } from "../../../components/Icons";
import LineRow from "../../../components/LineRow/LineRow";
import Support from "../../../components/Support/Support";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className="h-full w-full">
      <LineRow padding="px-[60px] py-[100px]" />

      <div className="w-full px-[60px] mx-auto ">
        <Support />
      </div>
      <div className={cx("relative flex h-[437px] w-full x")}>
        <img
          className="h-[694px] w-full object-cover absolute z-[-1]"
          src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659b17a3a0ec2e337dbf90c7_pli-background-footer-p-1600.jpg"
          alt=""
        />
        <div className="relative pt-[320px] w-full h-auto ">
          <div className="py-[40px] px-[60px]">
            <div className="flex justify-between items-start">
              <div className="">
                <div className="w-[156px]">
                  <LogoIcon />
                </div>
                <div className="w-[240px] text-[14px] mt-[30px]">
                  Copyright 2023 © Praxis Leandra Isler, All rights reserved
                </div>
              </div>
              <div className="w-[725px] flex justify-between">
                <div className="w-auto">
                  <h1 className="mb-[32px] uppercase font-medium">Pages</h1>
                  <ul className="">
                    <li className="mt-[2px] text-[14px]">Home</li>
                    <li className="mt-[2px] text-[14px]">Services</li>
                    <li className="mt-[2px] text-[14px]">Health</li>
                    <li className="mt-[2px] text-[14px]">Blog</li>
                    <li className="mt-[2px] text-[14px]">About me</li>
                    <li className="mt-[2px] text-[14px]">Contact</li>
                    <li className="mt-[2px] text-[14px]">Appointment</li>
                  </ul>
                </div>

                <div className="w-auto ml-[100px]">
                  <h1 className="mb-[32px] uppercase font-medium">
                    Opening hours
                  </h1>
                  <ul className="">
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase">Mo</div>
                      <div className="">8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase">Di</div>
                      <div className="">8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase">Mi</div>
                      <div className="">8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase">thu</div>
                      <div className="">8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase">Fr</div>
                      <div className="">8:30 a.m. to 8:00 p.m.</div>
                    </li>
                    <li className="mt-[2px] flex text-[14px] ">
                      <div className="w-[70px] uppercase"> Sat/Sun</div>
                      <div className="">Closed</div>
                    </li>
                  </ul>
                </div>

                <div className="w-auto">
                  <h1 className="mb-[32px] uppercase font-medium">contact</h1>
                  <ul className="">
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
            <LineRow padding="mt-[60px] mb-[30px]" />
            <div className="flex justify-between items-center">
              <div className="text-[14px] uppercase font-medium">
                Made by ESE Agency
              </div>
              <div className="flex gap-4">
                <span className="uppercase font-medium text-[14px]">
                  imprint and Data protection
                </span>
                <span className="uppercase font-medium text-[14px]">de </span>
                <span className="uppercase font-medium text-[14px]">en</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
