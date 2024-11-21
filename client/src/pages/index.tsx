import type { NextPage } from 'next'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4">
        <HomeHero />
      </main>
    </div>
  )
}

export default Home 