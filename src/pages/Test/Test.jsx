import classNames from "classnames/bind";
import styles from "./Test.module.scss";
import ImageScrollSection from "../../components/Test/Test";

const cx = classNames.bind(styles);
const Test = () => {
  return (
    <div className="h-[2000-px] w-full">
      <div className="h-full w-full flex justify-center items-center">
        <ImageScrollSection />
      </div>
    </div>
  );
};

export default Test;
