import { FunctionComponent } from "react";
import Button2 from "./Button2";
import ComponentCollection from "./ComponentCollection";

export type CollectionsType = {
  className?: string;
};

const Collections: FunctionComponent<CollectionsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] bg-neutral-25-white h-[772px] flex flex-col items-center justify-start py-boundvariablesdata5 px-10 box-border gap-boundvariablesdata4 text-center text-15xl text-dark-blue-freepik-company font-headlines-h4-34px-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start gap-spacings-401">
        <div className="flex-1 flex flex-col items-start justify-center gap-boundvariablesdata7">
          <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata9">
            <div className="w-[1320px] relative font-semibold hidden">
              Discover
            </div>
            <div className="w-[1111px] relative text-xl leading-[140%] font-semibold font-body-base-regular text-colors-neutral-900 text-left hidden">
              Collections
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-1 text-left text-mini text-colors-primary-mediterranean-700 font-body-base-regular">
              <div className="w-[1320px] relative leading-[160%] font-semibold inline-block">
                COLLECTIONS
              </div>
              <h1 className="m-0 w-[1152px] relative text-37xl tracking-[-0.01em] leading-[100%] font-semibold font-display-medium text-colors-neutral-900 inline-block">
                Extraordinary, in a nutshell
              </h1>
            </div>
            <div className="w-[1320px] relative text-lg leading-[26px] text-gray-hoki hidden">
              Find out what’s trending right now in the world of graphic design
            </div>
          </div>
          <div className="w-[638px] relative text-mid leading-[160%] font-body-base-regular text-colors-neutral-800 text-left inline-block">{`Get the inspiration you need with our curated collections and boost your creativity. `}</div>
        </div>
        <Button2
          size="MD"
          state="Default"
          type="Secondary"
          rightIcon={false}
          leftIcon={false}
          label="Explore collections"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-boundvariablesdata6 text-left text-mid text-colors-neutral-900 font-body-base-regular">
        <ComponentCollection
          thumbnailgrid="/thumbnailgrid@2x.png"
          icon={false}
        />
        <ComponentCollection thumbnailgrid="/thumbnailgrid-1@2x.png" icon />
        <ComponentCollection
          thumbnailgrid="/thumbnailgrid-2@2x.png"
          icon={false}
        />
        <ComponentCollection thumbnailgrid="/thumbnailgrid-3@2x.png" icon />
      </div>
    </div>
  );
};

export default Collections;
