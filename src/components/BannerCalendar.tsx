import { FunctionComponent } from "react";
import Button1 from "./Button1";

export type BannerCalendarType = {
  className?: string;
};

const BannerCalendar: FunctionComponent<BannerCalendarType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-colors-primary-off-white-shade-500 h-[538px] overflow-hidden shrink-0 flex flex-row items-end justify-start gap-boundvariablesdata6 text-left text-sm text-colors-primary-mediterranean-700 font-body-base-regular ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-center py-boundvariablesdata10 pl-[60px] pr-boundvariablesdata8 gap-boundvariablesdata8">
        <div className="self-stretch flex flex-col items-start justify-center gap-boundvariablesdata7">
          <div className="self-stretch flex flex-col items-start justify-start gap-spacings-16">
            <img
              className="w-[127px] relative h-[22px] overflow-hidden shrink-0 hidden"
              alt=""
              src="/wepik-logo-hrz-onlight-01-1.svg"
            />
            <div className="w-[1320px] relative leading-[160%] font-semibold inline-block">
              FREEPIK CALENDAR
            </div>
            <h1 className="m-0 w-[685px] h-28 relative text-37xl tracking-[-0.01em] leading-[100%] font-semibold font-display-medium text-colors-neutral-900 inline-block">
              All celebrations and events are at your fingertips
            </h1>
          </div>
          <div className="w-[600px] relative text-base leading-[160%] text-neutral-100 hidden">
            No editor? No problem! Customize and download free templates to
            easily create any design right here with our online editing tool.
          </div>
        </div>
        <Button1
          size="MD"
          state="Default"
          type="Secondary"
          label="Browse calendar"
          iconLeft={false}
          iconRight={false}
          buttonHeight="unset"
          buttonLabel="Browse calendar"
        />
      </div>
      <img
        className="self-stretch w-[705px] relative max-h-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/image-calendar.svg"
      />
    </div>
  );
};

export default BannerCalendar;
