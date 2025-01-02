import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Button1Type = {
  className?: string;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  buttonLabel?: string;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;

  /** Style props */
  buttonHeight?: CSSProperties["height"];
};

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  size = "LG",
  state = "Default",
  type = "Primary",
  label = "Sign up for free",
  iconLeft = false,
  iconRight = false,
  buttonHeight,
  buttonLabel,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonHeight,
    };
  }, [buttonHeight]);

  return (
    <button
      className={`cursor-pointer [border:none] py-0 px-boundvariablesdata7 bg-colors-neutral-900 rounded overflow-hidden flex flex-row items-center justify-center gap-2 z-[1] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:border-gray-200 [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:border-[1px] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:border-solid [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:bg-[transparent] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:[overflow:unset] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:z-[unset] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:box-border data-[size='SM']:data-[state='Default']:data-[type='Primary']:[border:unset] data-[size='SM']:data-[state='Default']:data-[type='Primary']:bg-colors-primary-piki-blue-500 data-[size='SM']:data-[state='Default']:data-[type='Primary']:[overflow:unset] data-[size='SM']:data-[state='Default']:data-[type='Primary']:z-[unset] data-[size='SM']:data-[state='Default']:data-[type='Primary']:box-border [&_.communicationheart-icon4]:data-[size='SM']:data-[state='Default']:data-[type='Primary']:[display:unset] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:leading-[160%] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:h-[21px] [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:flex [&_negative']]:data-[size='SM']:data-[state='Default']:data-[type='Tertiary:items-center [&_.button-label]:data-[size='SM']:data-[state='Default']:data-[type='Primary']:leading-[160%] ${className}`}
      data-size={size}
      data-state={state}
      data-type={type}
      style={buttonStyle}
    >
      {iconLeft && (
        <img
          className="communicationheart-icon4 w-4 relative h-4"
          alt=""
          src="/communicationheart.svg"
        />
      )}
      <div className="button-label relative text-mini leading-[40px] font-semibold font-body-base-regular text-neutral-25-white text-left">
        {buttonLabel}
      </div>
      {iconRight && (
        <img
          className="w-4 relative h-4"
          alt=""
          src="/communicationheart.svg"
        />
      )}
    </button>
  );
};

export default Button1;
