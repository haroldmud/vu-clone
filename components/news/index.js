import {RxArrowRight} from "react-icons/rx"
import NewsMob from "./newsMob"
import Wrapper from "../Wrapper"

export default function News(){
  return (
    <Wrapper>
        <section className="flex relative md:justify-center bg-back overflow-x-hidden">
          <section className="bg-menu flex flex-col w-[98.5%] justify-center  ">
          <div>
            <div className="flex justify-center  py-8">
              <div className="md:w-10/12 w-11/12">
              <h2 className="text-5xl font-thin text-mauve">News</h2>
              </div>
            </div>
            <div className="md:flex hidden justify-center ">
            <div className="flex  justify-between h-[456px] w-10/12">
              <div className="flex  w-[50%] flex-col h-full justify-between">
                <div className="flex gap-8">
                    <img className="w-[50%] h-[216px] object-cover" src="/assets/img/image1.jpeg" alt="" />
                  
                  <div className="">
                    <h1 className="font-bold text-mauve text-2xl">08 Feb 2023</h1>
                    <p className="text-2xl font-thin">
                      Earthquakes Turkey and Syria
                    </p>
                  </div>
                  <div className="text-2xl flex flex-col justify-end">
                    <RxArrowRight/>
                  </div>
                </div>
                <div className="flex gap-8">
                    <img className="w-[50%] h-[216px] object-cover" src="/assets/img/image2.png" alt="" />
                  
                  <div className="">
                    <h1 className="font-bold text-mauve text-2xl">15 Feb 2023</h1>
                    <p className="text-2xl font-thin">
                      Robot bird give singing lessons to zebra finches
                    </p>
                  </div>
                  <div className="text-2xl flex flex-col justify-end">
                    <RxArrowRight/>
                  </div>
                </div>
              </div>
              <div className="flex  w-[40%] flex-col h-full justify-between">
                <div className="flex gap-8">
                    <img className="w-[27%] h-[90px] object-cover" src="/assets/img/imaage3.jpeg" alt="" />
                  
                  <div className="">
                    <h1 className="font-bold text-mauve text-2xl">08 Feb 2023</h1>
                    <p className="text-2xl font-thin flex">
                      EU grant to improve mental well-being of... <span className="text-2xl flex flex-col justify-end "><RxArrowRight/></span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                    <img className="w-[27%] h-[90px] object-cover" src="/assets/img/image4.jpeg" alt="" />
                  
                    <div className="">
                    <h1 className="font-bold text-mauve text-2xl">08 Feb 2023</h1>
                    <p className="text-2xl font-thin flex">
                      EU grant to improve mental well-being of... <span className="text-2xl flex flex-col justify-end "><RxArrowRight/></span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                    <img className="w-[27%] h-[90px] object-cover" src="/assets/img/image5.png" alt="" />
                  
                    <div className="">
                    <h1 className="font-bold text-mauve text-2xl">08 Feb 2023</h1>
                    <p className="text-2xl font-thin flex">
                      EU grant to improve mental well-being of... <span className="text-2xl flex flex-col justify-end "><RxArrowRight/></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <NewsMob/>
            <div className="flex justify-center pb-12 md:pt-28 pt-12">
            <a href="#" className="flex text-2xl">News overview <span className=" flex flex-col justify-center -mb-2"><RxArrowRight/></span></a>
            </div>
          </div>
        </section>
        
      </section>
    </Wrapper>
  )
}