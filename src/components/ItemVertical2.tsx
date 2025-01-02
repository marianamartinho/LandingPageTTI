import { FunctionComponent } from "react";
import Text1 from "./Text1";

export type ItemVertical2Type = {
  className?: string;
};

const ItemVertical2: FunctionComponent<ItemVertical2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 rounded-radius-default bg-colors-neutral-50 h-[293px] overflow-hidden flex flex-col items-start justify-start gap-spacings-10 text-center text-4xs text-black font-body-base-regular ${className}`}
    >
      <Text1
        aITEXTTOIMAGE="MOCKUP GENERATOR"
        turnYourWordsIntoOhSoIncredib="Bring designs to life, effortlessly"
      />
      <div className="self-stretch relative h-[172px] overflow-hidden shrink-0 bg-[url('/public/image2@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[0px] left-[-0.5px] rounded-lg w-[317.5px] h-[180px] overflow-hidden">
          <div className="absolute top-[18px] left-[23.5px] w-[270px] h-[163px] hidden">
            <div className="absolute top-[0px] left-[calc(50%_-_135px)] rounded-t-md rounded-b-none bg-neutral-25-white border-neutral-100 border-[1px] border-solid box-border w-[270px] h-[163px]">
              <div className="absolute top-[14px] left-[calc(50%_-_123px)] flex flex-row items-center justify-start gap-[11px]">
                <div className="rounded bg-colors-neutral-50 flex flex-row items-start justify-start p-2.5">
                  <img
                    className="w-[98px] relative h-[113px] object-cover"
                    alt=""
                    src="/men-t-shirt-mockup-floating--1@2x.png"
                  />
                </div>
                <div className="rounded-md flex flex-col items-start justify-start gap-1.5">
                  <div className="w-[31px] h-3.5 relative leading-[160%] font-semibold inline-block">
                    T-Shirt
                  </div>
                  <img
                    className="w-[116px] relative rounded-md h-[72px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1000002233.svg"
                  />
                  <div className="w-[116px] flex flex-row items-end justify-start gap-2.5">
                    <img
                      className="w-3 relative h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/cuentagotas-1.svg"
                    />
                    <div className="w-[94px] relative rounded-md [background:linear-gradient(90.13deg,_#ff0000,_#faff00_16.67%,_#14fb00_33.33%,_#00f0ff_50%,_#000aff_66.67%,_#fa00ff_83.33%,_#ff0000)] h-[9px] overflow-hidden shrink-0" />
                  </div>
                  <div className="w-[109px] flex flex-row items-center justify-start gap-[5px] text-5xs text-colors-neutral-800">
                    <div className="rounded bg-colors-neutral-75 flex flex-row items-center justify-center p-[3px]">
                      <div className="h-[13px] w-[33px] relative leading-[160%] font-semibold inline-block">
                        8C629D
                      </div>
                    </div>
                    <img
                      className="w-[46px] relative h-3"
                      alt=""
                      src="/frame-1000002237.svg"
                    />
                    <div className="h-[13px] w-[22px] relative leading-[160%] font-semibold inline-block">
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[1px] left-[calc(50%_-_135px)] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.05))] w-[270px] h-[30px] overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemVertical2;
