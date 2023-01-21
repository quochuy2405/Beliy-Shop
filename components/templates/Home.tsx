import slider from '@/pages/public/slider.png'
import Image from 'next/image'
import React from 'react'
import Title from '../atoms/Title'
import { Carousel, Container, GGMap, Product } from '../molecules'

const Home: React.FC = () => {
  const itemTemplate = () => {
    return (
      <div>
        <Product />
      </div>
    )
  }
  const sliderHome = () => {
    return (
      <Image
        src={slider}
        alt="shop"
        width={1000}
        height={800}
        className="w-full h-[40vh] object-cover rounded-sm"
        loading="eager"
        placeholder="blur"
      />
    )
  }
  return (
    <Container>
      <Carousel
        className="mt-5"
        value={[1, 2, 3, 4]}
        showIndicators={false}
        showNavigators={false}
        autoplayInterval={5000}
        itemTemplate={sliderHome}
      />
      <Carousel
        className="mt-5 md:w-[100%]"
        value={[1, 2, 3, 4, 1, 2, 3]}
        autoplayInterval={4000}
        itemTemplate={itemTemplate}
        numVisible={4}
        numScroll={1}
      />
      <div className="mt-5">
        <Title>SẢN PHẨM NỔI BẬT</Title>
        <div className="grid grid-cols-fluid-230 justify-between gap-5 py-4">
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Title>ÁO HOODIE - HOODIE JACKET</Title>
        <div className="grid grid-cols-fluid-230 justify-between gap-5 py-4">
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
      <GGMap />
    </Container>
  )
}

export default Home
