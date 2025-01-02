import { FunctionComponent } from "react";

export type InfoType = {
  className?: string;
  text?: string;
  icon?: boolean;
  resources?: string;
  systemmenudotsVertical?: string;

  /** Variant props */
  state?: string;
};

const Info: FunctionComponent<InfoType> = ({
  className = "",
  state = "Hover",
  text = "Collection’s name",
  icon = false,
  resources,
  systemmenudotsVertical,
}) => {
  return (
    <div
      className={`self-stretch h-14 flex flex-row items-center justify-start gap-boundvariablesdata7 text-left text-mid text-colors-neutral-900 font-body-base-regular ${className}`}
      data-state={state}
    >
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-boundvariablesdata9">
        <div className="flex flex-row items-center justify-start gap-spacings-4">
          {icon && (
            <img
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/systemcrownfilled.svg"
            />
          )}
          <div className="relative leading-[160%] font-semibold">{text}</div>
        </div>
        <div className="relative text-mini leading-[160%] text-colors-neutral-800">
          {resources}
        </div>
      </div>
      <div className="w-10 rounded h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
        <img className="w-4 relative h-4" alt="" src={systemmenudotsVertical} />
      </div>
    </div>
  );
};

export default Info;
