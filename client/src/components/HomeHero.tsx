import React from 'react'
import Link from 'next/link'

const HomeHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl mb-6 font-onest">
        Dota 2 Nickname Generator
      </h1>
      <p className="text-xl mb-12 max-w-2xl">
        Create unique and stylish nicknames for your Dota 2 adventures. 
        Stand out in the game with a name that matches your playstyle.
      </p>
      <div className="flex gap-6">
        <Link 
          href="/generator" 
          className="button primary text-lg px-8 py-4"
        >
          Create Nickname
        </Link>
        <Link 
          href="/about" 
          className="button text-lg px-8 py-4"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default HomeHero