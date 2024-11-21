import React from 'react'

const NicknameGenerator: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h1 className="text-4xl mb-8 text-center">Dota 2 Nickname Generator</h1>
        <p className="mb-6 text-center">Create your unique battle name for the world of Dota 2</p>
        <input 
          type="text" 
          className="input"
          placeholder="Enter base word..."
        />
        <button className="button primary w-full">
          Generate Nickname
        </button>
      </div>
    </div>
  )
}

export default NicknameGenerator 