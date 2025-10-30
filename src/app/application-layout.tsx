'use client'

import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { StackedLayout } from '@/components/stacked-layout'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'
import { usePathname } from 'next/navigation'
import { Link } from '@/components/link'
import { Logo } from './logo'
import { Button } from '@/components/button'
import Footer from './footer'

export function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pathname = usePathname()

  const navItems = [
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Clients', url: '/clients' },
    { label: 'Pricing', url: '/pricing' },
  ]

  return (
    <>
      <StackedLayout
        navbar={
          <Navbar>
            <NavbarSection className="shrink-0">
              <Link href="/" aria-label="Home" className='relative z-50'>
                <Logo className="w-12 h-12" />
              </Link>
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection className="max-lg:hidden">
              {navItems.map(({ label, url }) => (
                <NavbarItem key={label} href={url} current={pathname === url}>
                  {label}
                </NavbarItem>
              ))}
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection className="max-lg:hidden">
              <Button href="/contact" aria-label="Get in touch">
                Get in touch
              </Button>
            </NavbarSection>
          </Navbar>
        }
        sidebar={
          <Sidebar>
            {/* <SidebarHeader>
          </SidebarHeader> */}
            <SidebarBody>
              <SidebarSection>
                {navItems.map(({ label, url }) => (
                  <SidebarItem key={label} href={url} current={pathname === url}>
                    {label}
                  </SidebarItem>
                ))}
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </StackedLayout>
      <Footer />
    </>
  )
}
