import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import NicknameGenerator from '../components/NicknameGenerator'

const GeneratorPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <NicknameGenerator />
      </main>
    </div>
  )
}

export default GeneratorPage