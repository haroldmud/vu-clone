import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { RxArrowRight } from "react-icons/rx";

export default function Clip() {
  return (
    <div className="w-[98.5%] md:flex hidden justify-center xl:top-[30rem] lg:top-[35rem] top-[28rem] absolute ">
      <div className="impact bg-white w-[45%]- h-96- max-w-2xl mx-auto">
        <div className="pt-12 pl-12">
          <h2 className="text-3xl text-orange font-thin">Science to Impact</h2>
          <p className="py-8 text-xl">
            An interview with entrepreneurial scientist Davide Iannuzzi, Chief
            Impact Officer of Vrije Universiteit Amsterdam
          </p>
          <div className="flex justify-between">
            <div
              href="#"
              className="text-main h-[2rem] flex justify-between md:w-4/12 md:pl-4 px-8"
            >
              <p className="my-auto text-xl font-semibold">Read more</p>
              <button className="text-3xl">
                <RxArrowRight />
              </button>
            </div>
            <div className="w-[50%] flex justify-end pt-12">
              <div className=" flex justify-between w-[70%] text-orange">
                <div className="text-4xl flex flex-col justify-center">
                  <GoPrimitiveDot />
                </div>
                <div className="text-2xl text-orange-dot flex flex-col justify-center">
                  <GoPrimitiveDot />
                </div>
                <div className="text-2xl text-orange-dot flex flex-col justify-center">
                  <GoPrimitiveDot />
                </div>
                <div className="text-2xl text-orange-dot flex flex-col justify-center">
                  <GoPrimitiveDot />
                </div>
                <div className="flex bg-orange-fade gap-10 py-4 px-4">
                  <div className="text-main text-[23px] my-auto">
                    <BsChevronLeft />
                  </div>
                  <div className="text-main text-[23px] my-auto">
                    <BsChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
