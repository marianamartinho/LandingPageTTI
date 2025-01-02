import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Cross1Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  crossDisplay?: CSSProperties["display"];
};

const Cross1: FunctionComponent<Cross1Type> = ({
  className = "",
  property1 = "Hover",
  crossDisplay,
}) => {
  const crossStyle: CSSProperties = useMemo(() => {
    return {
      display: crossDisplay,
    };
  }, [crossDisplay]);

  return (
    <div
      className={`hidden flex-row items-start justify-start ${className}`}
      data-property1={property1}
      style={crossStyle}
    >
      <img
        className="h-3.5 w-3.5 relative"
        alt=""
        src="/shapes--symbolscrosssmall-1.svg"
      />
    </div>
  );
};

export default Cross1;
