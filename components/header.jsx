import {CiUser} from "react-icons/ci"
import {CiSearch} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"

export default function Header() {
  return (
    <section className="bg-transparent h-fit w-full flex md:justify-center  sticky top-0 z-10">
      <header className="bg-white md:h-[75px] h-[5rem]  w-[98.5%] flex justify-between shadow-lg">
        <div className="flex flex-col md:w-[14.78%] w-[50%] h-full justify-center md:ml-8">
          <img className=" ml-[10%]" src="/assets/icons/VUlogo.png"/>
        </div>
        <div className="flex flex-col md:w-[18.7%] w-[45%] justify-center bg-menu md:px-0 px-4">
          <div className="md:text-4xl text-3xl flex justify-around">
            <p className="font-thin">NL</p>
            <div className="w-fit mt-1"><CiUser/></div>
            <div className="w-fit mt-1"><CiSearch/></div>
            <div className="W-fit mt-1"><RxHamburgerMenu/></div>
          </div>
        </div>
      </header>
    </section>
  )
}
