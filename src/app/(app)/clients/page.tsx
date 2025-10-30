import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clients',
}

export default async function Clients() {


  return (
    <div className="py-10 px-4">
      <Heading>What Our Clients Say</Heading>
      <div className="mt-6 max-w-3xl space-y-6 text-base/7 text-zinc-700 dark:text-zinc-300">
        <p>
          Since we started working with B22, our team uniforms have completely transformed. The custom-tailored garments not only elevate our brand but are also incredibly comfortable for our team. The attention to detail and level of service is second to none.
        </p>
      </div>
    </div>
  )
}
