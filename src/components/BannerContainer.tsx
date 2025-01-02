import { FunctionComponent } from "react";
import Banner from "./Banner";

export type BannerContainerType = {
  className?: string;
};

const BannerContainer: FunctionComponent<BannerContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-left text-mini text-gray-100 font-body-base-regular ${className}`}
    >
      <Banner />
    </section>
  );
};

export default BannerContainer;
