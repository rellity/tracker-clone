'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQs = [
  {
    title: 'How much does Tracker cost?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.',
  },
  {
    title: 'What features are included with Tracker?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.',
  },
  {
    title: 'Will Tracker help me plan my trips?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.',
  },
  {
    title: 'Is there a free version of Tracker?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.',
  },
  {
    title: 'Is Tracker right for the casual vacationer?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus at diam neque habitant eu ultricies fermentum, imperdiet tincidunt. Pharetra aliquam vulputate et nibh quis lacus.',
  },
]

export const FAQsSection = () => {
  return (
    <div
      id="faq"
      className="max-w-[1200px] mx-auto my-8 p-4 flex flex-row flex-1 w-[100%] max-sm:flex-col"
    >
      <div className="max-sm:w-[100%] sm:w-[100%]">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      </div>
      <div className="max-sm:w-[100%] sm:w-[100%] pl-4">
        <h3 className="text-[56px] font-light mb-8 break-before-avoid">
          Answers to your questions
        </h3>
        <div className="space-y-4">
          <FAQItems faqs={FAQs} />
        </div>
      </div>
    </div>
  )
}

function PlusIcon(props: any) {
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
      <path d="M12 5v14" />
    </svg>
  )
}
const FAQItems = ({ faqs }: any) => {
  return (
    <Accordion type="multiple">
      {faqs.map((faq: any, index: any) => (
        <AccordionItem
          key={index}
          value={'item-' + index}
          className="flex flex-row flex-1 data-[state]:flex-col my-4"
        >
          <AccordionTrigger className="flex flex-1 justify-between items-center p-2 cursor-pointer hover:no-underline text-[18px] max-md:text-[16px] font-light whitespace-nowrap">
            {faq.title}
          </AccordionTrigger>

          <AccordionContent className="mt-2 px-2 py-1 text-base font-light">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
