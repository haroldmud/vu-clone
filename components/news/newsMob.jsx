import { RxArrowRight } from "react-icons/rx"

export default function NewsMob(){
  return(
    <section className="md:hidden flex justify-center">
      <div className="w-11/12 flex flex-col gap-8">
        <div className="flex gap-8 bg-transparent">
          <img className="w-[35%] h-[100px] object-cover" src="/assets/img/image1.jpeg" alt="" />
          <div className="">
            <h1 className="font-bold text-mauve text-xl">08 Feb 2023</h1>
            <p className="text-xl font-thin flex">
              EU grant to improve mental well-being of... <span className="text-xl flex flex-col justify-end"><RxArrowRight/></span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 bg-transparent">
          <img className="w-[35%] h-[100px] object-cover" src="/assets/img/image2.png" alt="" />
          <div className="">
            <h1 className="font-bold text-mauve text-xl">08 Feb 2023</h1>
            <p className="text-xl font-thin flex">
              EU grant to improve mental well-being of... <span className="text-xl flex flex-col justify-end"><RxArrowRight/></span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 bg-transparent">
          <img className="w-[35%] h-[100px] object-cover" src="/assets/img/imaage3.jpeg" alt="" />
          <div className="">
            <h1 className="font-bold text-mauve text-xl">08 Feb 2023</h1>
            <p className="text-xl font-thin flex">
              EU grant to improve mental well-being of... <span className="text-xl flex flex-col justify-end"><RxArrowRight/></span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 bg-transparent">
          <img className="w-[35%] h-[100px] object-cover" src="/assets/img/image4.jpeg" alt="" />
          <div className="">
            <h1 className="font-bold text-mauve text-xl">08 Feb 2023</h1>
            <p className="text-xl font-thin flex">
              EU grant to improve mental well-being of... <span className="text-xl flex flex-col justify-end"><RxArrowRight/></span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 bg-transparent">
          <img className="w-[35%] h-[100px] object-cover" src="/assets/img/image5.png" alt="" />
          <div className="">
            <h1 className="font-bold text-mauve text-xl">08 Feb 2023</h1>
            <p className="text-xl font-thin flex">
              EU grant to improve mental well-being of... <span className="text-xl flex flex-col justify-end"><RxArrowRight/></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}