import { FunctionComponent } from "react";
import SearchProto from "./SearchProto";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center max-w-full shrink-0 text-center text-25xl text-neutral-25-white font-display-medium ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-10 shrink-0 max-w-full mq800:gap-5">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full mq1125:pl-[23px] mq1125:pr-[23px] mq1125:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[120%] font-semibold font-[inherit] mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[42px]">
              Create great designs, faster
            </h1>
            <div className="self-stretch relative text-mid font-body-base-regular">
              Turn ideas into outstanding designs with high-quality vectors,
              photos, videos, mockups, and more
            </div>
          </div>
        </div>
        <SearchProto property1="Default" />
      </div>
    </div>
  );
};

export default FrameComponent;
