import { RxArrowRight } from "react-icons/rx"

export default function Menu(){
  return(
    <section className="flex relative md:justify-center bg-back overflow-x-hidden">
        <section className="md:bg-gray-100 bg-white md:pt-0 pt-12 flex flex-col w-[98.5%] justify-center md:h-[40rem]">
          <div className="justify-center flex">
            <div className="md:w-10/12 flex justify-around md:flex-row flex-col">
              <div className="md:w-[32%]">
                <h2 className="text-4xl font-thin md:pl-0 pl-10 text-blue mb-8">VU main menu</h2>
                <div className="bg-white">
                  <div className="flex flex-col gap-4 md:px-2 py-4">
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Home</p>
                      <button className="text-xl"><RxArrowRight/></button>
                      </div>
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                        <p className="my-auto text-xl">Education</p>
                        <button className="text-xl"><RxArrowRight/></button>
                      </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Research</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">About VU Amsterdam</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">University Library</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">VU Press Office</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Alumni</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                </div>
                </div>
              </div>
              <div className="md:w-[32%]">
                <h2 className="text-4xl font-thin md:pl-0 pl-10 text-orange mb-8">Most searched</h2>
                <div className="bg-white">
                  <div className="flex flex-col gap-4 md:px-2 py-4">
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Contact us</p>
                      <button className="text-xl"><RxArrowRight/></button>
                      </div>
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                        <p className="my-auto text-xl">People finder</p>
                        <button className="text-xl"><RxArrowRight/></button>
                      </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Bachelor's programmes</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">About VU Amsterdam</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">University Library</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">VU Press Office</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Alumni</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                </div>
                </div>
              </div>
              <div className="md:w-[32%]">
                <h2 className="text-4xl font-thin md:pl-0 pl-10 text-vert mb-8">Featured</h2>
                <div className="bg-white  pb-[0.85rem]">
                  <div className="flex flex-col gap-4 md:px-2 py-4">
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">Campus Tour</p>
                      <button className="text-xl"><RxArrowRight/></button>
                      </div>
                      <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                        <p className="my-auto text-xl">Study Guide</p>
                        <button className="text-xl"><RxArrowRight/></button>
                      </div>
                    <div href="#" className="text-main h-[2rem]  flex justify-between md:w-full md:px-4 px-10">
                      <p className="my-auto text-xl">VU Magazine</p>
                      <button className="text-xl"><RxArrowRight/></button>
                    </div>
                    <div>
                      <img className="md:px-4 px-10 md:mt-28 mt-10 md:w-auto w-10/12" src="/assets/img/icons.png" alt="" />
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  )
}
