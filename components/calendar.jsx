import {BsChevronDown} from "react-icons/bs"
import { RxArrowRight } from "react-icons/rx"
import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"


export default function Calendar(){
  return(
    <>
      <section className=" relative h-fit w-[100%]  flex md:justify-center">
        <div className="flex justify-center bg-gray-100 w-[98.5%] pt-6 md:h-[40rem]">
          <div className="md:w-10/12 w-11/12 ">
            <div className="flex md:flex-row flex-col md:justify-between ">
              <h2 className="text-5xl font-thin text-blue">Calendar</h2>
                <div className="flex gap-8 md:w-[50%] md:mt-0 mt-12">
                  <div className="w-[48%] bg-white flex justify-center h-fit">
                    <h2 className="py-3 flex w-full justify-between px-4 font-bold text-xl">All categories <span className="flex flex-col justify-center"><BsChevronDown/></span></h2>
                  </div>
                  <div className="w-[48%] bg-white flex justify-center h-fit">
                    <h2 className="py-3 flex w-full justify-between px-4 font-bold text-xl">Date <span className="flex flex-col justify-center"><BsChevronDown/></span></h2>
                  </div>
                </div>

            </div>
            <div className="over overflow-y-hidden">
              <div className="mt-20 flex gap-[2%] md:w-auto w-[50rem] ">
                <div className="flex flex-col gap-4 w-[23%]">
                  <h2 className="text-xl font-thin underline">PhD Defences</h2>
                  <h3 className="font-semibold text-xl text-blue">20 February 2023</h3>
                  <p className="text-3xl font-thin">PhD dedence by T.J.H Jonkers</p>
                </div>
                <div className="flex flex-col gap-4 w-[23%]">
                  <h2 className="text-xl font-thin underline">Social events</h2>
                  <h2 className="text-xl font-thin underline">Workshop</h2>
                  <h2 className="text-xl font-thin underline">Sport</h2>
                  <h3 className="font-semibold text-xl text-blue">20 February 2023</h3>
                  <p className="text-3xl font-thin">Pilates - Life is Better in 3D</p>
                </div>
                <div className="flex flex-col gap-4 w-[23%]">
                  <h2 className="text-xl font-thin underline">Other Events</h2>
                  <h3 className="font-semibold text-xl text-blue">21 February 2023</h3>
                  <p className="text-3xl font-thin">ABRI Writing Boost</p>
                </div>
                <div className="flex flex-col gap-4 w-[23%]">
                  <h2 className="text-xl font-thin underline">Lectures</h2>
                  <h3 className="font-semibold text-xl text-blue">21 February 2023</h3>
                  <p className="text-3xl font-thin">ABRI lunch Seminar</p>
                  <p className="text-3xl font-thin">Dr.Paula</p>
                  <p className="text-3xl font-thin">Jarzabkowski</p>
                </div>
              </div>
            </div>
            <div>
            <div className="md:hidden flex justify-center mt-28 pb-20">
            <a href="#" className="flex text-xl my-auto">View Calendar <span className=" flex flex-col justify-center ml-4"><RxArrowRight/></span></a>
            </div>
            <div className="md:flex hidden justify-between h-[5rem] md:border-t border-blue mt-16">
              <a href="#" className="flex text-2xl my-auto">News overview <span className=" flex flex-col justify-center ml-4"><RxArrowRight/></span></a>
              <div className="flex my-auto bg-blue-fade h-full text-xl w-[8rem] flex-col justify-center">
                <div className="flex h-fit justify-between px-4">
                <SlArrowLeft/>
                <SlArrowRight/>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex md:justify-center">
            <section className="bg-menu w-[98.5%] flex flex-col md:h-96 h-[25rem] justify-center shadow-lg">
              <div className="flex md:flex-row flex-col justify-center bg-blue md:w-auto w-[90%] px-12 md:h-[150px] py-6 mx-auto gap-8">
                <p className="text-white text-2xl  my-auto text-center md:mt-auto mt-8 md:px-0 px-2">Working at VU Amsterdam?</p>
                <div className="flex flex-col justify-center h-full">
                  <button className="bg-white h-fit text-2xl md:font-normal font-bold p-4 m-4">
                    Take a look at our vacancies
                  </button>
                </div>
              </div>
            </section>
      </div>
    </>
  )
}