import {
  FunctionComponent,
  memo,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";

export type CardType = {
  className?: string;
  image?: string;
  multipleAIModels?: string;
  whetherYoureLookingForHigh?: string;
  multipleAIModels1?: string;
  whetherYoureLookingForHigh1?: string;

  /** Style props */
  advantageFlexDirection?: CSSProperties["flexDirection"];
  advantageAlignItems?: CSSProperties["alignItems"];
  advantagePadding?: CSSProperties["padding"];
  advantageMinWidth?: CSSProperties["minWidth"];
  advantageMinHeight?: CSSProperties["minHeight"];
  imageIconWidth?: CSSProperties["width"];
  imageIconPosition?: CSSProperties["position"];
  imageIconMaxHeight?: CSSProperties["maxHeight"];
  imageIconHeight?: CSSProperties["height"];
  imageIconFlex?: CSSProperties["flex"];
  imageIconMargin?: CSSProperties["margin"];
  imageIconTop?: CSSProperties["top"];
  imageIconRight?: CSSProperties["right"];
  imageIconLeft?: CSSProperties["left"];
  stackAlignSelf?: CSSProperties["alignSelf"];
  stackFlex?: CSSProperties["flex"];
  multipleAIModelsHeight?: CSSProperties["height"];
  multipleAIModelsDisplay?: CSSProperties["display"];
};

const Card: FunctionComponent<CardType> = memo(
  ({
    className = "",
    advantageFlexDirection,
    advantageAlignItems,
    advantagePadding,
    advantageMinWidth,
    advantageMinHeight,
    image,
    imageIconWidth,
    imageIconPosition,
    imageIconMaxHeight,
    imageIconHeight,
    imageIconFlex,
    imageIconMargin,
    imageIconTop,
    imageIconRight,
    imageIconLeft,
    stackAlignSelf,
    stackFlex,
    multipleAIModels,
    multipleAIModelsHeight,
    multipleAIModelsDisplay,
    whetherYoureLookingForHigh,
    multipleAIModels1,
    whetherYoureLookingForHigh1,
  }) => {
    const advantageStyle: CSSProperties = useMemo(() => {
      return {
        flexDirection: advantageFlexDirection,
        alignItems: advantageAlignItems,
        padding: advantagePadding,
        minWidth: advantageMinWidth,
        minHeight: advantageMinHeight,
      };
    }, [
      advantageFlexDirection,
      advantageAlignItems,
      advantagePadding,
      advantageMinWidth,
      advantageMinHeight,
    ]);

    const imageIconStyle: CSSProperties = useMemo(() => {
      return {
        width: imageIconWidth,
        position: imageIconPosition,
        maxHeight: imageIconMaxHeight,
        height: imageIconHeight,
        flex: imageIconFlex,
        margin: imageIconMargin,
        top: imageIconTop,
        right: imageIconRight,
        left: imageIconLeft,
      };
    }, [
      imageIconWidth,
      imageIconPosition,
      imageIconMaxHeight,
      imageIconHeight,
      imageIconFlex,
      imageIconMargin,
      imageIconTop,
      imageIconRight,
      imageIconLeft,
    ]);

    const stackStyle: CSSProperties = useMemo(() => {
      return {
        alignSelf: stackAlignSelf,
        flex: stackFlex,
      };
    }, [stackAlignSelf, stackFlex]);

    const multipleAIModelsStyle: CSSProperties = useMemo(() => {
      return {
        height: multipleAIModelsHeight,
        display: multipleAIModelsDisplay,
      };
    }, [multipleAIModelsHeight, multipleAIModelsDisplay]);

    const onAdvantageContainerClick = useCallback(() => {
      window.open("google.com");
    }, []);

    return (
      <div
        className={`self-stretch flex-1 flex flex-col items-center justify-start py-0 px-0 box-border gap-5 max-w-full cursor-pointer text-left text-xl text-neutral-25-white font-body-base-regular ${className}`}
        onClick={onAdvantageContainerClick}
        style={advantageStyle}
      >
        <img
          className="w-[NaNpx] relative rounded-lg max-h-full overflow-hidden object-cover max-w-full"
          loading="lazy"
          alt=""
          src={image}
          style={imageIconStyle}
        />
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[5px]"
          style={stackStyle}
        >
          <h2
            className="m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-base mq450:leading-[24px]"
            style={multipleAIModelsStyle}
          >
            {multipleAIModels1}
          </h2>
          <div className="self-stretch relative text-mini leading-[160%] text-colors-neutral-200">
            {whetherYoureLookingForHigh1}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
