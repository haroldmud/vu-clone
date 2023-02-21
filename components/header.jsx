import {CiUser} from "react-icons/ci"
import {CiSearch} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"
import {TfiClose} from 'react-icons/tfi'
import {AiOutlinePlus} from 'react-icons/ai'
import { RxArrowRight } from "react-icons/rx"
import Link from "next/link"

export default function Header(props) {
  
  return (
    <>
    <section className="bg-transparent h-fit w-full flex md:justify-center  sticky top-0 z-10">
      <header className="bg-white md:h-[75px] h-[5rem]  w-[98.5%] flex justify-between shadow-lg">
        <div className="flex flex-col md:w-[14.78%] w-[50%] h-full justify-center md:ml-8">
          <img className=" ml-[10%]" src="/assets/icons/VUlogo.png"/>
        </div>
        <div className="flex flex-col md:w-[18.7%] w-[45%] justify-center bg-menu md:px-0 px-4">
          <div className="md:text-2xl flex justify-around">
            <p className="font-thin">NL</p>
            <div className="w-fit mt-1"><CiUser/></div>
            <div className="w-fit mt-1"><CiSearch/></div>
            <div className="W-fit mt-1" onClick={()=> props.setShow(true)}>
                <span ><RxHamburgerMenu/></span>
              </div>
          </div>
        </div>
      </header>
    </section>
    <div className={`${props.show ? 'flex' :'hidden'} fixed z-20 top-0 justify-center w-full`}>
        <div className="bg-white relative h-[100vh]  w-[98.5%] flex md:justify-center overflow-y-scroll ">
          <div onClick={()=>props.setShow(false)} className="absolute right-0 bg-back p-6 text-2xl">
            <TfiClose/>
          </div>
          <div className="flex md:ml-32 pb-6 bg-white w-[100%] ">
            <div className="md:w-[62.2%] w-10/12 flex md:justify-start justify-center">
              
              <div className="flex flex-col gap-12 py-[15rem]">
                <Link href={"/study"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>Study at VU Amsterdam</p>
                  <span className="my-auto "><AiOutlinePlus/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>Research</p>
                  <span className="my-auto "><AiOutlinePlus/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>About VU Amsterdam</p>
                  <span className="my-auto "><RxArrowRight/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>VU Press Office</p>
                  <span className="my-auto "><RxArrowRight/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>Alumni</p>
                  <span className="my-auto "><RxArrowRight/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>Student</p>
                  <span className="my-auto "><RxArrowRight/></span>
                </Link>
                <Link href={"/research"} className="flex md:w-[50%] cursor-pointer justify-between  text-2xl font-semibold">
                  <p>Employee</p>
                  <span className="my-auto "><RxArrowRight/></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
