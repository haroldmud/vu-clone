import Clip from "./clip"
import {RxArrowRight} from "react-icons/rx"

export default function Impact(){
  return(
    <>
    <section className="flex relative md:justify-center bg-back overflow-x-hidden">
        <section className="bg-menu flex flex-col md:pb-4 pb-12 w-[98.5%] justify-center">
          <div><p className="text-orange text-6xl font-[350] md:pl-48 pl-4 pt-20 pb-12">Impact</p></div>
          <img className="pb-32 md:block hidden" src="/assets/img/teacher.png" alt="teacher" />
          <img className="block md:hidden" src="/assets/img/teacher-mob.png" alt="" />
          <Clip/>
          <div className="md:hidden bg-white pl-4 pt-12 pb-6">
            <h2 className="text-3xl text-orange font-thin">Science to Impact</h2>
            <p className="py-8 text-2xl pr-32">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <div className="flex justify-between">
              <div href="#" className="text-main h-[2rem] flex justify-between gap-4 md:w-4/12 ">
                <p className="my-auto text-xl font-semibold">Read more</p>
                <button className="text-3xl"><RxArrowRight/></button>
              </div>
          </div>
          </div>
        </section>
      </section>
        <section className="flex md:justify-center bg-back">
          <section className="bg-gray-100 flex flex-col md:h-[25rem] h-[40rem] w-[98.5%] justify-center">
           <div className="flex flex-col justify-center ">
              <div className="flex md:flex-row flex-col justify-center gap-12 md:w-auto w-full">
                  <div className="pointer md:mx-0 mx-auto bg-white md:w-[38.4%] w-11/12 h-[179px] flex justify-between px-6">
                    <div className="flex flex-col gap-8 mt-12">
                      <h2 className="text-3xl text-vert font-thin">Ukraine</h2>
                      <p className="text-2xl font-thin">Information and support</p>
                    </div>
                    <div className="flex flex-col text-3xl pb-6 justify-end"><RxArrowRight/></div>
                  </div>
                  <div className="pointer md:mx-0 mx-auto bg-white md:w-[38.4%] w-11/12 md:h-[179px] h-[15rem] flex justify-between px-6">
                    <div className="flex flex-col gap-8 mt-12">
                      <h2 className="text-3xl text-violet font-thin">VU & Corona</h2>
                      <p className="text-2xl font-thin text-transparent">Information and support</p>
                    </div>
                    <div className="flex flex-col text-3xl pb-6 justify-end h-[10rem]"><RxArrowRight/></div>
                  </div>
                </div>
           </div>
          </section>
        </section>
    </>
  )
}