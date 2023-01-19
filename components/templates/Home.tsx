import Image from 'next/image'
import React from 'react'
import slider from '@/pages/public/slider.png'

const Home: React.FC = () => {
  return (
    <div>
      <Image
        src={slider}
        alt="shop"
        width={1000}
        height={800}
        className="w-full h-[80vh] object-contain"
        loading="eager"
        placeholder="blur"
      />
    </div>
  )
}

export default Home
