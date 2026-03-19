import './App.css'
import Carta from './components/Carta'
import Hero from './components/Hero'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <div className="bg-zinc-950 h-auto min-h-screen flex justify-center font-sans">
      <div className="bg-zinc-950 max-w-4xl w-full lg:border-x border-zinc-800/50 shadow-2xl min-h-screen pb-10 flex flex-col">
        <Hero />
        <SocialMedia className="" />
        <Carta />

        <footer className="mt-auto border-t border-zinc-800/50 pt-8 pb-4 text-center px-6 mb-4">
          <p className="text-zinc-500 text-sm font-light tracking-wide">
            Desarrollado por{' '}
            <a
              href="https://portfolio-tomas-castro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500/80 font-semibold hover:text-amber-400 transition-colors"
            >
              Tomas Castro
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
