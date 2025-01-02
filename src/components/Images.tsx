import { FunctionComponent } from "react";

export type ImagesType = {
  className?: string;
};

const Images: FunctionComponent<ImagesType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-boundvariablesdata6 ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-center gap-boundvariablesdata6">
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/vectonauta@2x.png"
        />
        <img
          className="h-48 w-[190px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/starline@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/rawpixel@2x.png"
        />
        <img
          className="w-[190px] rounded h-48 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/saoso@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/kjpargeter@2x.png"
        />
        <img
          className="w-[190px] rounded h-48 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/brgfx@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/kjpargeter-1@2x.png"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-center gap-boundvariablesdata6">
        <img
          className="h-48 w-[190px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/-xvector@2x.png"
        />
        <img
          className="h-48 w-[190px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/vecstock@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/biancoblue@2x.png"
        />
        <img
          className="w-[190px] rounded h-48 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/wirestock@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/yusufsangdes@2x.png"
        />
        <img
          className="w-[190px] rounded h-48 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/upklyak@2x.png"
        />
        <img
          className="h-48 w-[305px] rounded overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/benzoix@2x.png"
        />
        <img
          className="w-[190px] rounded h-48 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/billionphotos@2x.png"
        />
      </div>
    </div>
  );
};

export default Images;
