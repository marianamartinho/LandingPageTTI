import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ItemType = {
  className?: string;
  illustration?: string;
  highQualityOrNothing?: string;
  downloadScrollStoppingImages?: string;

  /** Style props */
  highQualityOrNothingWidth?: CSSProperties["width"];
  highQualityOrNothingDisplay?: CSSProperties["display"];
  highQualityOrNothingAlignSelf?: CSSProperties["alignSelf"];
};

const Item: FunctionComponent<ItemType> = ({
  className = "",
  illustration,
  highQualityOrNothing,
  highQualityOrNothingWidth,
  highQualityOrNothingDisplay,
  highQualityOrNothingAlignSelf,
  downloadScrollStoppingImages,
}) => {
  const highQualityOrNothingStyle: CSSProperties = useMemo(() => {
    return {
      width: highQualityOrNothingWidth,
      display: highQualityOrNothingDisplay,
      alignSelf: highQualityOrNothingAlignSelf,
    };
  }, [
    highQualityOrNothingWidth,
    highQualityOrNothingDisplay,
    highQualityOrNothingAlignSelf,
  ]);

  return (
    <div
      className={`self-stretch flex-1 rounded-radius-lg flex flex-col items-start justify-start py-0 pl-0 pr-boundvariablesdata12 gap-boundvariablesdata6 text-left text-13xl text-colors-neutral-900 font-display-medium ${className}`}
    >
      <img
        className="w-[72px] h-[72px] relative rounded overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={illustration}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
        <h1
          className="m-0 w-[260px] relative text-inherit tracking-[-0.01em] leading-[120%] font-semibold font-[inherit] inline-block"
          style={highQualityOrNothingStyle}
        >
          {highQualityOrNothing}
        </h1>
        <div className="self-stretch relative text-mini leading-[160%] font-body-base-regular text-colors-neutral-800">
          {downloadScrollStoppingImages}
        </div>
      </div>
    </div>
  );
};

export default Item;
