import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {


  return (
    <div className="py-10 px-4">
      <Heading>Crafting Bespoke Workwear for a Luxury Experience</Heading>
      <div className="mt-6 max-w-3xl space-y-6 text-base/7 text-zinc-700">
        <p>
          B22 was founded by Gianni Lilliu in 2017, specialising in boutique tailoring for luxury workwear in the hospitality sector. With a focus on impeccable fit, style, and comfort, we create garments that reflect the professionalism and elegance that your team embodies. Whether you&apos;re outfitting a hotel, restaurant, or corporate professionals, B22&apos;s commitment to craftsmanship ensures that each piece is as unique as your business.
        </p>
        <p>
          Our approach blends traditional tailoring with contemporary design, ensuring that every garment not only fits perfectly but also complements your team&apos;s work environment. We&apos;ve worked with high-profile clients internationally, tailoring solutions that enhance both functionality and presentation. Each garment is crafted with meticulous attention to detail, elevating your team&apos;s image while ensuring comfort and durability.
        </p>
      </div>
    </div>
  )
}
