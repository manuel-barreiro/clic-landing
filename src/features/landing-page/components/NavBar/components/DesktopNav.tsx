import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function DesktopNav ({ scrolled }: { scrolled: boolean }): React.ReactElement {
  return (
    <nav className={cn(
      'fixed left-0 right-0 top-0 z-50 hidden  justify-between items-center border-b-2 border-background px-20 py-8 font-thin text-background transition-all duration-300 ease-in-out xl:flex text-xl',
      scrolled
        ? 'backdrop-blur-md bg-accent/80 shadow-lg'
        : 'bg-transparent'
    )}
    >
      <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-12 transition'>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#brand'>Brand</Link>
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#quienesSomos'>Quiénes Somos</Link>
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#servicios'>Niveles</Link>
        </li>
      </ul>

      <Link href='/#home'>
        <Image
          src='/logo_nav.png'
          width={120}
          height={120}
          alt='Clic Pilates Logo'
          className='animate-fade animate-normal animate-duration-[3000ms] animate-fill-both animate-once ease-in-out'
        />
      </Link>

      <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-12 transition'>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#paquetes'>Pilates</Link>
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#contacto'>Franquicias</Link>
        </li>

        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/sign-in'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
