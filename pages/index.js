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
import Show from "@/components/show"



export default function Home() {
  const [show, setShow] = useState(false)
  return (
    <main className="text-main bg-back relative max-w-[1280px] w-full mx-auto">
      <Header
        show={show}
        setShow={setShow}
      />
      <Hero />
      <div className="md:-mt-[5rem] ">
      <Faculty/>
      <Impact/>
      </div>
      <News/>
      <Calendar/>
      <Slide/>
      <Look/>
      <Menu/>
      <Footer/>
    </main>
  )
}
