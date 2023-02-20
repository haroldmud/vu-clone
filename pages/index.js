import Header from "@/components/header"
import Hero from "@/components/hero"
import Faculty from "@/components/faculties"
import Impact from "@/components/impact"


export default function Home() {
  return (
    <main className="text-main">
      <Header/>
      <Hero/>
      <Faculty/>
      <Impact/>
    </main>
  )
}
