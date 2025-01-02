import { FunctionComponent } from "react";

export type Image2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image2: FunctionComponent<Image2Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`self-stretch flex-1 rounded flex flex-row items-end justify-start p-boundvariablesdata12 bg-[url('/public/image4@3x.png')] bg-cover bg-no-repeat bg-[top] z-[0] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="relative leading-[150%] font-semibold">Collage art</div>
    </div>
  );
};

export default Image2;
