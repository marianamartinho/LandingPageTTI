import { FunctionComponent } from "react";

export type Image8Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image8: FunctionComponent<Image8Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`self-stretch w-[528px] rounded flex flex-row items-end justify-start p-boundvariablesdata12 box-border bg-[url('/public/image12@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="relative leading-[150%] font-semibold">People</div>
    </div>
  );
};

export default Image8;
