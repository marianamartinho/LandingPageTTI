import { FunctionComponent } from "react";
import Text1 from "./Text1";

export type ItemVertical1Type = {
  className?: string;
};

const ItemVertical1: FunctionComponent<ItemVertical1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 rounded-radius-default bg-colors-neutral-50 h-[293px] overflow-hidden flex flex-col items-start justify-start gap-spacings-10 ${className}`}
    >
      <Text1
        aITEXTTOIMAGE="AI SKETCH-TO-IMAGE"
        turnYourWordsIntoOhSoIncredib="Create images from simple doodles in real time"
      />
      <div className="self-stretch relative h-[172px] overflow-hidden shrink-0 bg-[url('/public/image11@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[18px] left-[23.5px] w-[270px] h-[234px] hidden">
          <div className="absolute top-[0px] left-[calc(50%_-_135px)] rounded-t-md rounded-b-none bg-neutral-25-white border-neutral-100 border-[1px] border-solid box-border w-[270px] h-[164px] flex flex-row items-start justify-center p-[15px] gap-[15px]">
            <div className="rounded-md bg-colors-neutral-50 flex flex-col items-start justify-start p-[5px] gap-2.5">
              <div className="flex flex-row items-start justify-start p-[5px]">
                <img
                  className="w-3.5 relative h-3.5"
                  alt=""
                  src="/systeminteractive.svg"
                />
              </div>
              <div className="rounded bg-colors-neutral-75 flex flex-row items-start justify-start p-[5px]">
                <img
                  className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/editbrush.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[5px]">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/newicons-1.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[5px]">
                <input className="m-0 h-3.5 w-3.5 relative" type="checkbox" />
              </div>
              <div className="flex flex-row items-start justify-start p-[5px]">
                <input className="m-0 h-3.5 w-3.5 relative" type="checkbox" />
              </div>
              <div className="flex flex-row items-start justify-start p-[5px]">
                <input
                  className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="h-[158px] w-[186.5px] relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-[8.33px] rounded-br-none rounded-bl-[8.33px] w-[95px] h-[118px] object-cover"
                alt=""
                src="/demo-1@2x.png"
              />
              <img
                className="absolute bottom-[0px] left-[68.5px] rounded-4xs-3 w-[118px] h-[149px] object-cover"
                alt=""
                src="/demo-3@2x.png"
              />
              <img
                className="absolute top-[70px] left-[38.5px] w-[49.6px] h-[46px] object-contain"
                alt=""
                src="/arrow-3.svg"
              />
            </div>
          </div>
          <div className="absolute bottom-[72px] left-[calc(50%_-_135px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.05))] w-[270px] h-[30px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default ItemVertical1;
