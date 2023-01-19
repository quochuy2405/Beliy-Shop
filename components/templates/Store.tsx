import slider from '@/pages/public/slider.png'
import Image from 'next/image'
import React from 'react'
import Title from '../atoms/Title'
import { Container } from '../molecules'

const Stores: React.FC = () => {
  return (
    <Container>
      <></>
      <div className="mt-5 w-full">
        <div className="flex justify-center">
          <Title className="text-3xl" border={false}>
            CỬA HÀNG
          </Title>
        </div>
        <Image
          src={slider}
          alt="shop"
          width={1000}
          height={800}
          className="w-full h-[100vh] object-fill mt-4"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </Container>
  )
}

export default Stores
