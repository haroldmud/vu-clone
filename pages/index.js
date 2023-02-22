import Header from "@/components/header"
import Hero from "@/components/hero"
import Faculty from "@/components/faculties" 
import Impact from "@/components/impact"
import News from "@/components/news"
import Calendar from "@/components/calendar"
import Slide from "@/components/slide"
import Look from "@/components/look"
import Menu from "@/components/menu"
import Footer from "@/components/footer"
import { useState } from "react"
import Wrapper from "@/components/Wrapper"



export default function Home() {
  const [show, setShow] = useState(false)
  return (
  <main className="bg-back ">
      <Wrapper
        style="sticky top-0 z-10  bg-transparent "
      >
      <Header
        show={show}
        setShow={setShow}
      />
      </Wrapper>
      <Hero />
      <div className="md:-mt-[5rem] ">
      <Faculty/>
      <Impact/>
      </div>
      <Wrapper>
      <News/>
      <Calendar/>
      <Slide/>
      <Look/>
      <Menu/>
      <Footer/>
      </Wrapper>
    </main>
  )
}
