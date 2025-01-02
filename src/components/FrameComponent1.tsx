import { FunctionComponent } from "react";
import ItemVertical from "./ItemVertical";
import ItemVertical1 from "./ItemVertical1";
import ItemVertical2 from "./ItemVertical2";
import ItemVertical3 from "./ItemVertical3";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-13xl text-colors-neutral-900 font-display-medium mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="w-[1220px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-[306px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[76px] mq800:pr-[76px] mq800:box-border mq1300:pl-[153px] mq1300:pr-[153px] mq1300:box-border">
          <h1 className="m-0 h-[38px] w-[608px] relative text-inherit leading-[125%] font-semibold font-[inherit] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[24px] mq800:text-7xl mq800:leading-[32px]">
            Free tools to sky-rocket your creative freedom
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[30px] text-xs text-colors-primary-piki-blue-500 font-body-base-regular mq450:grid-cols-[minmax(212px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(212px,_367px))]">
          <ItemVertical />
          <ItemVertical1 />
          <ItemVertical2 />
          <ItemVertical3 />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
