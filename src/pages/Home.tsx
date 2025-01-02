import { FunctionComponent } from "react";
import Menu from "../components/Menu";
import FrameComponent from "../components/FrameComponent";
import BannerContainer from "../components/BannerContainer";
import FrameComponent1 from "../components/FrameComponent1";
import CategoriesContainer from "../components/CategoriesContainer";
import CalendarBanner from "../components/CalendarBanner";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-neutral-25-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-mini text-colors-primary-mediterranean-700 font-body-base-regular">
      <section className="self-stretch h-[465px] flex flex-col items-start justify-start pt-0 px-20 pb-[401px] box-border gap-20 bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-5 mq800:pb-[170px] mq800:box-border mq1125:gap-10 mq1125:pl-10 mq1125:pr-10 mq1125:pb-[261px] mq1125:box-border">
        <Menu />
        <FrameComponent />
      </section>
      <BannerContainer />
      <div className="relative leading-[160%] font-semibold hidden">TOOLS</div>
      <div className="relative text-mid leading-[160%] text-colors-neutral-800 hidden max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </div>
      <div className="hidden flex-row items-start justify-center gap-spacings-15 text-colors-neutral-900">
        <div className="rounded-radius-md border-colors-neutral-300 border-[1px] border-solid flex flex-row items-center justify-center py-spacings-10 px-spacings-25 gap-spacings-10 mq450:w-[calc(100%_-_40px)]">
          <img
            className="w-4 relative h-4 hidden"
            alt=""
            src="/communicationheart1.svg"
          />
          <div className="h-6 w-10 relative leading-[160%] font-semibold flex items-center">
            Label
          </div>
          <img
            className="w-4 relative h-4 hidden"
            alt=""
            src="/communicationheart1.svg"
          />
        </div>
        <div className="rounded-radius-md bg-colors-neutral-900 flex flex-row items-center justify-center py-spacings-10 px-spacings-25 gap-spacings-10 text-neutral-25-white mq450:w-[calc(100%_-_40px)]">
          <img
            className="w-4 relative h-4 hidden"
            alt=""
            src="/communicationheart.svg"
          />
          <div className="h-6 w-10 relative leading-[160%] font-semibold flex items-center">
            Label
          </div>
          <img
            className="w-4 relative h-4 hidden"
            alt=""
            src="/communicationheart.svg"
          />
        </div>
      </div>
      <div className="hidden flex-row items-start justify-start gap-boundvariablesdata7">
        <div className="rounded-999980xl bg-neutral-100 overflow-hidden flex flex-row items-center justify-center py-0 px-3">
          <input className="m-0 h-4 w-4 relative" type="checkbox" />
        </div>
        <div className="rounded-999980xl border-colors-neutral-300 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-0 px-[11px]">
          <input className="m-0 h-4 w-4 relative" type="checkbox" />
        </div>
      </div>
      <FrameComponent1 />
      <CategoriesContainer />
      <CalendarBanner />
      <FrameComponent2 />
      <footer className="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <Footer device="Desktop 1440 Flexible" />
      </footer>
    </div>
  );
};

export default Home;
