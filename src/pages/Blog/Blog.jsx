import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import { SearchIcon } from "../../components/Icons";
import HealthBlog from "../../components/HealthBlog/HealthBlog";

const cx = classNames.bind(styles);
const Blog = () => {
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
    {
      images:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bd55dccd55ec754f4d5a69_LeandraIsler_FODMAP_Ernaehrung.jpg",
      title: "FOD MAP",
      desciption: "What this abbreviation has to do with your intestines",
      date: "17/5/24",
      time: "5min",
    },
    {
      images:
        "https://cdn.prod.website-files.com/65a289fdf3cf4584881a404d/65bd55dccd55ec754f4d5a69_LeandraIsler_FODMAP_Ernaehrung.jpg",
      title: "FOD MAP",
      desciption: "What this abbreviation has to do with your intestines",
      date: "17/5/24",
      time: "5min",
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

  const listTopic = [
    "Knowledge",
    "Health",
    "Tips & Tricks",
    "My Services",
    "My Practice",
  ];

  return (
    <div className="h-auto w-screen">
      <img
        src="https://cdn.prod.website-files.com/659ab65ceabb05549e0dc188/659ab96b20d886f0cb06285a_pli-background-default.jpg"
        alt="images"
        className="absolute top-0 left-0 w-full h-[1000px] z-[-1]"
      />
      <header className={`relative z-10 mb-[80px]`}>
        <div
          className={cx(
            "health__blog",
            "w-full h-[274px] px-[60px] mt-[200px]  flex flex-col justify-center items-center "
          )}
        >
          <h1 className={cx("health__blog-title")}>Health Blog</h1>
          <div className="w-[750px] h-[62px] my-[22px] relative">
            <input
              placeholder="Enter search term..."
              type="text"
              className={cx(
                "health__blog-input",
                "px-[60px] w-full h-[62px] text-[18px]"
              )}
            />
            <SearchIcon className="absolute top-[20px] left-[20px]" />
          </div>
          <div className="flex gap-[8px]">
            <p className="text-[black] uppercase first-letter:rounded-[4px] text-[14px] px-[12px] py-[7px] ">
              TOPICS
            </p>
            {listTopic?.map((item, index) => {
              return (
                <p
                  key={index}
                  className={cx(
                    "item-topic",
                    "text-[black] uppercase rounded-[4px] text-[14px] border-[1px] px-[12px] py-[7px] border-black"
                  )}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </header>

      <div className="w-full h-auto pt-[100px]">
        <HealthBlog classNameTitle={"hidden"} dataBlog={listData} />
      </div>
    </div>
  );
};

export default Blog;
