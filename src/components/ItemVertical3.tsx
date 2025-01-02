import { FunctionComponent } from "react";
import Text1 from "./Text1";

export type ItemVertical3Type = {
  className?: string;
};

const ItemVertical3: FunctionComponent<ItemVertical3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 rounded-radius-default bg-colors-neutral-50 h-[293px] overflow-hidden flex flex-col items-start justify-start gap-spacings-10 ${className}`}
    >
      <Text1
        aITEXTTOIMAGE="PHOTO EDITOR"
        turnYourWordsIntoOhSoIncredib="Edit photos easily online, no software needed"
      />
      <div className="self-stretch relative h-[172px] overflow-hidden shrink-0 bg-[url('/public/image3@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[18px] left-[23.5px] w-[270px] h-[170.5px] hidden">
          <div className="absolute top-[0px] left-[calc(50%_-_135px)] rounded-t-md rounded-b-none bg-neutral-25-white border-neutral-100 border-[1px] border-solid box-border w-[270px] h-[163px] flex flex-row items-start justify-start p-[15px] gap-2.5">
            <div className="rounded-8xs-5 bg-colors-neutral-50 flex flex-col items-start justify-start p-[3.8px] gap-[5px]">
              <div className="rounded-10xs bg-colors-neutral-75 flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="w-[10.5px] relative h-[10.5px]"
                  alt=""
                  src="/editpencil.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="w-[10.5px] relative h-[10.5px]"
                  alt=""
                  src="/editfont.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="h-[10.5px] w-[10.5px] relative"
                  alt=""
                  src="/imageresources-1.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="h-[10.5px] w-[10.5px] relative"
                  alt=""
                  src="/systemupload-1.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="w-[10.5px] relative h-[10.5px]"
                  alt=""
                  src="/imagegrid.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start p-[3.8px]">
                <img
                  className="h-[10.5px] w-[10.5px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/media--devicesdesktopwallpaper-1.svg"
                />
              </div>
            </div>
            <img
              className="w-[165px] relative h-[134px]"
              alt=""
              src="/frame-1000002241.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[7.5px]">
              <div className="rounded-7499980xl bg-colors-neutral-75 flex flex-row items-start justify-start p-[7.5px]">
                <input
                  className="m-0 h-[10.5px] w-[10.5px] relative"
                  type="checkbox"
                />
              </div>
              <div className="rounded-7499980xl bg-colors-primary-piki-blue-500 flex flex-row items-start justify-start p-[7.5px]">
                <input
                  className="m-0 h-[10.5px] w-[10.5px] relative"
                  type="checkbox"
                />
              </div>
              <div className="rounded-7499980xl bg-colors-neutral-75 flex flex-row items-start justify-start p-[7.5px]">
                <input
                  className="m-0 h-[10.5px] w-[10.5px] relative"
                  type="checkbox"
                />
              </div>
              <div className="rounded-7499980xl bg-colors-neutral-75 flex flex-row items-start justify-start p-[7.5px]">
                <input
                  className="m-0 h-[10.5px] w-[10.5px] relative"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[8.5px] left-[calc(50%_-_135px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.05))] w-[270px] h-[30px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default ItemVertical3;
