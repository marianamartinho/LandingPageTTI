import { FunctionComponent } from "react";
import Text1 from "./Text1";
import Image1 from "./Image1";

export type ItemVerticalType = {
  className?: string;
};

const ItemVertical: FunctionComponent<ItemVerticalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 rounded-radius-default bg-colors-neutral-50 h-[293px] overflow-hidden flex flex-col items-start justify-start gap-spacings-10 text-left text-xs text-colors-primary-piki-blue-500 font-body-base-regular ${className}`}
    >
      <Text1
        aITEXTTOIMAGE="AI TEXT-TO-IMAGE"
        turnYourWordsIntoOhSoIncredib="Turn your words into incredible images with AI"
      />
      <Image1 property1={1} />
    </div>
  );
};

export default ItemVertical;
