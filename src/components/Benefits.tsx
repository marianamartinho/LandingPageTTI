import { FunctionComponent } from "react";
import Item from "./Item";

export type BenefitsType = {
  className?: string;
};

const Benefits: FunctionComponent<BenefitsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-neutral-25-white h-[687px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-spacings-80 px-10 pb-spacings-120 box-border gap-boundvariablesdata11 text-center text-mini text-colors-primary-piki-blue-500 font-body-base-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-boundvariablesdata7">
        <div className="flex flex-col items-center justify-center gap-boundvariablesdata9">
          <div className="w-[1320px] relative leading-[160%] font-semibold inline-block">
            BENEFITS
          </div>
          <h1 className="m-0 relative text-37xl tracking-[-0.01em] leading-[100%] font-semibold font-display-medium text-colors-neutral-900 text-left">
            Let’s make your ideas break through
          </h1>
        </div>
        <div className="w-[1320px] relative text-mid leading-[160%] text-colors-neutral-800 inline-block">
          Find the most up-to-date vocabulary of images, videos, signs, symbols,
          and fonts.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata6 text-left text-13xl text-colors-neutral-900 font-display-medium">
        <Item
          illustration="/illustration.svg"
          highQualityOrNothing="High-quality or nothing"
          downloadScrollStoppingImages="Download scroll-stopping images of the best quality to make your projects look professional."
        />
        <Item
          illustration="/illustration-1.svg"
          highQualityOrNothing="Ready-to-use everything"
          highQualityOrNothingWidth="unset"
          highQualityOrNothingDisplay="unset"
          highQualityOrNothingAlignSelf="stretch"
          downloadScrollStoppingImages="From thousands of ready-to-publish images to our online editor, we work to get your project ready double-quick."
        />
        <div className="self-stretch flex-1 rounded-radius-lg flex flex-col items-start justify-start py-0 pl-0 pr-boundvariablesdata12 gap-boundvariablesdata6">
          <img
            className="w-[72px] h-[72px] relative rounded overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/illustration-2.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <h1 className="m-0 w-[263px] relative text-inherit tracking-[-0.01em] leading-[120%] font-semibold font-[inherit] inline-block">
              <p className="m-0">{`Fresh content `}</p>
              <p className="m-0">every day</p>
            </h1>
            <div className="self-stretch relative text-mini leading-[160%] font-body-base-regular text-colors-neutral-800">
              Our library is updated on a daily basis so you can find the newest
              and trendiest photos and designs.
            </div>
          </div>
        </div>
        <Item
          illustration="/illustration-3.svg"
          highQualityOrNothing="If you can think of it, you can find it"
          highQualityOrNothingWidth="unset"
          highQualityOrNothingDisplay="unset"
          highQualityOrNothingAlignSelf="stretch"
          downloadScrollStoppingImages="Guaranteed searh results: there’s an image and style for every project, whatever your needs are."
        />
      </div>
    </div>
  );
};

export default Benefits;
