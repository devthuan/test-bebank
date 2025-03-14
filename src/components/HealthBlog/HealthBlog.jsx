import classNames from "classnames/bind";
import styles from "./HealthBlog.module.scss"; // Import file CSS
import TitleComponent from "../TitleComponent/TitleComponent";
import { CalenderIcon, ClockIcon } from "../Icons";

const cx = classNames.bind(styles);
const HealthBlog = ({ classNameTitle, dataBlog }) => {
  return (
    <div className="w-full h-full px-[60px]">
      <span className={classNameTitle}>
        <TitleComponent title="Health Blog" />
      </span>
      <div className="mt-[60px] w-full h-auto ">
        <div className="h-full grid grid-rows-1 gap-4">
          <div
            className={cx("wrap-item", "h-[450px] w-full flex bg-[#edddc3]")}
          >
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
        </div>
        <div className="grid gap-4 grid-cols-3 mt-[16px]">
          {dataBlog?.map((item, index) => {
            return (
              <div
                key={index}
                className={cx("wrap-item", "h-[462px] w-full  bg-[#edddc3]")}
              >
                <div className={cx("wrap-img")}>
                  <img
                    className={cx("item-img", "h-[268px] w-auto ")}
                    src={item.images}
                    alt="image"
                  />
                </div>
                <div
                  className={cx(
                    "item-content",
                    "bg-[#edddc3] p-[20px] w-full h-auto min-h-[200px] bottom-0"
                  )}
                >
                  <div className="">
                    <h4 className="text-[16px] mb-[4px]">{item.title}</h4>

                    <p className="text-[24px] max-w-[350px]">
                      {item.desciption}
                    </p>
                  </div>
                </div>
                <div
                  className={cx("wrap__time", "flex px-[20px] gap-x-[20px]  ")}
                >
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HealthBlog;
