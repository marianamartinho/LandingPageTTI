import { FunctionComponent } from "react";
import Menu1 from "../components/Menu1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import HeaderV from "../components/HeaderV";

const FreepikTextToImage11440x: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="w-full h-[939px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden z-[1]"
          alt=""
          src="/imagebackground@2x.png"
        />
      </section>
      <Menu1 />
      <FrameComponent3 />
      <FrameComponent4 />
      <HeaderV />
    </div>
  );
};

export default FreepikTextToImage11440x;
