import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LinkButtonType = {
  className?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  label?: string;
  showLinkButton?: boolean;
  arrowprevSmall?: string;
  showLink?: boolean;
  arrowfold?: string;

  /** Variant props */
  size?: string;
  state?: string;
  type?: "White" | "Dark";

  /** Style props */
  contentWidth?: CSSProperties["width"];
  contentHeight?: CSSProperties["height"];
  linkHeight?: CSSProperties["height"];
  linkWidth?: CSSProperties["width"];
};

const LinkButton: FunctionComponent<LinkButtonType> = ({
  className = "",
  size = "LG",
  state = "Default",
  type = "Primary",
  rightIcon = false,
  leftIcon = false,
  label = "Tools",
  showLinkButton,
  arrowprevSmall,
  contentWidth,
  contentHeight,
  showLink,
  linkHeight,
  linkWidth,
  arrowfold,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      width: contentWidth,
      height: contentHeight,
    };
  }, [contentWidth, contentHeight]);

  const linkStyle: CSSProperties = useMemo(() => {
    return {
      height: linkHeight,
      width: linkWidth,
    };
  }, [linkHeight, linkWidth]);

  return (
    showLinkButton && (
      <div
        className={`h-8 flex flex-row items-center justify-center gap-boundvariablesdata9 text-center text-smi text-neutral-25-white font-body-base-regular data-[size='SM']:data-[state='Default']:data-[type='Dark']:gap-boundvariablesdata9 [&_.arrowprev-small-icon]:data-[size='SM']:data-[state='Default']:data-[type='Dark']:hidden [&_.link]:data-[size='SM']:data-[state='Default']:data-[type='Dark']:text-colors-secondary-premium-gold-500 [&_.arrowfold-icon]:data-[size='SM']:data-[state='Default']:data-[type='Dark']:hidden ${className}`}
        data-size={size}
        data-state={state}
        data-type={type}
      >
        {leftIcon && (
          <img
            className="arrowprev-small-icon w-3.5 relative h-3.5"
            alt=""
            src={arrowprevSmall}
          />
        )}
        <div
          className="flex flex-row items-center justify-center"
          style={contentStyle}
        >
          {showLink && (
            <div
              className="link relative leading-[160%] font-semibold"
              style={linkStyle}
            >
              {label}
            </div>
          )}
        </div>
        {rightIcon && (
          <img
            className="arrowfold-icon w-3.5 relative h-3.5 overflow-hidden shrink-0"
            alt=""
            src={arrowfold}
          />
        )}
      </div>
    )
  );
};

export default LinkButton;
