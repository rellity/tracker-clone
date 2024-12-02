/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'

import { useState } from 'react'

import './css/banner.css'

export default function BannerSection() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="w-[100%] flex flex-1 flex-row justify-between items-center max-lg:w-[90%] max-w-[1600px]">
      <div className="space-y-2 flex flex-1 flex-col w-[70%] justify-center items-center self-start m-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Upgrade your trip experience today
        </h1>
        <Button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-white text-[#00d084] m-7"
        >
          <div
            className={`flex flex-row relative z-10 transition-transform duration-300 items-center ${
              isHovered
                ? 'transform translate-x-[-10px]'
                : 'transform translate-x-[10px]'
            }`}
          >
            <ArrowRightIcon
              className={`w-4 h-4 ml-2 ${
                isHovered ? 'opacity-0' : 'opacity-1'
              }`}
            />
            Get started
            <ArrowRightIcon
              className={`w-4 h-4 ml-2 ${
                isHovered ? 'opacity-1' : 'opacity-0'
              }`}
            />
          </div>
        </Button>
      </div>
      <div className="space-y-2 flex flex-1 w-[70%] justify-items-end self-end">
        <MoveDiagonalIcon
          className="flex flex-1 flex-row-reverse text-white opacity-1"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function MoveDiagonalIcon(props: any) {
  return (
    <svg
      {...props}
      width="722"
      height="399"
      viewBox="0 0 722 399"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M610.327 133.918L403.694 397.749H349.9L556.405 133.918H610.327Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M338.085 264.831L544.589 1H598.512L391.879 264.831H338.085Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M118.19 397.747L428.794 1H482.587L171.983 397.747H118.19Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M946.105 1L687.422 331.289H633.628L892.182 1H946.105Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M830.2 1L519.596 397.747H465.803L776.407 1H830.2Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M2.28716 397.773L260.841 67.4844H314.764L56.0807 397.773H2.28716Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}
