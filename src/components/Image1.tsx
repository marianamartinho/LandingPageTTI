import { FunctionComponent } from "react";

export type Image1Type = {
  className?: string;

  /** Variant props */
  property1?: 1;
};

const Image1: FunctionComponent<Image1Type> = ({
  className = "",
  property1 = 1,
}) => {
  return (
    <div
      className={`self-stretch relative h-[172px] overflow-hidden shrink-0 bg-[url('/public/image1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-xs text-colors-neutral-700 font-headlines-h4-34px-semibold ${className}`}
      data-property1={property1}
    >
      <div className="absolute top-[18px] left-[24px] w-[270px] h-[182px] hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_135px)] rounded-t-md rounded-b-none bg-neutral-25-white border-neutral-100 border-[1px] border-solid box-border h-[164px] flex flex-col items-center justify-start p-[15px] gap-3">
          <div className="w-60 relative h-[37px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xs-1 bg-neutral-25-white border-colors-neutral-200 border-[0.8px] border-solid box-border overflow-hidden">
              <img
                className="absolute h-[72.97%] w-[31.25%] top-[13.51%] right-[2.08%] bottom-[13.51%] left-[66.67%] rounded-9xs-1 max-w-full overflow-hidden max-h-full"
                alt=""
                src="/frame-322728.svg"
              />
              <div className="absolute h-[35.41%] w-[71%] top-[31.08%] right-[24.62%] bottom-[33.51%] left-[4.38%] overflow-hidden" />
              <div className="absolute w-9/12 top-[24.32%] left-[3.04%] leading-[18px] inline-block">
                Beautiful painting of a lands
              </div>
              <div className="absolute h-[41.62%] w-[24.17%] top-[32.43%] right-[35.13%] bottom-[25.95%] left-[40.71%] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_#fff)]" />
            </div>
          </div>
          <div className="w-[230px] relative h-[82px]">
            <img
              className="absolute top-[16px] left-[0px] rounded w-[54px] h-[50px] object-cover"
              alt=""
              src="/beautifulpaintingofalandscapebeautifullightdetails8kresolution343@2x.png"
            />
            <img
              className="absolute top-[16px] left-[117px] rounded w-[54px] h-[50px] object-cover"
              alt=""
              src="/beautifulpaintingofalandscapebeautifullightdetails8kresolution341@2x.png"
            />
            <img
              className="absolute top-[16px] left-[176px] rounded w-[54px] h-[50px] object-cover"
              alt=""
              src="/beautifulpaintingofalandscapebeautifullightdetails8kresolution340@2x.png"
            />
            <img
              className="absolute top-[0px] left-[30.9px] rounded w-[101.4px] h-[82.5px] object-cover"
              alt=""
              src="/beautifulpaintingofalandscapebeautifullightdetails8kresolution342@2x.png"
            />
          </div>
        </div>
        <div className="absolute bottom-[20px] left-[calc(50%_-_135px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.05))] w-[270px] h-[30px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Image1;
