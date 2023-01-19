import slider from '@/pages/public/slider.png'
import Image from 'next/image'
import { Carousel } from 'primereact/carousel'
import React from 'react'
import Title from '../atoms/Title'
import { Container, Product } from '../molecules'

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]

const Home: React.FC = () => {
  const itemTemplate = () => {
    return <Product />
  }
  return (
    <Container>
      <Image
        src={slider}
        alt="shop"
        width={1000}
        height={800}
        className="w-full h-[40vh] object-cover"
        loading="eager"
        placeholder="blur"
      />
      <Carousel
        className="mt-5"
        value={[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]}
        autoplayInterval={4000}
        itemTemplate={itemTemplate}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
      />
      <div className="mt-5">
        <Title>SẢN PHẨM NỔI BẬT</Title>
        <div className="grid grid-cols-4 gap-5 py-4">
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Title>ÁO HOODIE - HOODIE JACKET</Title>
        <div className="grid grid-cols-4 gap-5 py-4">
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Home
