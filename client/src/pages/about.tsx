import React from 'react'
import type { NextPage } from 'next'
import Header from '@/components/Header'

const AboutPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="card">
          <h1 className="text-4xl mb-8">About D2NG</h1>
          <p className="mb-6">
            D2NG (Dota 2 Nickname Generator) is a tool designed to help players create unique and memorable nicknames for their Dota 2 adventures.
          </p>
        </div>
      </main>
    </div>
  )
}

export default AboutPage 