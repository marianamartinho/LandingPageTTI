import { FunctionComponent } from "react";

export type Image4Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Image4: FunctionComponent<Image4Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[528px] rounded h-[220px] flex flex-row items-end justify-start p-boundvariablesdata12 box-border bg-[url('/public/image6@3x.png')] bg-cover bg-no-repeat bg-[top] z-[3] text-left text-base text-neutral-25-white font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="relative leading-[150%] font-semibold">Illustration</div>
    </div>
  );
};

export default Image4;
