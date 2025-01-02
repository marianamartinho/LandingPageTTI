import { FunctionComponent } from "react";
import Video from "./Video";

export type Image5Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image5: FunctionComponent<Image5Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[528px] rounded h-[220px] overflow-hidden shrink-0 flex flex-row items-end justify-start p-boundvariablesdata12 box-border relative bg-[url('/public/image7@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="flex flex-row items-center justify-start gap-boundvariablesdata9 z-[0]">
        <div className="relative leading-[150%] font-semibold">{`Animals `}</div>
        <img className="h-4 w-4 relative" loading="lazy" alt="" />
      </div>
      <Video
        property1="Default"
        showVideo={false}
        pxSMMediaDevicesvideoLinear="/16pxsmmediadevicesvideolinear-3.svg"
      />
    </div>
  );
};

export default Image5;
