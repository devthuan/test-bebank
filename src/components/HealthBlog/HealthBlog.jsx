import classNames from "classnames/bind";
import styles from "./HealthBlog.module.scss"; // Import file CSS
import TitleComponent from "../TitleComponent/TitleComponent";
import { CalenderIcon, ClockIcon } from "../Icons";

const cx = classNames.bind(styles);
const HealthBlog = () => {
  const listData = [
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

  return (
    <div className="w-full px-[60px]">
      <TitleComponent title="Health Blog" />
      <div className="mt-[60px]  w-full h-auto">
        <div className="grid grid-rows-2 gap-4">
          <div className="h-[450px] w-full flex bg-[#edddc3]">
            <img
              className="h-[450px] w-auto"
              src="https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/670be165d9c3c20a148a78e4_pli_nitrosativerstress.jpg"
              alt="image"
            />
            <div className="p-[30px] relative">
              <div className="">
                <h4 className="text-[14px] ">NITROSATIVE STRESS</h4>

                <h3 className="text-[40px] max-w-[500px]">
                  The silent inflammatory factor and its effects
                </h3>
              </div>
              <div className="flex gap-[20px] absolute bottom-[20px]">
                <div className="flex gap-1 justify-center items-center p-[10px] rounded-3xl bg-[#7e4f0014]">
                  <span>
                    <CalenderIcon />
                  </span>
                  <span className="text-[14px]"> 13/10/2024</span>
                </div>
                <div className="flex gap-1 justify-center items-center p-[10px] rounded-3xl bg-[#7e4f0014]">
                  <span>
                    <ClockIcon />
                  </span>
                  <span className="text-[14px]">10min</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-3 h-[462px]">
            {listData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[462px] w-full relative bg-[#edddc3]"
                >
                  <img
                    className="h-[268px] w-auto"
                    src={item.images}
                    alt="image"
                  />
                  <div className="p-[20px] h-auto max-h-[200px]">
                    <div className="">
                      <h4 className="text-[16px] mb-[4px]">{item.title}</h4>

                      <p className="text-[24px] max-w-[350px]">
                        {item.desciption}
                      </p>
                    </div>

                    <div className="flex gap-x-[20px] absolute bottom-[15px]  ">
                      <div className="flex gap-1 justify-center items-center p-[10px] rounded-3xl bg-[#7e4f0014]">
                        <span>
                          <CalenderIcon />
                        </span>
                        <span className="text-[14px]"> {item.date}</span>
                      </div>
                      <div className="flex gap-1 justify-center items-center p-[10px] rounded-3xl bg-[#7e4f0014]">
                        <span>
                          <ClockIcon />
                        </span>
                        <span className="text-[14px]">{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBlog;
