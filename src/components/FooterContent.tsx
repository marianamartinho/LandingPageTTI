import { FunctionComponent } from "react";
import BodyLink from "./BodyLink";

export type FooterContentType = {
  className?: string;
};

const FooterContent: FunctionComponent<FooterContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-spacings-space-900 px-0 pb-spacings-space-250 gap-boundvariablesdata1 text-left text-sm text-colors-neutral-900 font-body-base-regular ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-end pt-spacings-space-080 px-0 pb-0">
        <img className="w-[135.7px] h-5 relative" alt="" src="/freepik-1.svg" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[130px]">
        <div className="self-stretch relative leading-[160%] font-semibold">
          CONTENT
        </div>
        <BodyLink size="MD" state="Default" type="Dark" content="New images" />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Popular content"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Search trends"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Blog"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[130px]">
        <div className="self-stretch relative leading-[160%] font-semibold">
          INFORMATION
        </div>
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content={`Plans & pricing`}
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="About us"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Jobs"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Sell your content"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[130px]">
        <div className="self-stretch relative leading-[160%] font-semibold">
          LEGAL
        </div>
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content={`Terms & Conditions`}
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="License Agreement"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Privacy Policy"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Copyright information"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Cookies policy"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Cookie Settings"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 min-w-[130px]">
        <div className="self-stretch relative leading-[160%] font-semibold">
          SUPPORT
        </div>
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="FAQ"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Contact"
          bodyLinkAlignSelf="stretch"
          bodyLinkJustifyContent="flex-start"
          linkFlex="1"
          linkTextAlign="left"
        />
      </div>
      <div className="flex-1 flex flex-row items-center justify-end">
        <div className="self-stretch flex-1 rounded border-colors-neutral-300 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-spacings-space-160">
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-spacings-space-160 gap-2">
              <img className="w-4 relative h-4" alt="" src="/systemworld.svg" />
              <div className="relative leading-[40px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                English
              </div>
            </div>
          </div>
          <img
            className="w-spacings-space-250 relative h-spacings-space-250"
            alt=""
            src="/caretbox.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
