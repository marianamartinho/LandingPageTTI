import { FunctionComponent } from "react";
import Button1 from "./Button1";

export type BannerType = {
  className?: string;
};

const Banner: FunctionComponent<BannerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1600px] bg-colors-primary-off-white-shade-500 overflow-hidden shrink-0 flex flex-row items-center justify-center py-boundvariablesdata12 px-0 box-border relative gap-boundvariablesdata8 text-left text-mini text-gray-100 font-body-base-regular ${className}`}
    >
      <div className="relative leading-[160%] font-semibold z-[0]">
        Sign up for 10 free-forever daily downloads and never miss out!
      </div>
      <Button1
        size="MD"
        state="Default"
        type="Secondary"
        label="Sign up for free"
        iconLeft={false}
        iconRight={false}
        buttonLabel="Sign up for free"
      />
      <div className="h-20 w-[1601px] absolute !m-[0] top-[0px] right-[0px] z-[2]">
        <img
          className="absolute top-[0px] right-[0px] w-[280px] h-20 object-cover"
          loading="lazy"
          alt=""
          src="/frame-322687@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[280px] h-20 object-cover"
          loading="lazy"
          alt=""
          src="/frame-322686@2x.png"
        />
      </div>
    </div>
  );
};

export default Banner;
