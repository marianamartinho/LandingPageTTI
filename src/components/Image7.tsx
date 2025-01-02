import { FunctionComponent } from "react";

export type Image7Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image7: FunctionComponent<Image7Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`flex-1 rounded h-[220px] flex flex-row items-end justify-start p-boundvariablesdata12 box-border bg-[url('/public/image10@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="relative leading-[150%] font-semibold">Japanese art</div>
    </div>
  );
};

export default Image7;
