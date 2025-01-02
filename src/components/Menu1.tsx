import { FunctionComponent } from "react";

export type Menu1Type = {
  className?: string;
};

const Menu1: FunctionComponent<Menu1Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-center justify-between py-spacings-16 px-10 box-border gap-5 max-w-full z-[2] text-center text-xs text-colors-secondary-premium-gold-300 font-body-base-regular ${className}`}
    >
      <div className="w-[687.7px] flex flex-row items-center justify-start gap-boundvariablesdata22 max-w-full mq800:gap-boundvariablesdata22 mq1150:w-[167.7px]">
        <img
          className="h-5 w-[135.7px] relative object-cover"
          loading="lazy"
          alt=""
          src="/freepik@2x.png"
        />
        <nav className="m-0 flex-1 flex flex-row items-center justify-between max-w-full gap-boundvariablesdata21 text-center text-xs text-neutral-25-white font-body-base-regular mq1150:hidden">
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  Tools
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  Images
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-baseline justify-start">
            <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[160%] font-semibold">
                    Icons
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  Videos
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0 gap-spacings-4">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  Templates
                </div>
              </div>
            </div>
            <div className="rounded-radius-default bg-colors-primary-mediterranean-100 flex flex-row items-center justify-start py-0 pl-spacings-space-080 pr-[3px] text-left text-3xs text-colors-primary-mediterranean-900">
              <div className="relative leading-[175%] font-semibold">New</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">PSD</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  Mockups
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[160%] font-semibold">
                  More
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-[300px] flex flex-row items-center justify-start gap-boundvariablesdata21">
        <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-1 px-[18px] bg-[transparent] flex-1 rounded-spacings-space-080 flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
          <div className="relative text-smi leading-[160%] font-semibold font-body-base-regular text-neutral-25-white text-left whitespace-nowrap">
            Start creating
          </div>
        </button>
        <div className="flex flex-row items-center justify-center py-[6.5px] px-0">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[160%] font-semibold">
                Pricing
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-spacings-4 flex flex-row items-center justify-center py-2 px-0">
          <img
            className="h-4 w-4 relative object-cover"
            loading="lazy"
            alt=""
            src="/systemnotification@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-spacings-4">
          <img
            className="h-6 w-6 relative object-cover"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
          <div className="h-8 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Menu1;
