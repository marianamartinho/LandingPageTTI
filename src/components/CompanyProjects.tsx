import { FunctionComponent } from "react";
import BodyLink from "./BodyLink";

export type CompanyProjectsType = {
  className?: string;
};

const CompanyProjects: FunctionComponent<CompanyProjectsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch border-colors-neutral-200 border-t-[1px] border-solid flex flex-row items-center justify-start flex-wrap content-center py-boundvariablesdata px-0 gap-x-spacings-space-180 gap-y-spacings-space-180 text-left text-smi text-colors-neutral-900 font-body-base-regular ${className}`}
    >
      <div className="relative leading-[160%]">Freepik company projects</div>
      <div className="flex-1 flex flex-row items-center justify-end gap-boundvariablesdata1">
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Freepik"
          bodyLinkAlignSelf="unset"
          bodyLinkJustifyContent="center"
          linkFlex="unset"
          linkTextAlign="center"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Flaticon"
          bodyLinkAlignSelf="unset"
          bodyLinkJustifyContent="center"
          linkFlex="unset"
          linkTextAlign="center"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Slidesgo"
          bodyLinkAlignSelf="unset"
          bodyLinkJustifyContent="center"
          linkFlex="unset"
          linkTextAlign="center"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Wepik"
          bodyLinkAlignSelf="unset"
          bodyLinkJustifyContent="center"
          linkFlex="unset"
          linkTextAlign="center"
        />
        <BodyLink
          size="MD"
          state="Default"
          type="Dark"
          content="Videvo"
          bodyLinkAlignSelf="unset"
          bodyLinkJustifyContent="center"
          linkFlex="unset"
          linkTextAlign="center"
        />
      </div>
    </div>
  );
};

export default CompanyProjects;
