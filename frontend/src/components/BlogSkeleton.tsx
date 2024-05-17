import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
          <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>

        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const BlogIdSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-12">
        <div className="col-span-8">
          <div className="text-5xl font-extrabold">
            <div className="h-2 bg-gray-200 rounded-full w-9/12 mb-2.5"></div>
          </div>
          <div className="text-slate-500 pt-2">
            <div className="h-2 bg-gray-200 rounded-full w-9/12 mb-2.5"></div>
          </div>

          <div role="status" className="space-y-2.5 animate-pulse w-9/12">
            <div className="flex items-center w-9/12">
              <div className="h-2.5 bg-gray-200 rounded-full  w-32"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
            </div>
            <div className="flex items-center w-full">
              <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
            </div>
            <div className="flex items-center w-full">
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-32"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
            </div>
            <div className="flex items-center w-full">
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-700 text-lg">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="flex">
            <div className="pr-4 flex flex-col justify-center">
              <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
            </div>
            <div>
              <div className="text-xl font-bold">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
