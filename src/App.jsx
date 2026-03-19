import './App.css'
import Carta from './components/Carta'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'
import Domicilio from './components/Domicilio'

function App() {
  return (
    <div className="bg-zinc-950 h-auto min-h-screen flex justify-center font-sans">
      <div className="bg-zinc-950 max-w-4xl w-full lg:border-x border-zinc-800/50 shadow-2xl min-h-screen pb-10">
        <Hero />
        <SocialMedia className="" />
        <Domicilio />
        <Carta />
      </div>
    </div>
  )
}

export default App
