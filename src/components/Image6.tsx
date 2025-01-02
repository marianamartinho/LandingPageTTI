import { FunctionComponent } from "react";

export type Image6Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image6: FunctionComponent<Image6Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`self-stretch flex-1 rounded flex flex-row items-end justify-start p-boundvariablesdata12 bg-[url('/public/image9@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="flex flex-row items-center justify-start gap-boundvariablesdata9">
        <div className="relative leading-[150%] font-semibold">
          Abstract shapes
        </div>
        <img className="h-4 w-4 relative" loading="lazy" alt="" />
      </div>
    </div>
  );
};

export default Image6;
