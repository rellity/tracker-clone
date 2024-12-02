/* eslint-disable @next/next/no-img-element */
'use client'
import { motion, useScroll, useTransform, useWillChange } from 'framer-motion'
import Link from 'next/link'

export const ScrollingSection = () => {
  const willChange = useWillChange()
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <motion.div
      style={{ x }}
      initial={{ x: -200 }}
      className="text-black text-8xl font-medium justify-center items-center h-full w-[1800px] bg-white flex flex-1 flex-row hover:text-green-500 my-10 gap-32"
    >
      <Link
        href="#features"
        className="flex flex-row items-center justify-center"
      >
        <h1 className="whitespace-nowrap">Get Started</h1>
        <img
          src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e49b3210bd809e091d_Icon%20Arrow%20Large.svg"
          loading="lazy"
          alt=""
          className="w-[104px] h-[104px]"
        />
      </Link>
      <Link
        href="#features"
        className="flex flex-row items-center justify-center"
      >
        <h1 className="whitespace-nowrap">Get Started</h1>
        <img
          src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e49b3210bd809e091d_Icon%20Arrow%20Large.svg"
          loading="lazy"
          alt=""
          className="w-[104px] h-[104px]"
        />
      </Link>
      <Link
        href="#features"
        className="flex flex-row items-center justify-center"
      >
        <h1 className="whitespace-nowrap">Get Started</h1>
        <img
          src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e49b3210bd809e091d_Icon%20Arrow%20Large.svg"
          loading="lazy"
          alt=""
          className="w-[104px] h-[104px]"
        />
      </Link>
      <Link
        href="#features"
        className="flex flex-row items-center justify-center"
      >
        <h1 className=" whitespace-nowrap">Get Started</h1>
        <img
          src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e49b3210bd809e091d_Icon%20Arrow%20Large.svg"
          loading="lazy"
          alt=""
          className="w-[104px] h-[104px]"
        />
      </Link>
    </motion.div>
  )
}
