import Header from "@/components/header"
import Hero from "@/components/hero"
import Faculty from "@/components/faculties"
import Impact from "@/components/impact"
import {RxArrowRight} from "react-icons/rx"



export default function Home() {
  return (
    <main className="text-main max-w-[1280px] w-full mx-auto">
      <Header/>
      <Hero/>
      <Faculty/>
      <Impact/>
      {/* <section className="flex relative md:justify-center bg-back overflow-x-hidden">
        <section className="bg-menu flex flex-col w-[98.5%] justify-center">
          <div>
            <h2 className="text-6xl">News</h2>
            <div>
              <div className="">
                <div>
                  <img src="/assets/img/image1.jpeg" alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-blue">08 Feb 2023</h1>
                  <p>
                    Earthquakes Turkey and Syria
                  </p>
                </div>
                <div>
                  <RxArrowRight/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section> */}
    </main>
  )
}
