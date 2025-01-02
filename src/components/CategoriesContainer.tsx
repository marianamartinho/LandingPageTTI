import { FunctionComponent } from "react";
import Trending from "./Trending";
import Collections from "./Collections";
import Benefits from "./Benefits";

export type CategoriesContainerType = {
  className?: string;
};

const CategoriesContainer: FunctionComponent<CategoriesContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-center text-15xl text-dark-blue-freepik-company font-headlines-h4-34px-semibold mq1125:pl-10 mq1125:pr-10 mq1125:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch bg-neutral-25-white flex flex-row items-end justify-start pt-20 px-10 pb-0 box-border max-w-full mq800:gap-spacings-space-250">
            <div className="flex-1 flex flex-col items-center justify-center gap-boundvariablesdata7 max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9 max-w-full">
                <div className="relative font-medium hidden max-w-full mq450:text-xl mq800:text-8xl">
                  Discover
                </div>
                <div className="relative text-xl leading-[140%] font-semibold font-body-base-regular text-colors-neutral-900 text-left hidden max-w-full mq450:text-base mq450:leading-[22px]">
                  Collections
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-1 max-w-full text-mini text-colors-pre-heading-icons-minty-ligh font-body-base-regular">
                  <div className="w-[1321px] relative leading-[160%] font-semibold inline-block max-w-full">
                    READY-TO-GO CONTENT
                  </div>
                  <h1 className="m-0 self-stretch relative text-37xl tracking-[-0.01em] leading-[100%] font-semibold font-display-medium text-colors-neutral-900 mq450:text-15xl mq450:leading-[34px] mq800:text-26xl mq800:leading-[45px]">
                    Instant creativity hub
                  </h1>
                </div>
                <div className="relative text-lg leading-[26px] font-medium text-gray-hoki hidden max-w-full">
                  Find out what’s trending right now in the world of graphic
                  design
                </div>
              </div>
              <div className="w-[638px] relative text-mid leading-[160%] font-body-base-regular text-colors-neutral-800 inline-block max-w-full">
                From HD videos to amazing AI-generated images, find the content
                you want in the format you need
              </div>
            </div>
          </div>
          <div className="self-stretch h-[340px] rounded bg-neutral-25-white flex flex-row items-start justify-start py-boundvariablesdata14 px-boundvariablesdata15 box-border gap-boundvariablesdata6 text-left text-xl text-neutral-25-white font-body-base-regular mq450:grid-cols-[minmax(151px,_1fr)] mq800:grid-cols-[repeat(2,_minmax(151px,_262px))] mq1300:flex-wrap mq1300:justify-center mq1300:grid-cols-[repeat(3,_minmax(151px,_262px))]">
            <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-[62px] bg-[url('/public/category-item@3x.png')] bg-cover bg-no-repeat bg-[top] mq1300:flex-1">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                Vectors
              </h3>
            </div>
            <div className="flex-[0.897] rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-[66px] bg-[url('/public/category-item1@3x.png')] bg-cover bg-no-repeat bg-[top] mq1300:flex-1">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                Photos
              </h3>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-[66px] bg-[url('/public/category-item2@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                Videos
              </h3>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-20 bg-[url('/public/category-item3@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                PSD
              </h3>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-[50px] bg-[url('/public/category-item4@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                Templates
              </h3>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-center justify-center py-[90px] px-[74px] bg-[url('/public/category-item5@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] [text-shadow:0px_2px_20px_rgba(0,_0,_0,_0.8)] mq450:text-base mq450:leading-[24px]">
                Icons
              </h3>
            </div>
          </div>
        </div>
        <Trending />
        <Collections />
        <Benefits />
      </div>
    </section>
  );
};

export default CategoriesContainer;
