'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useState } from 'react'
import './css/user.css'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className=" focus-visible:transition-all duration-300 ease-in max-w-[1200px] mb-10 bg-[#f1f5f2] ">
      <div className="flex flex-row gap-14 max-lg:flex-col justify-center items-center h-[100%] ml-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewport={{
            once: true,
          }}
          className="w-[33%] max-lg:w-full max-lg:flex-row flex-col mt-20"
        >
          <h1 className=" text-medium text-6xl">
            Effortlessly plan and track your road trips
          </h1>
          <p className=" text-lg my-[20px]">
            Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
            enim. Eget risus feugiat a mollis tincidunt.
          </p>

          <Button className="text-black p-6 bg-green-500 hover:bg-green-500 relative z-6">
            <Link
              href="/signup"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex flex-row relative z-10 transition-transform duration-300 ${
                  isHovered
                    ? 'transform translate-x-[-10px]'
                    : 'transform translate-x-[10px]'
                }`}
              >
                <Image
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474ad2be5b28261dc761eed_Button%20Arrow.svg"
                  loading="lazy"
                  alt=""
                  height={20}
                  width={20}
                  className={`transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                />{' '}
                <span className="text-base">Get started</span>
                <Image
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474ad2be5b28261dc761eed_Button%20Arrow.svg"
                  loading="lazy"
                  alt=""
                  height={20}
                  width={20}
                  className={`transition-opacity ease-in-out duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="relative underline decoration-zinc-500 decoration-2 text-base top-0 p-6 px-0 mx-6 left-[-20px] bg-transparent z-[5] hover:bg-transparent"
            onClick={() => {
              const element = document.getElementById('features')
              element?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Link href="#features">
              <div className="flex flex-row">
                <div className="h-[20px] w-[20px] opacity-0"></div>
                <span className="text-base">View features</span>
              </div>
            </Link>
          </Button>
        </motion.div>
        <div className="w-[50%] max-lg:w-[83.33%] ml-auto max-lg:m-auto mt-16 bg-inherit">
          <div className="hero-image-wrapper">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7d964bd6918c9bc2_Hero%20Image.webp"
              loading="lazy"
              alt="Empty Nordic road in the mountains"
              srcSet="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7d964bd6918c9bc2_Hero%20Image-p-500.webp 500w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7d964bd6918c9bc2_Hero%20Image-p-800.webp 800w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7d964bd6918c9bc2_Hero%20Image-p-1080.webp 1080w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7d964bd6918c9bc2_Hero%20Image.webp 1600w"
              className="image-fit rounded"
            />
            <img
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/647667d30c45f11e0231916e_Border%20Radius.svg"
              loading="lazy"
              alt=""
              className="image-cutout-radius hero-1-left"
            />
            <img
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/647667d30c45f11e0231916e_Border%20Radius.svg"
              loading="lazy"
              alt=""
              className="image-cutout-radius hero-2-bottom"
            />
            <img
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/647667d30c45f11e0231916e_Border%20Radius.svg"
              loading="lazy"
              alt=""
              className="image-cutout-radius hero-2-top"
            />
            <img
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/647667d30c45f11e0231916e_Border%20Radius.svg"
              loading="lazy"
              alt=""
              className="image-cutout-radius hero-1-right"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d96b6f85eab937f8ff1f_UI%202.svg"
              loading="lazy"
              alt=""
              className="ui-element hero-2"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d96b5ed293caec1ea23d_UI%201.svg"
              loading="lazy"
              alt=""
              className="ui-element hero-1"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              viewport={{
                once: true,
              }}
              className="image-cutout bottom-right"
            >
              <Link
                className="scroll-arrow-wrapper max-w-[100%]"
                href="#features"
              >
                <img
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/647668d40ab89ed483dbc400_Scroll%20Arrow.svg"
                  loading="lazy"
                  alt=""
                />
              </Link>
            </motion.div>
            <div className="image-cutout top-left"></div>
          </div>
        </div>
        <div className="column desktop-2 tablet-12">
          <div className="spacer xl"></div>
        </div>
      </div>
    </div>
  )
}
