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



export default function Home() {
  return (
    <main className="text-main bg-back relative max-w-[1280px] w-full mx-auto">
      <Header/>
      <Hero/>
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
