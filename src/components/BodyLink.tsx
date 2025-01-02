import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BodyLinkType = {
  className?: string;
  content?: string;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;

  /** Style props */
  bodyLinkAlignSelf?: CSSProperties["alignSelf"];
  bodyLinkJustifyContent?: CSSProperties["justifyContent"];
  linkFlex?: CSSProperties["flex"];
  linkTextAlign?: CSSProperties["textAlign"];
};

const BodyLink: FunctionComponent<BodyLinkType> = ({
  className = "",
  size = "MD",
  state = "Default",
  type = "Primary",
  content = "New images",
  bodyLinkAlignSelf,
  bodyLinkJustifyContent,
  linkFlex,
  linkTextAlign,
}) => {
  const bodyLinkStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: bodyLinkAlignSelf,
      justifyContent: bodyLinkJustifyContent,
    };
  }, [bodyLinkAlignSelf, bodyLinkJustifyContent]);

  const link1Style: CSSProperties = useMemo(() => {
    return {
      flex: linkFlex,
      textAlign: linkTextAlign,
    };
  }, [linkFlex, linkTextAlign]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start text-left text-smi text-colors-neutral-800 font-body-base-regular ${className}`}
      data-size={size}
      data-state={state}
      data-type={type}
      style={bodyLinkStyle}
    >
      <div className="flex-1 relative leading-[160%]" style={link1Style}>
        {content}
      </div>
    </div>
  );
};

export default BodyLink;
