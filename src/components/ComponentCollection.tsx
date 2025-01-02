import { FunctionComponent } from "react";
import Info from "./Info";

export type ComponentCollectionType = {
  className?: string;
  thumbnailgrid?: string;
  icon?: boolean;
};

const ComponentCollection: FunctionComponent<ComponentCollectionType> = ({
  className = "",
  thumbnailgrid,
  icon,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-boundvariablesdata7 text-left text-mid text-colors-neutral-900 font-body-base-regular ${className}`}
    >
      <img
        className="self-stretch h-[328px] rounded max-w-full overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src={thumbnailgrid}
      />
      <Info
        state="Default"
        text="Collection’s name"
        icon={icon}
        resources="60 resources"
        systemmenudotsVertical="/systemmenudotsvertical.svg"
      />
    </div>
  );
};

export default ComponentCollection;
