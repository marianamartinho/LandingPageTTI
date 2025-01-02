import { FunctionComponent } from "react";
import Image2 from "./Image2";
import Video from "./Video";
import Image3 from "./Image3";
import Image4 from "./Image4";
import Image5 from "./Image5";
import Image6 from "./Image6";
import Image7 from "./Image7";
import Image8 from "./Image8";

export type TrendingType = {
  className?: string;
};

const Trending: FunctionComponent<TrendingType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-neutral-25-white h-[1021px] flex flex-col items-center justify-start py-boundvariablesdata5 px-10 box-border gap-boundvariablesdata4 text-center text-sm text-colors-primary-piki-blue-500 font-body-base-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-center gap-boundvariablesdata13">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 flex flex-col items-center justify-start gap-boundvariablesdata9">
              <div className="w-[1320px] relative leading-[160%] font-semibold hidden">
                TRENDS
              </div>
              <h1 className="m-0 w-[736px] relative text-17xl leading-[125%] font-semibold font-display-medium text-colors-neutral-900 inline-block">
                Designers’ faves
              </h1>
            </div>
          </div>
          <div className="self-stretch relative text-mid leading-[150%] text-colors-neutral-800">
            <span>{`Check out what’s getting the most `}</span>
            <i>olés</i>
            <span> in Freepik right now.</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata6 text-left text-base text-neutral-25-white">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-boundvariablesdata6">
          <Image2 property1="Default" />
          <Video
            showVideo
            videoLeft="328px"
            pxSMMediaDevicesvideoLinear="/16pxsmmediadevicesvideolinear-2.svg"
          />
          <Image3 property1="Default" />
          <Image4 property1="Default" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata6">
          <Image5 property1="Default" />
          <textarea
            className="[border:none] bg-[transparent] h-auto w-auto [outline:none] self-stretch flex-1 rounded flex flex-row items-end justify-start p-boundvariablesdata12 box-border bg-[url('/public/image8@3x.png')] bg-cover bg-no-repeat bg-[top] font-body-base-regular font-semibold text-base text-neutral-25-white"
            placeholder="Landscape videos"
            rows={11}
            cols={19}
          />
          <Image6 property1="Default" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata6">
          <Image7 property1="Default" />
          <textarea
            className="[border:none] bg-[transparent] h-auto w-auto [outline:none] self-stretch flex-1 rounded flex flex-row items-end justify-start p-boundvariablesdata12 box-border bg-[url('/public/image111@3x.png')] bg-cover bg-no-repeat bg-[top] font-body-base-regular font-semibold text-base text-neutral-25-white"
            placeholder="Textures"
            rows={11}
            cols={19}
          />
          <Image8 property1="Default" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
