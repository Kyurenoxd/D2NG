import React from 'react'
import type { NextPage } from 'next'
import Header from '@/components/Header'

const SuggestPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="card">
          <h1 className="text-4xl mb-8">Suggest a Nickname</h1>
          <p className="mb-6">
            Have a great nickname idea? Share it with the community!
          </p>
          <input 
            type="text" 
            className="input"
            placeholder="Enter your nickname suggestion..."
          />
          <button className="button primary w-full">
            Submit Suggestion
          </button>
        </div>
      </main>
    </div>
  )
}

export default SuggestPage 