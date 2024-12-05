import './App.css'
import Carta from './components/Carta'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <div className="bg-gray-100 h-auto min-h-screen flex justify-center font-sans">
      <div className="bg-white max-w-4xl w-full shadow-2xl lg:border border-gray-300">
        <Hero />
        <SocialMedia className="" />
        <Carta />
      </div>
    </div>
  )
}

export default App
