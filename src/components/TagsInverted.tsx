import { FunctionComponent } from "react";
import Cross1 from "./Cross1";

export type TagsInvertedType = {
  className?: string;
  text?: string;
  close1?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
};

const TagsInverted: FunctionComponent<TagsInvertedType> = ({
  className = "",
  size = "LG",
  state = "Default",
  text = "Background",
  close1 = false,
  iconLeft = true,
}) => {
  return (
    <div
      className={`rounded-boundvariablesdata11 bg-gray-300 border-colors-neutral-300 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-0 px-boundvariablesdata7 gap-boundvariablesdata13 text-left text-smi text-neutral-25-white font-body-base-regular ${className}`}
      data-size={size}
      data-state={state}
    >
      {iconLeft && (
        <img
          className="h-3.5 w-3.5 relative"
          alt=""
          src="/systemsearch-1.svg"
        />
      )}
      <div className="relative leading-[32px]">{text}</div>
      {close1 && <Cross1 property1="Default" />}
    </div>
  );
};

export default TagsInverted;
