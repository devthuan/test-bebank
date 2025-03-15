import classNames from "classnames/bind";
import styles from "./HealthBlog.module.scss"; // Import file CSS
import TitleComponent from "../TitleComponent/TitleComponent";
import { CalenderIcon, ClockIcon } from "../Icons";

const cx = classNames.bind(styles);
const HealthBlog = ({ classNameTitle, dataBlog }) => {
  return (
    <div className="w-full h-full">
      <span className={classNameTitle}>
        <TitleComponent title="Health Blog" />
      </span>
      <div className="mt-4 md:mt-6 lg:mt-[60px] w-full h-auto">
        
        <div className={cx("wrap-item","bg-[#edddc3] h-full grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4")}>
          <div
            className={cx(
              
              "h-[200px] md:h-[300px] lg:h-[400px] w-full  "
            )}
          >
            <img
              className="w-full h-full"
              src="https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/670be165d9c3c20a148a78e4_pli_nitrosativerstress.jpg"
              alt="image"
            />
          </div>
          <div className="w-full h-full p-4 md:p-6 lg:p-[30px] relative">
            <div className="mb-[70px] lg:mb-0">
              <h4 className="text-[10px] md:text-[12px]">NITROSATIVE STRESS</h4>
              <h3 className="text-[20px] md:text-[28px] lg:text-[36px] max-w-[500px]">
                The silent inflammatory factor and its effects
              </h3>
            </div>
            <div className="flex gap-2 md:gap-4 absolute bottom-4 md:bottom-6 lg:bottom-[20px]">
              <div className="flex gap-1 justify-center items-center p-2 md:p-3 lg:p-[10px] rounded-3xl bg-[#7e4f0014]">
                <span>
                  <CalenderIcon />
                </span>
                <span className="text-[10px] md:text-[12px]"> 13/10/2024</span>
              </div>
              <div className="flex gap-1 justify-center items-center p-2 md:p-3 lg:p-[10px] rounded-3xl bg-[#7e4f0014]">
                <span>
                  <ClockIcon />
                </span>
                <span className="text-[10px] md:text-[12px]">10min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4 md:mt-6 lg:mt-[16px]">
          {dataBlog?.map((item, index) => {
            return (
              <div
                key={index}
                className={cx(
                  "wrap-item",
                  "h-[110px] md:h-[334px] lg:h-[436px] w-full bg-[#edddc3] "
                )}
              >
                <div className="w-full h-full grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 ">
                  <div
                    className={cx("h-full md:h-[147px] lg:h-[400px] w-full  ")}
                  >
                    <img
                      className="w-full h-full md:h-[147px] lg:h-[268px]"
                      src={item.images}
                      alt="image"
                    />
                  </div>

                  <div
                    className={cx(
                      { "item-content": window.innerWidth >= 1024 }
                      // "sm:col-span-2 bg-[#edddc3] p-4 md:p-5 lg:p-[20px] w-full h-auto min-h-[100px] md:min-h-[150px] lg:min-h-[200px] "
                    )}
                  >
                    <div className="md:p-[20px] md:mt-[-40px]">
                    <h4 className="text-[12px] md:text-[14px] mb-1 md:mb-[4px] uppercase">
                      {item.title}
                    </h4>
                      <p className="text-[18px] md:text-[16px] lg:text-[18px] max-w-[350px]">
                        {item.desciption}
                      </p>
                    </div>

                    <div
                      className={cx(
                        "wrap__time",
                        "hidden md:flex lg:flex  px-4 md:px-5 lg:px-[20px] gap-x-2 md:gap-x-3 lg:gap-x-[20px]"
                      )}
                    >
                      <div className="flex gap-1 justify-center items-center p-2 md:p-3 lg:p-[10px] rounded-3xl bg-[#7e4f0014]">
                        <span>
                          <CalenderIcon />
                        </span>
                        <span className="text-[10px] md:text-[12px]">
                          {" "}
                          {item.date}
                        </span>
                      </div>
                      <div className="flex gap-1 justify-center items-center p-2 md:p-3 lg:p-[10px] rounded-3xl bg-[#7e4f0014]">
                        <span>
                          <ClockIcon />
                        </span>
                        <span className="text-[10px] md:text-[12px]">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HealthBlog;
