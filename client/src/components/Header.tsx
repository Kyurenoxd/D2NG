import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Wand2, Lightbulb, LogIn } from 'lucide-react'

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`relative w-12 h-12 rounded-full bg-[#0d0d0d] overflow-hidden ${isHovered ? 'border-2 border-[#2a2a2a]' : ''}`}>
              <Image 
                src="https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b7/Demon_Eater_Shadow_Fiend_minimap_icon.png"
                alt="Shadow Fiend Icon"
                width={48}
                height={48}
                className={`object-contain absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              />
              <Image 
                src="https://static.wikia.nocookie.net/dota2_gamepedia/images/d/da/Demon_Eater_portrait.gif"
                alt="Shadow Fiend Animated"
                width={48}
                height={48}
                className={`object-contain absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </Link>
          <nav className="flex gap-12 font-onest ml-16 text-lg">
            <Link 
              href="/" 
              className="text-text-gray transition-all duration-300 transform active:scale-95 flex items-center gap-3 group"
            >
              <div className="hover:animate-shake">
                <Home size={24} strokeWidth={1.5} className="group-hover:animate-shake" />
              </div>
              <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">Главная</span>
            </Link>
            <Link 
              href="/generator" 
              className="text-text-gray transition-all duration-300 transform active:scale-95 flex items-center gap-3 group"
            >
              <div className="relative">
                <Wand2 
                  size={24} 
                  strokeWidth={1.5} 
                  className="group-hover:text-purple-400 transition-colors duration-300"
                />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-magic-particle-1"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-magic-particle-2"></div>
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-magic-particle-3"></div>
              </div>
              <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">Генератор</span>
            </Link>
            <Link 
              href="/suggest" 
              className="text-text-gray transition-all duration-300 transform active:scale-95 flex items-center gap-3 group"
            >
              <div className="relative">
                <Lightbulb 
                  size={24} 
                  strokeWidth={1.5} 
                  className="group-hover:text-yellow-400 transition-colors duration-300"
                />
                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/20 rounded-full blur-md transition-all duration-300"></div>
              </div>
              <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">Предложить ник</span>
            </Link>
          </nav>
        </div>
        <Link 
          href="/auth" 
          className="flex items-center gap-2 px-6 py-2.5 bg-[#18100a] border-2 border-[#331a0b] rounded-xl text-white transition-all duration-200 hover:bg-[#251510] hover:border-[#4a2610] hover:text-text-gray transform active:scale-95 group"
        >
          <LogIn size={24} strokeWidth={1.5} />
          <span className="font-onest group-hover:translate-x-0.5 transition-transform duration-300">Авторизация</span>
        </Link>
      </div>
    </header>
  )
}

export default Header 