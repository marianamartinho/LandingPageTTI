import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-xs text-neutral-25-white font-body-base-regular ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-start flex-wrap content-center py-14 px-10 box-border gap-[100px] max-w-[1360px] mq800:gap-[50px] mq800:pt-[73px] mq800:pb-[73px] mq800:box-border mq450:gap-[25px] mq1350:max-w-full">
        <div className="w-[550px] flex flex-col items-start justify-start gap-spacings-space-200 min-w-[335px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-spacing-1-5">
            <div className="flex flex-row items-center justify-center py-0 px-0">
              <div className="relative leading-[160%]">Home</div>
            </div>
            <img
              className="h-3.5 w-3.5 relative object-cover"
              loading="lazy"
              alt=""
              src="/arrownextsmall@2x.png"
            />
            <div className="border-neutral-25-white border-b-[1px] border-solid flex flex-row items-center justify-center py-0 px-0">
              <div className="relative leading-[160%]">AI</div>
            </div>
            <img
              className="h-3.5 w-3.5 relative object-cover"
              loading="lazy"
              alt=""
              src="/arrownextsmall@2x.png"
            />
            <div className="flex flex-row items-center justify-center py-0 px-0 text-center">
              <div className="relative leading-[160%] font-semibold whitespace-nowrap">
                AI image generator
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-boundvariablesdata20 text-37xl font-display-medium">
            <h1 className="m-0 self-stretch relative text-inherit leading-[125%] font-semibold font-[inherit] mq800:text-26xl mq800:leading-[56px] mq450:text-15xl mq450:leading-[42px]">
              AI image generator
            </h1>
            <h3 className="m-0 self-stretch h-[81px] relative text-mid leading-[160%] font-normal font-body-base-regular inline-block">
              An AI text-to-image that gives you endless results in real time.
              With a variety of modes to choose, Flux is now available on
              Freepik. Try it now!
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-5 max-w-full text-sm text-colors-neutral-200">
            <div className="self-stretch rounded-lg bg-colors-neutral-875 overflow-hidden flex flex-row items-center justify-start py-0 pl-4 pr-2 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 mq800:flex-wrap">
                <div className="relative leading-[160%]">
                  Describe what you want to see
                </div>
                <div className="flex flex-row items-center justify-start gap-4 text-colors-neutral-50 mq450:flex-wrap">
                  <div className="overflow-hidden flex flex-row items-center justify-start py-1 px-0 gap-2">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative leading-[48px]">No style</div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowfold3.svg"
                    />
                  </div>
                  <button className="cursor-pointer [border:none] py-[9.5px] pl-[19px] pr-[18px] bg-colors-primary-piki-blue-500 rounded-spacings-space-080 flex flex-row items-center justify-center gap-spacings-space-120 hover:bg-royalblue">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/newaiwand.svg"
                    />
                    <div className="relative text-smi leading-[160%] font-semibold font-body-base-regular text-neutral-25-white text-left">
                      Generate
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch relative leading-[22px] text-neutral-25-white font-headlines-h4-34px-semibold">
              <span>{`No inspiration? Try this: `}</span>
              <span className="font-semibold">
                Baby hedgehog wearing a flower crown in a garden
              </span>
            </div>
          </div>
        </div>
        <div className="h-[458px] w-[630px] rounded-lg bg-gray-700 overflow-hidden shrink-0 max-w-full" />
      </div>
    </section>
  );
};

export default FrameComponent3;
