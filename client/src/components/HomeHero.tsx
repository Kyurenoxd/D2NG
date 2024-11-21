import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Wand2, Sparkles, Crown, Rocket, Zap, Shield, Star, Infinity, Award } from 'lucide-react'
import { FaDiscord, FaTelegram } from 'react-icons/fa'
import Image from 'next/image'

const HomeHero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [prevWord, setPrevWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const words = [
    {
      text: "Лучший",
      icon: <Crown size={32} className="text-yellow-400" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      text: "Продвинутый",
      icon: <Rocket size={32} className="text-orange-400" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      text: "Передовой",
      icon: <Zap size={32} className="text-amber-400" />,
      color: "from-amber-400 to-amber-600"
    },
    {
      text: "Прогрессивный",
      icon: <Rocket size={32} className="text-yellow-500 rotate-45" />,
      color: "from-yellow-500 to-yellow-700"
    },
    {
      text: "Идеальный",
      icon: <Star size={32} className="text-amber-300" />,
      color: "from-amber-300 to-amber-500"
    },
    {
      text: "Безупречный",
      icon: <Shield size={32} className="text-orange-300" />,
      color: "from-orange-300 to-orange-500"
    },
    {
      text: "Совершенный",
      icon: <Award size={32} className="text-yellow-300" />,
      color: "from-yellow-300 to-yellow-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevWord(currentWord);
      setCurrentWord((prev) => (prev + 1) % words.length);
      setIsAnimating(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentWord]);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="space-y-2 mb-16">
        <div className="h-[100px] relative overflow-hidden">
          {isAnimating && (
            <div 
              className="absolute top-0 left-0 w-full animate-slide-down-out"
              onAnimationEnd={() => setIsAnimating(false)}
            >
              <div className="flex items-center justify-center gap-3">
                {words[prevWord].icon}
                <span className={`text-5xl font-bold bg-gradient-to-r ${words[prevWord].color} text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]`}>
                  {words[prevWord].text}
                </span>
              </div>
            </div>
          )}
          <div className={`absolute top-0 left-0 w-full ${isAnimating ? 'animate-slide-down-in' : ''}`}>
            <div className="flex items-center justify-center gap-3">
              {words[currentWord].icon}
              <span className={`text-5xl font-bold bg-gradient-to-r ${words[currentWord].color} text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]`}>
                {words[currentWord].text}
              </span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl font-onest relative animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#C4B454] via-[#E2A254] to-[#C4B454] bg-300% drop-shadow-[0_0_10px_rgba(196,180,84,0.3)]">
          DOTA 2 NICKNAME GENERATOR
        </h1>
      </div>

      <p className="text-xl mb-8 max-w-2xl">
        Создавайте уникальные zxc 1000-7 никнеймы чтобы стать<br/>
        настоящим pain drill dead inside
      </p>

      <div className="text-sm text-text-gray mb-12">
        <span>1000-7?</span>
      </div>

      <div className="main-buttons flex gap-4 items-center">
        <Link 
          href="/generator" 
          className="main-button group px-8 py-4 bg-[#18100a] border-2 border-[#331a0b] rounded-xl text-white transition-all duration-200 hover:bg-[#251510] hover:border-[#4a2610] hover:text-text-gray transform active:scale-95 flex items-center gap-2"
        >
          <Wand2 size={24} strokeWidth={1.5} />
          <span className="font-onest">Генерировать</span>
        </Link>

        <div className="social-buttons flex gap-4">
          <Link 
            href="https://discord.gg/your-server" 
            target="_blank"
            className="p-2.5 bg-[#0c101b] border-2 border-[#101a3c] rounded-xl text-text-gray transition-all duration-200 hover:bg-[#131b2e] hover:border-[#1a2959] hover:text-white transform active:scale-95"
          >
            <FaDiscord size={24} />
          </Link>
          <Link 
            href="https://t.me/your-channel" 
            target="_blank"
            className="p-2.5 bg-[#0a1217] border-2 border-[#09222f] rounded-xl text-text-gray transition-all duration-200 hover:bg-[#111e27] hover:border-[#0d3344] hover:text-white transform active:scale-95"
          >
            <FaTelegram size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero