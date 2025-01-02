import { FunctionComponent } from "react";
import SearchBarHome from "./SearchBarHome";
import TagsInverted from "./TagsInverted";

export type SearchProtoType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const SearchProto: FunctionComponent<SearchProtoType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-0 px-0 pb-[296px] gap-[23px] text-left text-sm text-colors-neutral-900 font-body-base-regular ${className}`}
      data-property1={property1}
    >
      <div className="w-[200px] shadow-[0px_4px_15px_rgba(0,_0,_0,_0.1)] rounded-10xs bg-neutral-25-white h-[339px] hidden flex-col items-start justify-start py-[5px] px-0 box-border">
        <div className="self-stretch bg-neutral-25-white flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5 text-colors-primary-piki-blue-500">
          <img
            className="w-3.5 relative h-3.5 object-cover"
            alt=""
            src="/16pxsmimageresources@2x.png"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-1.5 px-0 gap-2.5">
            <div className="h-[17px] w-[126px] relative inline-block shrink-0">
              Assets
            </div>
            <div className="w-3.5 relative h-3.5">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <img
                className="absolute h-[75.71%] w-full top-[10%] right-[0%] bottom-[14.29%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch border-gray-mystic border-b-[1px] border-solid flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <img className="w-3.5 relative h-3.5" alt="" src="/filefolder.svg" />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Collections
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <img
            className="w-3.5 relative h-3.5 object-cover"
            alt=""
            src="/14pxxsimagevector@2x.png"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Vectors
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <img
            className="w-3.5 relative h-3.5 object-cover"
            alt=""
            src="/16pxsmimagephoto@2x.png"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Photos
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <input
            className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              AI images
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <input
            className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Icons
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <input
            className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Videos
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <input
            className="m-0 h-3.5 w-3.5 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[150px] h-[17px] relative inline-block">
              Templates
            </div>
          </div>
        </div>
        <div className="w-[180px] overflow-hidden hidden flex-row items-center justify-start pt-[5px] px-2.5 pb-0 box-border gap-2.5 text-gray-oxford font-headlines-h4-34px-semibold">
          <div className="h-[18px] w-[18px] relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-blue-freepik" />
            <div className="absolute h-[55.56%] w-[55.56%] top-[22.22%] right-[22.22%] bottom-[22.22%] left-[22.22%] rounded-mini" />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[132px] h-[17px] relative font-medium inline-block">
              All
            </div>
          </div>
        </div>
        <div className="w-[180px] overflow-hidden hidden flex-row items-center justify-start pt-[5px] px-2.5 pb-0 box-border gap-2.5 text-gray-oxford font-headlines-h4-34px-semibold">
          <div className="h-[18px] w-[18px] relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-blue-freepik" />
            <div className="absolute h-[55.56%] w-[55.56%] top-[22.22%] right-[22.22%] bottom-[22.22%] left-[22.22%] rounded-mini" />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[132px] h-[17px] relative font-medium inline-block">
              All
            </div>
          </div>
        </div>
        <div className="w-[180px] bg-gray-hades hidden flex-row items-center justify-start py-0.5 pl-4 pr-2.5 box-border gap-2.5 text-gray-oxford font-headlines-h4-34px-semibold">
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            alt=""
            src="/16pxsmmediadevicesvideolinear-1.svg"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start py-1.5 px-0 gap-2.5">
            <div className="h-[17px] w-[106px] relative font-medium inline-block shrink-0">
              Videos
            </div>
            <div className="w-3.5 relative h-3.5">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <input
                className="m-0 absolute h-[75.71%] w-full top-[10%] right-[0%] bottom-[14.29%] left-[0%]"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch border-gray-mystic border-t-[1px] border-solid overflow-hidden flex flex-row items-center justify-center pt-[5px] pb-0 pl-4 pr-2.5 gap-2.5">
          <input
            className="m-0 h-[19px] w-[19px] relative rounded-sm border-grey-gaysir border-[1px] border-solid box-border"
            type="checkbox"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[146px] h-[17px] relative inline-block">Free</div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-0 pb-0.5 pl-4 pr-2.5 gap-2.5 text-yellow-premium">
          <input
            className="m-0 h-[19px] w-[19px] relative rounded-sm border-grey-gaysir border-[1px] border-solid box-border"
            type="checkbox"
          />
          <div className="overflow-hidden hidden flex-row items-start justify-start pt-2.5 px-0 pb-0">
            <img
              className="w-4 relative h-4 object-cover"
              alt=""
              src="/16px01-heart@2x.png"
            />
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start py-1.5 px-0 gap-[5px]">
            <input className="m-0 h-[12.7px] w-3.5 relative" type="checkbox" />
            <div className="h-[17px] w-[127px] relative inline-block shrink-0">
              Premium
            </div>
          </div>
        </div>
        <div className="w-[180px] border-colors-neutral-75 border-t-[1px] border-solid box-border hidden flex-row items-center justify-start py-0.5 pl-4 pr-2.5 gap-2.5">
          <img
            className="w-3.5 relative h-3.5 object-cover"
            alt=""
            src="/iconsearch-by-image@2x.png"
          />
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-1.5 px-0">
            <div className="w-[130px] h-[17px] relative inline-block">
              Search by image
            </div>
          </div>
        </div>
      </div>
      <SearchBarHome state="Default" />
      <div className="w-[672.5px] h-8 flex flex-row items-start justify-start py-0 pl-[283.5px] pr-0 box-border text-smi text-neutral-25-white">
        <div className="h-8 w-[389px] flex flex-row items-start justify-start gap-boundvariablesdata13">
          <TagsInverted
            size="SM"
            state="Default"
            text="Background"
            close1={false}
            iconLeft
          />
          <TagsInverted
            size="SM"
            state="Default"
            text="Landscape"
            close1={false}
            iconLeft
          />
          <TagsInverted
            size="SM"
            state="Default"
            text="Illustration"
            close1={false}
            iconLeft
          />
        </div>
      </div>
    </div>
  );
};

export default SearchProto;
