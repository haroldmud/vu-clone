import { RxArrowRight } from "react-icons/rx"


export default function Look(){
  return(
    <section className="flex md:justify-center bg-back">
          <section className="bg-menu flex flex-col md:h-[35rem] h-[30rem] w-[98.5%] justify-center">
            <div className="flex justify-center">
            <h2 className="w-10/12 text-5xl text-vert font-thin ">Take a look</h2>
            </div>
              <div className="flex justify-center ">
              <div className="flex md:w-10/12 w-11/12 mt-20">
                  <div className="cursor-pointer md:mx-0 mx-auto bg-white md:w-[30.4%] w-11/12 md:h-[229px] h-56 flex justify-between px-6">
                    <div className="flex flex-col gap-8 mt-12">
                      <h2 className="text-3xl text-vert font-thin">VU campus Tour</h2>
                      <p className="text-2xl font-thin text-transparent">Information and support</p>
                    </div>
                    <div className="flex flex-col text-3xl pb-6 justify-end"><RxArrowRight/></div>
                  </div>
                </div>
           </div>
          </section>
        </section>
  )
}