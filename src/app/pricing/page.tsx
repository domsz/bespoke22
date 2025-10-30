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
      <div className="mt-6 max-w-3xl space-y-6 text-base/7 text-zinc-700">
        <p>
          At B22, we believe in offering clear and straightforward pricing for our bespoke services. All pricing is customised per project and is discussed in detail during the consultation. Whether you&apos;re outfitting a single employee or an entire team, our team will work closely with you to ensure the final price aligns with your needs and specifications.
        </p>
      </div>
    </div>
  )
}
