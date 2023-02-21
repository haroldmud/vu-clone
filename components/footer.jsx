import { RxArrowRight } from "react-icons/rx"

export default function Footer(){
  return(
    <>
      <section className="md:flex hidden md:justify-center">
        <div className="w-[98.5%] bg-blue text-2xl text-white">
          <div className="w-fit mx-auto flex flex-col gap-8 py-12">
          <ul className="md:flex grid grid-cols-3">
            <li className="flex">Privacy Statement
            <span className="my-auto mr-4"><RxArrowRight/></span></li>
            <li className="flex">Disclaimer
            <span className="my-auto mr-4"><RxArrowRight/></span></li>
            <li className="flex">
            Safety at VU Amsterdam
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
            <li className="flex">
            Colofon
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
            <li className="flex">
            Cookie Settings
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
            <li className="flex">
            Web archive
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
          </ul>
          <p>
          Copyright © 2023 - Vrije Universiteit Amsterdam
          </p>
          </div>
        </div>
      </section>
      <section className="flex md:hidden md:justify-center">
        <div className="w-[98.5%] bg-blue text-2xl text-white">
          <div className="w-fit mx-auto flex flex-col gap-8 py-12">
          <ul className="md:flex">
            <div className="flex">
            <li className="flex">Privacy Statement
            <span className="my-auto mr-4"><RxArrowRight/></span></li>
            <li className="flex">Disclaimer
            <span className="my-auto mr-4"><RxArrowRight/></span></li>
            </div>
            <div className="flex">
            <li className="flex">
            Safety at VU Amsterdam
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
           <li className="flex">
            Colofon
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li></div>

            <div className="flex">
            <li className="flex">
            Cookie Settings
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
            <li className="flex">
            Web archive
            <span className="my-auto mr-4"><RxArrowRight/></span>
            </li>
            </div>
           
          </ul>
          <p>
          Copyright © 2023 - Vrije Universiteit Amsterdam
          </p>
          </div>
        </div>
      </section>
    </>
  )
}