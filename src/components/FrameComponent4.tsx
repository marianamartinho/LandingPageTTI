import { FunctionComponent, useCallback, useEffect } from "react";
import Card from "./Card";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const onAdvantagesContainerClick = useCallback(() => {
    window.open("www.google");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-17xl text-neutral-25-white font-display-medium ${className}`}
    >
      <div className="h-[513.4px] w-[730.6px] absolute !m-[0] top-[23.18px] right-[60.3px] [filter:blur(232px)] rounded-[50%] bg-neutral-25-white [transform:_rotate(-12.6deg)] [transform-origin:0_0] hidden opacity-[0.33] z-[2]" />
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-20 px-5 box-border gap-[50px] max-w-full z-[3] mq800:gap-[25px] mq800:pt-[52px] mq800:pb-[52px] mq800:box-border">
        <div className="w-[1060px] flex flex-col items-start justify-center max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[125%] font-semibold font-[inherit] mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
            The only AI image generator you need
          </h1>
        </div>
        <div
          className="w-[1065px] flex flex-row items-start justify-center flex-wrap content-start py-0 pl-0 pr-0.5 box-border gap-x-[49.9px] gap-y-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full cursor-pointer text-left text-xl font-body-base-regular mq800:gap-[25px]"
          onClick={onAdvantagesContainerClick}
          data-animate-on-scroll
        >
          <Card
            image="/image@2x.png"
            multipleAIModels="Multiple AI Models"
            whetherYoureLookingForHigh="Whether you're looking for high quality or faster generation, Flux variants or Freepik Mystic will cover your needs"
            multipleAIModels1="Multiple AI Models"
            whetherYoureLookingForHigh1="Whether you're looking for high quality or faster generation, Flux variants or Freepik Mystic will cover your needs"
          />
          <div className="self-stretch flex-1 flex flex-row items-end justify-start relative gap-5 min-w-[5px] min-h-[379px] max-w-full">
            <img
              className="h-[NaNpx] flex-1 absolute !m-[0] w-[calc(100%_+_0.7px)] top-[0px] right-[-0.7px] left-[0px] rounded-lg max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/imagegeneratorfreepik6@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <h2 className="m-0 self-stretch h-[60px] relative text-inherit leading-[150%] font-semibold font-[inherit] inline-block mq450:text-base mq450:leading-[24px]">
                Pick style, color filters and perspective
              </h2>
              <div className="self-stretch relative text-mini leading-[160%] text-colors-neutral-200">
                No need for long or complex prompts, just use the presets!
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start py-0 px-0 box-border gap-5 max-w-full">
            <img
              className="w-[NaNpx] relative rounded-lg max-h-full overflow-hidden object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-base mq450:leading-[24px]">
                High-end textures and realism
              </h2>
              <div className="self-stretch h-12 relative text-mini leading-[160%] text-colors-neutral-200 inline-block">
                Skin tones, textures, details—everything is there
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
