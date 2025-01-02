import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type VideoType = {
  className?: string;
  showVideo?: boolean;
  pxSMMediaDevicesvideoLinear?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  videoLeft?: CSSProperties["left"];
};

const Video: FunctionComponent<VideoType> = ({
  className = "",
  property1 = "Default",
  showVideo,
  videoLeft,
  pxSMMediaDevicesvideoLinear,
}) => {
  const videoStyle: CSSProperties = useMemo(() => {
    return {
      left: videoLeft,
    };
  }, [videoLeft]);

  return (
    showVideo && (
      <div
        className={`!m-[0] absolute top-[8px] left-[496px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-colors-neutral-900 flex flex-row items-center justify-start py-1 px-2 gap-2.5 z-[1] text-left text-2xs text-neutral-25-white font-headlines-h4-34px-semibold ${className}`}
        data-property1={property1}
        style={videoStyle}
      >
        <div className="w-[23px] relative leading-[21px] hidden">New</div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={pxSMMediaDevicesvideoLinear}
        />
      </div>
    )
  );
};

export default Video;
