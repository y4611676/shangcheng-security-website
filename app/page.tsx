import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import FloatingButton from '@/components/FloatingButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Advantages />
      <Services />
      <Contact />
      <FloatingButton />
    </main>
  )
}



