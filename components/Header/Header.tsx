import React from 'react'
import './Header.scss'
import Image from 'next/image'

// assets
import UpperLeftImage from '@/public/assets/upper-left.png'
import UpperRightImage from '@/public/assets/upper-right.png'
import Me from '@/public/assets/me.png'

const Header = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center text-center px-4'>
      {/* Decorative Images */}
      <div className='absolute top-0 left-0'>
        <Image
          alt=''
          src={UpperLeftImage}
          width={250}
          height={250}
          priority
          unoptimized
        />
      </div>

      <div className='absolute top-0 right-0'>
        <Image
          src={UpperRightImage}
          alt=''
          width={250}
          height={250}
          priority
          unoptimized
        />
      </div>

      {/* Main Content (NO absolute here) */}
      <div className='mt-20 flex flex-col items-center max-w-2xl space-y-4'>
        <>
          <Image
            src={Me}
            alt='Profile'
            width={250}
            height={250}
            priority
            className='mb-2'
            unoptimized
          />
          <div className='text-lg font-semibold text-[#1E1E1E] leading-relaxed'>
            Kidela Jane Gonzales
          </div>
        </>
        <p className='text-lg text-[#1E1E1E] leading-relaxed'>
          Hi, I’m a Frontend Software Engineer with over 5 years of experience
          and a passion for building high-quality, efficient, and user-centered
          solutions. <br /> I’m leveling up my backend skills to complete the
          journey toward becoming <br /> a strong, end-to-end Full Stack
          Engineer.
        </p>
      </div>
    </div>
  )
}

export default Header
