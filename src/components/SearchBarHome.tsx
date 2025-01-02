import { FunctionComponent } from "react";
import Button1 from "./Button1";

export type SearchBarHomeType = {
  className?: string;

  /** Variant props */
  state?: string;
};

const SearchBarHome: FunctionComponent<SearchBarHomeType> = ({
  className = "",
  state = "Default",
}) => {
  return (
    <div
      className={`w-[956px] rounded bg-neutral-25-white h-14 flex flex-row items-center justify-start gap-6 text-left text-sm text-colors-neutral-900 font-body-base-regular ${className}`}
      data-state={state}
    >
      <div className="self-stretch flex-1 rounded border-colors-neutral-300 border-[1px] border-solid flex flex-row items-center justify-start gap-5">
        <div className="h-[55px] w-[200px] border-colors-neutral-300 border-r-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 px-boundvariablesdata18">
          <div className="w-[69px] relative h-12">
            <img
              className="absolute top-[16px] left-[0px] w-4 h-4"
              alt=""
              src="/imageresources.svg"
            />
            <div className="absolute top-[0px] left-[24px] leading-[48px]">
              Assets
            </div>
          </div>
          <img className="w-4 relative h-4" alt="" src="/frame-322590.svg" />
        </div>
        <div className="w-[187px] rounded-lg bg-colors-neutral-50 h-10 hidden" />
        <div className="w-[604px] relative leading-[36px] text-colors-neutral-500 flex items-center shrink-0">
          Search all assets
        </div>
        <button className="cursor-pointer [border:none] py-0 px-2 bg-[transparent] flex-1 flex flex-row items-center justify-end gap-[15px]">
          <div className="w-8 rounded border-colors-neutral-300 border-[1px] border-solid box-border h-8 overflow-hidden shrink-0 hidden" />
          <div className="w-10 rounded h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
            <img
              className="w-4 relative h-4"
              alt=""
              src="/shapes--symbolscross.svg"
            />
          </div>
          <div className="hidden flex-row items-center justify-end gap-2.5">
            <div className="w-10 rounded border-colors-neutral-300 border-[1px] border-solid box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <img
                className="h-[18px] w-[18px] relative object-cover"
                alt=""
                src="/iconsearch-by-image-1@2x.png"
              />
            </div>
            <div className="w-10 rounded border-colors-neutral-900 border-[1px] border-solid box-border h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
              <img
                className="w-[18px] relative h-[18px] object-cover"
                alt=""
                src="/16pxsmsystemsettings@2x.png"
              />
            </div>
          </div>
          <Button1
            size="SM"
            state="Default"
            type="Primary"
            label="Search"
            iconLeft
            iconRight={false}
            buttonHeight="40px"
            buttonLabel="Search"
          />
        </button>
        <div className="w-[183px] border-colors-neutral-300 border-l-[1px] border-solid box-border h-12 overflow-hidden shrink-0 hidden" />
      </div>
      <div className="self-stretch rounded bg-colors-neutral-50 border-colors-neutral-300 border-[1px] border-solid overflow-hidden hidden flex-row items-center justify-center py-0 px-boundvariablesdata16 gap-2">
        <img className="w-4 relative h-4" alt="" src="/systemfilter.svg" />
        <div className="relative leading-[40px] hidden">Photos</div>
        <div className="w-4 h-4 hidden flex-row items-start justify-start">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/shapes--symbolscrosssmall.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarHome;
