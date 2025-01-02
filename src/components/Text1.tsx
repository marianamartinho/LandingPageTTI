import { FunctionComponent } from "react";

export type Text1Type = {
  className?: string;
  aITEXTTOIMAGE?: string;
  turnYourWordsIntoOhSoIncredib?: string;
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  aITEXTTOIMAGE,
  turnYourWordsIntoOhSoIncredib,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-spacings-25 px-spacings-25 pb-0 gap-spacings-5 text-left text-xs text-colors-primary-piki-blue-500 font-body-base-regular ${className}`}
    >
      <div className="self-stretch relative leading-[160%] font-semibold">
        {aITEXTTOIMAGE}
      </div>
      <div className="self-stretch relative text-mid leading-[160%] text-colors-neutral-800">
        {turnYourWordsIntoOhSoIncredib}
      </div>
    </div>
  );
};

export default Text1;
