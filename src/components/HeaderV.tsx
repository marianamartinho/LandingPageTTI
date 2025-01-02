import { FunctionComponent } from "react";

export type HeaderVType = {
  className?: string;
};

const HeaderV: FunctionComponent<HeaderVType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start py-20 px-[140px] box-border max-w-full text-left text-17xl text-neutral-25-white font-display-medium mq800:gap-5 mq800:py-[52px] mq800:px-[70px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-center gap-[50px] max-w-full mq800:gap-[25px] mq1350:flex-wrap">
        <div className="w-[504px] flex flex-col items-start justify-start min-w-[504px] max-w-full mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-center">
            <div className="self-stretch h-[344px] flex flex-col items-center justify-start relative">
              <img
                className="w-full h-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/aiimagegeneratorwebp@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[394px] max-w-full mq800:gap-5 mq800:min-w-full">
          <h1 className="m-0 self-stretch h-[90px] relative text-inherit leading-[125%] font-semibold font-[inherit] inline-block mq800:text-10xl mq800:leading-[36px] mq450:text-3xl mq450:leading-[27px]">
            Introducing Freepik’s AI image generator
          </h1>
          <div className="self-stretch h-[130px] relative leading-[160%] inline-block text-base text-colors-neutral-200 font-body-base-regular">
            <p className="m-0">
              <span className="text-base font-body-base-regular text-colors-neutral-200">{`If you feel like creating your own image instead of using one of our 140+ million stock images, `}</span>
              <span className="text-mini font-semibold font-body-base-regular text-plum">
                our text-to-image AI makes it easy
              </span>
              <span>.</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Thanks to artificial intelligence, you now have the power to turn
              your words and ideas into stunning visuals!
            </p>
          </div>
          <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-[23px] bg-[transparent] rounded-spacings-space-080 flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
            <div className="relative text-mini leading-[160%] font-semibold font-body-base-regular text-neutral-25-white text-left">
              Generate AI images
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderV;
