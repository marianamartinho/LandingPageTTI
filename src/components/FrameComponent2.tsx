import { FunctionComponent } from "react";
import Contributors from "./Contributors";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-0.5 text-center text-mini text-colors-secondary-aubergine-600 font-body-base-regular ${className}`}
    >
      <Contributors />
    </section>
  );
};

export default FrameComponent2;
