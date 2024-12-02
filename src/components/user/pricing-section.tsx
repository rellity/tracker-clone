/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CardContent, Card } from '@/components/ui/card'

const PricingSectionITEMS = [
  {
    title: 'Starter',
    price: 8,
    desc: 'Lorem ipsum dolor sit amet consectetur. Molestie risus lorem eratenim.',
    features: [
      'Lorem ipsum dolor',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    title: 'Professional',
    price: 16,
    desc: 'Lorem ipsum dolor sit amet consectetur. Molestie risus lorem eratenim.',
    features: [
      'Lorem ipsum dolor',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor sit',
    ],
  },
]

export const PricingSection = () => {
  const [switcherVal, setSwitcherVal] = useState<boolean>(false)
  return (
    <div
      id="pricing"
      className="bg-white p-8 w-[80%] flex flex-1 flex-col justify-center items-center gap-8 m-auto max-lg:w-[80%] sm:w-[100%] sm:m-0 max-w-[1200px]"
    >
      <div className="text-center w-[90%] flex flex-col justify-center items-center gap-8">
        <h2 className="mt-2 text-3xl font-bold">A plan for everyone</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
          enim. Eget risus feugiat a mollis tincidunt.
        </p>
      </div>
      <div
        className="inline-flex rounded-[48px] shadow-sm bg-slate-300"
        role="group"
      >
        <Button
          className={`px-4 py-2 ${switcherVal ? 'bg-slate-300 text-black' : 'bg-black text-white'}  rounded-[48px] shadow-none`}
          onClick={() => {
            setSwitcherVal(false)
          }}
        >
          Monthly
        </Button>
        <Button
          className={`px-4 py-2 ${switcherVal ? 'bg-black text-white' : 'bg-slate-300 text-black'}  rounded-[48px] shadow-none`}
          onClick={() => {
            setSwitcherVal(true)
          }}
        >
          Annually
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 sm w-[80%] max-sm:w-[100%]">
        <PricingCards items={PricingSectionITEMS} mtype={switcherVal} />
      </div>
    </div>
  )
}

const CheckIcon = (props: any) => {
  return (
    <div className="w-[32px] h-[32px] border border-green-500 rounded-full flex justify-center items-center">
      <img
        {...props}
        alt=""
        loading="lazy"
        src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e4ac7fa9656d9c0eb1_Icon%20Checkmark.svg"
      />
    </div>
  )
}

const PricingCards = ({ items, mtype }: any) => {
  return (
    <>
      {items.map((item: any, index: any) => (
        <Card
          key={index}
          className={`border ${item.title === 'Professional' ? 'border-green-500' : 'bg-grey-200'} shadow-sm rounded-[48px] flex flex-1 flex-col`}
        >
          <CardContent>
            <div className="flex flex-1 w-full h-full max-h-[710px] flex-col p-[48px]">
              <div className="mb-10">
                <p className="inline-block text-black bg-slate-200 p-1.5 rounded-lg text-[14px]">
                  {item.title}
                </p>
              </div>

              <p className="text-4xl font-bold">
                $
                {!mtype
                  ? item.price
                  : item.price == 16
                    ? item.price - 4
                    : item.price - 2}
                /mo
              </p>

              <p className="mt-2 text-gray-600 mb-10 ">{item.desc}</p>

              <div className="space-y-2">
                {item.features.map((feature: any, idx: any) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-base max-sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="secondary"
                className={`bg-green-400 relative mt-[0px] ${item.title === 'Professional' ? 'mt-[150px]' : 'mt-[230px]'} w-full`}
              >
                Get Started
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
