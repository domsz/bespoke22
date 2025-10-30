import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Description, Field, FieldGroup, Label } from '@/components/fieldset'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Textarea } from '@/components/textarea'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact us',
}

export default async function Contact() {
  return (
    <div className="py-10 px-4">
      <Heading>Get in Touch</Heading>
      <div className="mt-6 max-w-3xl space-y-6 text-base/7 text-zinc-700 dark:text-zinc-300">
        <p>
          Contact us today to book a consultation or request a quote. Our team is happy to discuss your specific needs and guide you through the bespoke tailoring process.
        </p>
      </div>

      <FieldGroup className='py-10 max-w-200'>
        <Field>
          <Label>Name</Label>
          <Input name="name" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input name="email" />
        </Field>
        <Field>
          <Label>Company name</Label>
          <Input name="companyName" />
        </Field>
        <Field>
          <Label>Message</Label>
          <Textarea name="message" />
        </Field>
      </FieldGroup>

      <Button aria-label="Send message">
        Submit
      </Button>
    </div>
  )
}
