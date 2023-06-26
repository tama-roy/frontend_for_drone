import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
        <div className="app">
      <h1>Face Recognition Dashboard</h1>
      <div className="camera-feed">
        <div className="face-rectangle"></div>
      
    <div className="flex items-center justify-center h-screen">
      <div className="w-100 h-64 border border-gray-100 rounded-lg overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted></video>
      </div>
    </div>
    </div>
    </div>
   </>
  )
  
}

export default App;
