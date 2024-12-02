import BannerSection from '@/components/user/banner-section'
import BlogSection from '@/components/user/blog-section'
import { FAQsSection } from '@/components/user/faqs-section'
import FooterSection from '@/components/user/footer'
import { Header } from '@/components/user/header'
import { HeroSection } from '@/components/user/hero-section'
import { PricingSection } from '@/components/user/pricing-section'
import { ScrollingSection } from '@/components/user/scrolling-section'

import { MiniSectionOne } from '@/components/user/subsection-mini-one'
import { SubsectionOne } from '@/components/user/subsection-one'

export default function Home() {
  return (
    <div>
      <>
        <Header />
      </>
      <main className="flex min-h-screen flex-col  p-0 bg-white">
        <section className="flex flex-1 bg-[#f1f5f2] w-full justify-center">
          <HeroSection />
        </section>

        <section className="flex flex-1 bg-white w-full items-center justify-center">
          <SubsectionOne />
        </section>
        <section className="bg-white w-full items-center justify-center relative py-20 overflow-hidden">
          <MiniSectionOne />
          <ScrollingSection />
        </section>
        <section className="flex flex-1 bg-[#f1f5f2] w-full justify-center">
          <BlogSection />
        </section>
        <section className="flex flex-1 bg-white w-full justify-center">
          <PricingSection />
        </section>
        <section className="flex flex-1 bg-[#ffffff] w-full justify-center">
          <FAQsSection />
        </section>
        <section className="bg-green-500 p-10 px-0 text-white flex flex-1 items-center justify-center">
          <BannerSection />
        </section>
      </main>
      <>
        <FooterSection />
      </>
    </div>
  )
}
