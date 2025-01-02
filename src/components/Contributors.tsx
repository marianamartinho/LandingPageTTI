import { FunctionComponent } from "react";
import Button2 from "./Button2";
import Images from "./Images";

export type ContributorsType = {
  className?: string;
};

const Contributors: FunctionComponent<ContributorsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1596px] bg-neutral-25-white h-[868px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-boundvariablesdata5 px-0 box-border gap-boundvariablesdata4 text-center text-mini text-colors-secondary-aubergine-600 font-body-base-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata8">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-spacings-120 gap-boundvariablesdata7">
          <div className="self-stretch flex flex-col items-center justify-center gap-boundvariablesdata9">
            <div className="w-[1320px] relative leading-[160%] font-semibold inline-block">
              CONTRIBUTORS
            </div>
            <h1 className="m-0 w-[736px] relative text-37xl tracking-[-0.01em] leading-[100%] font-semibold font-display-medium text-colors-neutral-900 inline-block">
              Cash your creations
            </h1>
          </div>
          <div className="w-[530px] relative text-mid leading-[160%] text-colors-neutral-800 inline-block">{`Behind every stock image there’s a creative mind. Join Freepik’s contributor’s community and start selling your content. `}</div>
        </div>
        <Button2
          size="MD"
          state="Default"
          type="Secondary"
          rightIcon={false}
          leftIcon={false}
          label="Sell content"
          labelHeight="unset"
          labelWidth="unset"
          labelDisplay="unset"
          labelAlignItems="unset"
        />
      </div>
      <Images />
    </div>
  );
};

export default Contributors;
