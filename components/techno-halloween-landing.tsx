'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function TechnoHalloweenLanding() {
  const [secretCode, setSecretCode] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [glitchText, setGlitchText] = useState('BOOBASH')

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
      let newText = ''
      for (let i = 0; i < 15; i++) {
        newText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
      }
      setGlitchText(newText)
    }, 100)

    setTimeout(() => {
      clearInterval(glitchInterval)
      setGlitchText('BOOBASH')
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (secretCode === 'BOO') {
      setName('')
      setEmail('')
      setSecretCode('')
      toast.success('ACCESS GRANTED. PLEASE REVIEW YOUR EMAIL.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'bg-purple-900 text-orange-500 font-mono',
      })
    } else {
      toast.error('ACCESS DENIED. RETRY.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'bg-purple-900 text-orange-500 font-mono',
      })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden font-mono">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >
        <source src="/hypnotic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 min-h-screen bg-black bg-opacity-70 text-orange-500 flex flex-col items-center justify-center pb-32">
        <ToastContainer />
          <img src="/mr.png" alt="mirespawn logo" className="w-20 object-center " />
        <p className="text-m md:text-l mb-8 text-center font-bold tracking-widest text-slate-50 ">
          MiRespawn Presents:
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold text-center relative overflow-hidden">
        <div className="flex justify-center items-center">
          <img src="/logo.png" alt="boobash logo" className="min-w-[200px] w-11/12 sm:w-10/12 md:w-10/12 lg:w-5/12 object-center " />
        </div>
          {/* <span className="block transform hover:scale-105 transition-transform duration-300 hover:text-purple-500">
            {glitchText}
          </span> */}
          {/* <span className="absolute top-0 left-0 right-0 bottom-0 bg-orange-500 mix-blend-multiply animate-pulse"></span> */}
        </h1>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-center font-bold tracking-widest">
            AIZAK | OFFLIN3 SOULS | LICHII | PAPINTOR
          </p>
        </div>

        <div className=' bg-purple-950 bg-opacity-60 py-2 backdrop-blur-sm rounded-xl mb-5 mt-5 text-center px-10'>
          <p className="text-xl mb-2 tracking-widest">SAT 26.10.2024 @CDMX Secret Location</p>
        </div>

        <img src="/teeth.png" alt="uppterteeth" className='max-w-md  z-40 mb-[-150px]' />
        <div className=" w-full max-w-md bg-purple-950 bg-opacity-60 p-8 backdrop-blur-sm mb-8 border border-orange-500 pb-28 pt-20">
          <h2 className="text-3xl font-bold mb-6 text-center tracking-wider">REGISTER</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="secretCode" className="text-orange-500 uppercase tracking-wide">Secret Code</Label>
              <Input
                id="secretCode"
                type="password"
                placeholder="ENTER THE BASS CODE"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                className="bg-black bg-opacity-50 text-orange-500 placeholder-orange-700 border-orange-500 uppercase"
                required
                autoComplete="false"
              />
            </div>
            <div>
              <Label htmlFor="name" className="text-orange-500 uppercase tracking-wide">NAME</Label>
              <Input
                id="name"
                type="text"
                placeholder="YOUR ALIAS"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black bg-opacity-50 text-orange-500 placeholder-orange-700 border-orange-500 uppercase"
                required
                autoComplete="false"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-orange-500 uppercase tracking-wide">EMAIL</Label>
              <Input
                id="email"
                type="email"
                placeholder="YOUR@EMAIL.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black bg-opacity-50 text-orange-500 placeholder-orange-700 border-orange-500 uppercase"
                required
                autoComplete="false"
              />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold tracking-widest z-50">
              GO BOOBASH
            </Button>
          </form>
        </div>
        <img src="/teeth2.png" alt="uppterteeth" className='max-w-md z-40 mt-[-150px]' />
      </div>
    </div>
  )
}