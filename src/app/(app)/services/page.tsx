import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
}

export default async function Services() {


  return (
    <div className="py-10 px-4">
      <Heading>Tailored Solutions to Meet Your Unique Needs</Heading>
      <div className="mt-6 max-w-3xl space-y-6 text-base/7 text-zinc-700 dark:text-zinc-300">
        We offer one-on-one consultations to guide you in selecting the best styles, fabrics, and fits for your team. Our experienced designers will ensure that your workwear meets operational needs while maintaining a luxurious feel. We understand that every business is unique, and we provide personalised recommendations to match your vision.
      </div>
    </div>
  )
}
