import { RxArrowRight } from "react-icons/rx"
import {SlArrowLeft} from "react-icons/sl"
import {SlArrowRight} from "react-icons/sl"

export default function Slide(){
  return (
    <section className="flex relative md:justify-center bg-back overflow-x-hidden">
        <section className="bg-white flex flex-col w-[98.5%] justify-center  ">
          <div className="flex justify-center">
          <h1 className="text-orange text-3xl font-thin md:w-10/12 w-11/12 mt-12">We are VU Amsterdam</h1>
          </div>
          <div className="overflow-x-scroll flow mt-16"> 

                              <div className="flex w-[105rem]  gap-12 md:pb-0 pb-16">
                                  <div className="flex flex-col gap-4 cursor-pointer w-[289px] ">
                                      <img className="w-full h-[386px] object-cover" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&q=40&dpr=2" alt="" />
                                    <div className="">
                                      <p className="text-2xl font-thin text-orange">Vrije Schrijver (Writer in Residence)</p>
                                    </div>
                                    <div className="text-xl flex justify-between pr-2">
                                      <p>Read more</p>
                                        <div className="text-2xl flex flex-col justify-center">
                                        <RxArrowRight/>
                                        </div>
                                    </div>
                                  </div> 
                                  <div className="flex flex-col gap-4 cursor-pointer w-[289px] ">
                                  <img className="w-full h-[386px] object-cover" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&q=40&dpr=2" alt="" />
                                <div className="">
                                  <p className="text-2xl font-thin text-orange">Vrije Schrijver (Writer in Residence)</p>
                                </div>
                                <div className="text-xl flex justify-between pr-2">
                                  <p>Read more</p>
                                    <div className="text-xl flex flex-col justify-center">
                                    <RxArrowRight/>
                                    </div>
                                </div>
                              </div> 
                              <div className="flex flex-col gap-4 cursor-pointer w-[289px] ">
                                  <img className="w-full h-[386px] object-cover" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&q=40&dpr=2" alt="" />
                                <div className="">
                                  <p className="text-2xl font-thin text-orange">Vrije Schrijver (Writer in Residence)</p>
                                </div>
                                <div className="text-xl flex justify-between pr-2">
                                  <p>Read more</p>
                                    <div className="text-xl flex flex-col justify-center">
                                    <RxArrowRight/>
                                    </div>
                                </div>
                              </div> 
                              <div className="flex flex-col gap-4 cursor-pointer w-[289px] ">
                                  <img className="w-full h-[386px] object-cover" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&q=40&dpr=2" alt="" />
                                <div className="">
                                  <p className="text-2xl font-thin text-orange">Vrije Schrijver (Writer in Residence)</p>
                                </div>
                                <div className="text-xl flex justify-between pr-2">
                                  <p>Read more</p>
                                    <div className="flex flex-col justify-center">
                                    <RxArrowRight/>
                                    </div>
                                </div>
                              </div> 
                              <div className="flex flex-col gap-4 cursor-pointer w-[289px] ">
                                  <img className="w-full h-[386px] object-cover" src="/assets/img/image1.jpeg" alt="" />
                                <div className="">
                                  <p className="text-2xl font-thin text-orange">Vrije Schrijver (Writer in Residence)</p>
                                </div>
                                <div className="text-xl flex justify-between pr-2">
                                  <p>Read more</p>
                                    <div className="flex flex-col justify-center">
                                    <RxArrowRight/>
                                    </div>
                                </div>
                              </div> 
                              </div>
          </div>
            <div className="md:flex hidden justify-between h-[5rem] mt-16">
              <a href="#" className="flex text-3xl my-auto text-transparent">News overview <span className=" flex flex-col justify-center ml-4"><RxArrowRight/></span></a>
              <div className="flex my-auto bg-orange-fade h-full text-2xl w-[10rem] flex-col justify-center">
                <div className="flex h-fit justify-between px-4">
                <SlArrowLeft/>
                <SlArrowRight/>
                </div>
              </div>
            </div>
        </section>
        
      </section>
  )
}