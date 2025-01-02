import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Button2Type = {
  className?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  label?: string;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;

  /** Style props */
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
  labelAlignItems?: CSSProperties["alignItems"];
};

const Button2: FunctionComponent<Button2Type> = ({
  className = "",
  size = "LG",
  state = "Default",
  type = "Primary",
  rightIcon = false,
  leftIcon = false,
  label = "Explore collections",
  labelHeight,
  labelWidth,
  labelDisplay,
  labelAlignItems,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
      alignItems: labelAlignItems,
    };
  }, [labelHeight, labelWidth, labelDisplay, labelAlignItems]);

  return (
    <div
      className={`rounded-spacings-4 bg-colors-neutral-900 flex flex-row items-center justify-center py-0 px-boundvariablesdata7 gap-spacings-8 text-left text-mini text-neutral-25-white font-body-base-regular ${className}`}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      {leftIcon && (
        <img
          className="w-[18px] relative h-[18px]"
          alt=""
          src="/communicationheart2.svg"
        />
      )}
      <div
        className="h-10 w-[138px] relative leading-[40px] font-semibold flex items-center"
        style={labelStyle}
      >
        {label}
      </div>
      {rightIcon && (
        <img
          className="w-4 relative h-4"
          alt=""
          src="/communicationheart.svg"
        />
      )}
    </div>
  );
};

export default Button2;
