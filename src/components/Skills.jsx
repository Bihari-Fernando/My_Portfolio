import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/JavaScript.png'
import react from '../assets/react.svg'
import tailwind from '../assets/Tailwind CSS.png'
import Vue from '../assets/Vue.js.png'
import PHP from '../assets/PHP.png'
import MongoDB from '../assets/MongoDB.png'
import Java from '../assets/Java.png'
import Electron from '../assets/Electron.png'
import MySQL from '../assets/MySQL.png'
import GitHub from '../assets/GitHub.png'

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 max-w-[1200px] mx-auto p-4 grid grid-cols-6 sm:grid-cols-4 md:grid-cols-6 gap-4 place-items-center" id='skills'>
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold col-span-3 sm:col-span-4 md:col-span-6 text-center">
        My Tech Stacks
      </h2>

      <div className="flex flex-col items-center w-[80px] md:w-[80px]">
        <img src={html} alt="HTML icon" />
        <p className="mt-2">HTML</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={css} alt="CSS icon" width={80} height={80} />
        <p className="mt-2">CSS</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={javascript} alt="JavaScript icon" width={80} height={80} />
        <p className="mt-2">JavaScript</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={react} alt="React icon" width={80} height={80} />
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={tailwind} alt="Tailwind CSS icon" width={80} height={80} />
        <p className="mt-2">Tailwind CSS</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={Vue} alt="Vue icon" width={80} height={80} />
        <p className="mt-2">Vue</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={Java} alt="Java icon" width={80} height={80} />
        <p className="mt-2">Java</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={MongoDB} alt="MongoDB icon" width={80} height={80} />
        <p className="mt-2">MongoDB</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={MySQL} alt="MySQL icon" width={80} height={80} />
        <p className="mt-2">MySQL</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={PHP} alt="PHP icon" width={80} height={80} />
        <p className="mt-2">PHP</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={Electron} alt="Electron icon" width={80} height={80} />
        <p className="mt-2">Electron</p>
      </div>

      <div className="flex flex-col items-center w-[80px] md:w-[100px]">
        <img src={GitHub} alt="GitHub icon" width={80} height={80} />
        <p className="mt-2">GitHub</p>
      </div>
    </div>

  )
}

export default Skills