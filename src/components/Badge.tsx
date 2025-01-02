import { FunctionComponent } from "react";

export type BadgeType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  property1 = "Blue",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-left text-4xs text-colors-primary-piki-blue-700 font-headlines-h4-34px-semibold ${className}`}
      data-property1={property1}
    >
      <div className="rounded-sm bg-colors-primary-piki-blue-100 flex flex-row items-center justify-center pt-0.5 px-1 pb-px">
        <a className="[text-decoration:none] relative uppercase font-bold text-[inherit]">
          NEW
        </a>
      </div>
      <div className="w-[31px] relative h-[3px] hidden" />
    </div>
  );
};

export default Badge;
