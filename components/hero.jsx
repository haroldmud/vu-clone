import {CiSearch} from "react-icons/ci"
import {RxArrowRight} from "react-icons/rx" 

export default function Hero(props){
  return(
    <>
    <section className="md:relative">
        <div className="bg-back md:h-[20rem]  w-full flex md:justify-center">
          <div className="flex justify-center pb-6 bg-hero w-[98.5%] ">
            <div className="md:w-[62.2%] w-10/12">
            <p className="mt-4 md:text-6xl text-4xl md:leading-[5rem] leading-[3.5rem] md:font-thin md:pr-0 pr-12">
              You don't just become something, you become someone</p>
            </div>
          </div>
        </div>
        <div className="w-full md:absolute flex justify-center top-[16rem]">
          <div className="md:w-[82rem] md:h-[8rem] h-[6rem] w-full bg-white md:flex">
            <div className="bg-blue md:w-[58.2%] w-full flex flex-col justify-center h-full">
              <div className="flex justify-center">
              <div className="w-10/12 border-b border-white flex text-white ">
                <input placeholder="Search..." type="text" className="outline-none w-full placeholder:text-white placeholder:text-3xl placeholder:font-thin bg-blue" />
                <button className="text-[2.5rem] mb-2"><CiSearch/></button>
              </div>
            </div>
            </div>
            <div className=" md:w-[41.2%] flex flex-col justify-center">
              <a href="#" className="text-blues h-[6rem] bg-white font-thin  flex justify-between md:w-full md:px-4 px-10">
                <p className="my-auto md:text-4xl text-2xl ">About VU Amsterdam</p>
                <button className="text-4xl"><RxArrowRight/></button>
              </a>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-[6rem]">
          <img className="md:w-auto md:h-auto h-[15rem] object-cover" src="/assets/img/main.jpg" alt="" />
        </div>
      </section>
      <div className={`absolute z-20 top-[6.3rem] w-full `}>
        {props.content}
      </div>
    </>
  )
}