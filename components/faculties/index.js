import Education from "./education"
import Wrapper from "../Wrapper"

export default function Faculty(){
  return(
    <section className="relative">
    <Wrapper>
      <section className="h-fit z-10 w-full flex md:justify-center">
        <div className="flex justify-center bg-white w-[98.5%] pt-6 md:h-96 md:pb-auto pb-20">
          <div className="flex md:w-10/12 w-11/12 justify-between h-fit">
            <div className="flex gap-4 md:flex-row flex-col">
              <div className="flex flex-col justify-center">
              <img className="w-12" src="/assets/icons/icon1.png" alt="" />
              </div>
              <p className="font-semibold my-auto md:text-xl text-[1rem] md:text-left text-center md:w-auto w-[50%]">31.704 students</p>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
              <div>
              <img className="w-12" src="/assets/icons/icon2.png" alt="" />
              </div>
              <p className="font-semibold my-auto md:text-xl text-[1rem] md:text-left text-center md:w-auto w-[50%]">5.190 international students</p>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
              <div>
                <img className="w-12" src="/assets/icons/icon3.png" alt="" />
              </div>
              <p className="font-semibold my-auto md:text-xl text-[1rem]">459 PhD defences</p>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
              <div>
                <img className="w-12" src="/assets/icons/icon4.png" alt="" />
              </div>
              <p className="font-semibold my-auto md:text-xl text-[1rem] md:text-left text-center md:w-auto w-[50%]">9 faculties</p>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
      <Education/>
      <Wrapper>
      <section className="bg-back h-fit w-full md:flex hidden md:justify-center shadow-lg">
        <div className="flex justify-center bg-menu w-[98.5%] pt-12 md:h-56 h-[31rem]"></div>
      </section>
      <section className="flex md:justify-center bg-back">
        <section className="bg-white flex flex-col md:h-96 h-[25rem]  w-[98.5%] justify-center shadow-lg">
          <div className="flex md:flex-row flex-col justify-center bg-blue md:w-[77.2%] w-[90%]  md:h-[150px] mx-auto gap-8">
            <p className="text-white md:text-2xl  text-2xl my-auto text-center md:mt-auto mt-8 md:px-0 px-2">Do you also want to change your world?</p>
            <div className="flex flex-col justify-center h-full">
              <button className="bg-white h-fit md:text-2xl text-xl md:font-normal font-bold p-4 m-4">
                Visit the VU Master's Event
              </button>
            </div>
          </div>
        </section>
      </section>
    </Wrapper>
    </section>
  )
}