import { FunctionComponent } from "react";
import BannerCalendar from "./BannerCalendar";

export type CalendarBannerType = {
  className?: string;
};

const CalendarBanner: FunctionComponent<CalendarBannerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start p-spacings-40 z-[1] text-left text-sm text-colors-primary-mediterranean-700 font-body-base-regular mq800:pt-spacings-40 mq800:pb-spacings-40 mq800:box-border ${className}`}
    >
      <BannerCalendar />
    </section>
  );
};

export default CalendarBanner;
