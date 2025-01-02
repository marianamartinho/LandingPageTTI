import { FunctionComponent } from "react";

export type LastBandType = {
  className?: string;
};

const LastBand: FunctionComponent<LastBandType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-spacings-space-180 gap-spacings-space-180 text-left text-smi text-colors-neutral-800 font-body-base-regular ${className}`}
    >
      <div className="flex-1 relative leading-[160%]">
        <p className="m-0">Made in sunny Málaga 🐟</p>
        <p className="m-0 whitespace-pre-wrap">
          Copyright © 2010-2023 Freepik Company S.L. All rights reserved.
        </p>
      </div>
      <div className="flex flex-row items-start justify-start gap-spacings-space-180">
        <div className="flex flex-row items-start justify-start">
          <img className="w-5 relative h-5" alt="" src="/brandsfacebook.svg" />
        </div>
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-5 relative h-5"
            alt=""
            src="/brandstwitternew.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start">
          <img className="w-5 relative h-5" alt="" src="/brandspinterest.svg" />
        </div>
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/brandsinstagram.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start">
          <img className="w-5 relative h-5" alt="" src="/brandsyoutube.svg" />
        </div>
      </div>
    </div>
  );
};

export default LastBand;
