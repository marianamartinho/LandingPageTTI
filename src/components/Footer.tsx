import { FunctionComponent } from "react";
import FooterContent from "./FooterContent";
import LastBand from "./LastBand";
import CompanyProjects from "./CompanyProjects";

export type FooterType = {
  className?: string;

  /** Variant props */
  device?: string;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  device = "Desktop 1096",
}) => {
  return (
    <div
      className={`w-[1598px] bg-colors-neutral-50 h-[431px] flex flex-col items-start justify-start py-0 px-spacings-space-900 box-border text-left text-smi text-colors-neutral-900 font-body-base-regular ${className}`}
      data-device={device}
    >
      <FooterContent />
      <LastBand />
      <CompanyProjects />
    </div>
  );
};

export default Footer;
