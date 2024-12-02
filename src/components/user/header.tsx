'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="top-0 z-50 w-full">
      <div className=" justify-center relative top-0 z-50 w-full xl:px-40 transition-all duration-300 ease-out">
        <div className="flex flex-1 justify-center w-full px-40 py-8 sm:px-6 lg:px-8 self-center max-sm:px-4 ">
          <div className="flex flex-1 flex-row items-center justify-center min-h-12 max-w-[1600px] ">
            <div className="flex justify-start">
              <Link href="/">
                <Image
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6476652b9e49d3c3f7a4d121_Tracker%20Logo.svg"
                  alt="Tracker logo"
                  width={172}
                  height={29}
                  className="resize-none items-center relative"
                />
              </Link>
            </div>
            <div className="flex flex-1 justify-center w-[214px] gap-4 max-lg:hidden text-lg font-medium">
              <Link href="#features">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('features')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  Features
                </Button>
              </Link>
              <Link href="#pricing">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('pricing')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  Pricing
                </Button>
              </Link>
              <Link href="#faq">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('faq')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('blog')
                    element?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  Blog
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-lg hover:bg-white">
                  Contact
                </Button>
              </Link>
            </div>

            <div className="gap-4 items-center hidden lg:flex text-lg">
              <Link href="/log-in">
                <Button variant="ghost" className="hover:bg-white text-lg p-6">
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  variant="secondary"
                  className="bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-500 text-lg p-6"
                >
                  Get started
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex flex-1 flex-row-reverse hover:cursor-pointer">
              <svg
                width="70"
                height="45"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="10" x="25" y="20" fill="#86EFAC" />
                <rect width="50" height="10" x="75" y="50" fill="#86EFAC" />
                <rect width="75" height="10" x="50" y="80" fill="#86EFAC" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
