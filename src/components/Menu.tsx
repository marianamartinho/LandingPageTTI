import { FunctionComponent } from "react";
import LinkButton from "./LinkButton";
import Badge from "./Badge";
import Button1 from "./Button1";

export type MenuType = {
  className?: string;
};

const Menu: FunctionComponent<MenuType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between py-[15px] px-5 box-border shrink-0 top-[0] z-[99] sticky max-w-full gap-5 ${className}`}
    >
      <div className="w-[771.7px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-boundvariablesdata6 max-w-full">
          <img
            className="h-5 w-[135.7px] relative"
            loading="lazy"
            alt=""
            src="/freepik1.svg"
          />
          <nav className="m-0 flex-1 flex flex-row items-center justify-start gap-boundvariablesdata12 max-w-full text-center text-smi text-neutral-25-white font-body-base-regular">
            <div className="flex flex-row items-center justify-center gap-boundvariablesdata9">
              <img
                className="h-3.5 w-3.5 relative hidden"
                alt=""
                src="/arrowprevsmall.svg"
              />
              <div className="flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-[5px]">
                    <LinkButton
                      size="SM"
                      state="Default"
                      type="White"
                      rightIcon={false}
                      leftIcon={false}
                      label="Tools"
                      showLinkButton
                      arrowprevSmall="/arrowprevsmall1.svg"
                      showLink
                      arrowfold="/arrowfold.svg"
                    />
                    <Badge property1="Blue" />
                  </div>
                </div>
              </div>
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowfold1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata9">
              <LinkButton
                size="SM"
                state="Default"
                type="White"
                rightIcon={false}
                leftIcon={false}
                label="Images"
                showLinkButton
                arrowprevSmall="/arrowprevsmall1.svg"
                contentWidth="unset"
                contentHeight="unset"
                showLink
                linkHeight="unset"
                linkWidth="unset"
                arrowfold="/arrowfold.svg"
              />
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowfold1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata9">
              <LinkButton
                size="SM"
                state="Default"
                type="White"
                rightIcon={false}
                leftIcon={false}
                label="Icons"
                showLinkButton
                arrowprevSmall="/arrowprevsmall1.svg"
                contentWidth="unset"
                contentHeight="unset"
                showLink
                linkHeight="unset"
                linkWidth="unset"
                arrowfold="/arrowfold.svg"
              />
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowfold1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-boundvariablesdata9">
              <img
                className="h-3.5 w-3.5 relative hidden"
                alt=""
                src="/arrowprevsmall.svg"
              />
              <div className="flex flex-row items-center justify-center gap-[5px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-[5px]">
                    <LinkButton
                      size="SM"
                      state="Default"
                      type="White"
                      rightIcon={false}
                      leftIcon={false}
                      label="Templates"
                      showLinkButton
                      arrowprevSmall="/arrowprevsmall1.svg"
                      contentWidth="unset"
                      contentHeight="unset"
                      showLink
                      linkHeight="unset"
                      linkWidth="unset"
                      arrowfold="/arrowfold.svg"
                    />
                    <Badge property1="Blue" />
                  </div>
                </div>
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowfold1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata9">
              <LinkButton
                size="SM"
                state="Default"
                type="White"
                rightIcon={false}
                leftIcon={false}
                label="Videos"
                showLinkButton
                arrowprevSmall="/arrowprevsmall1.svg"
                contentWidth="unset"
                contentHeight="unset"
                showLink
                linkHeight="unset"
                linkWidth="unset"
                arrowfold="/arrowfold.svg"
              />
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowfold1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-boundvariablesdata9">
              <LinkButton
                size="SM"
                state="Default"
                type="White"
                rightIcon={false}
                leftIcon={false}
                label="PSD"
                showLinkButton
                arrowprevSmall="/arrowprevsmall1.svg"
                contentWidth="unset"
                contentHeight="unset"
                showLink
                linkHeight="unset"
                linkWidth="unset"
                arrowfold="/arrowfold.svg"
              />
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/arrowfold1.svg"
              />
            </div>
            <LinkButton
              size="SM"
              state="Default"
              type="White"
              rightIcon
              leftIcon={false}
              label="More"
              showLinkButton
              arrowprevSmall="/arrowprevsmall1.svg"
              contentWidth="unset"
              contentHeight="unset"
              showLink
              linkHeight="unset"
              linkWidth="unset"
              arrowfold="/arrowfold1.svg"
            />
            <LinkButton
              size="SM"
              state="Default"
              type="White"
              rightIcon
              leftIcon={false}
              label="PSD"
              showLinkButton={false}
              arrowprevSmall="/arrowprevsmall1.svg"
              contentWidth="unset"
              contentHeight="unset"
              showLink
              linkHeight="21px"
              linkWidth="27px"
              arrowfold="/arrowfold.svg"
            />
            <LinkButton
              size="SM"
              state="Default"
              type="White"
              rightIcon
              leftIcon={false}
              label="More"
              showLinkButton={false}
              arrowprevSmall="/arrowprevsmall1.svg"
              contentWidth="unset"
              contentHeight="unset"
              showLink
              linkHeight="21px"
              linkWidth="33px"
              arrowfold="/arrowfold.svg"
            />
          </nav>
        </div>
      </div>
      <LinkButton
        size="SM"
        state="Default"
        type="White"
        rightIcon={false}
        leftIcon={false}
        label="Sell content"
        showLinkButton={false}
        arrowprevSmall="/arrowprevsmall1.svg"
        contentWidth="25px"
        contentHeight="21px"
        showLink={false}
        linkHeight="unset"
        linkWidth="unset"
        arrowfold="/arrowfold.svg"
      />
      <div className="h-8 w-[82px] hidden" />
      <div className="flex flex-row items-start justify-start gap-5">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <Button1
            size="SM"
            state="Default"
            type="Tertiary negative"
            label="Start creating"
            iconLeft={false}
            iconRight={false}
            buttonHeight="32px"
            buttonLabel="Start creating"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5">
          <div className="flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-2.5">
            <LinkButton
              size="SM"
              state="Default"
              type="Dark"
              rightIcon={false}
              leftIcon={false}
              label="Pricing"
              showLinkButton
              arrowprevSmall="/arrowprevsmall2.svg"
              contentWidth="unset"
              contentHeight="unset"
              showLink
              linkHeight="unset"
              linkWidth="unset"
              arrowfold="/arrowfold2.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pl-0 pr-2.5">
            <div className="w-px h-4 relative bg-colors-neutral-300 [transform:_rotate(180deg)]" />
          </div>
          <img
            className="h-[34px] w-[34px] relative object-cover"
            alt=""
            src="/avatar1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <img
              className="w-3.5 h-3.5 relative"
              alt=""
              src="/arrowcaretdown.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
