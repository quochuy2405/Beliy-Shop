import slider from '@/pages/public/slider.png'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Title from '../atoms/Title'
import { Carousel, Container, GGMap, Product } from '../molecules'

const Home: React.FC = () => {
  const itemTemplate = (value) => {
    return (
      <div className="w-fit mx-auto">
        <Product />
        <p>{value}</p>
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
        className="w-full h-full object-cover rounded-sm"
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
        value={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        autoplayInterval={4000}
        itemTemplate={itemTemplate}
        numVisible={4}
        numScroll={1}
      />
      <div className="mt-5">
        <Title>SẢN PHẨM NỔI BẬT</Title>
        <div
          className={clsx('grid grid-cols-fluid-230 justify-center gap-5 py-4', {
            'sm:justify-between': 'mobile'
          })}
        >
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Title>ÁO HOODIE - HOODIE JACKET</Title>
        <div
          className={clsx('grid grid-cols-fluid-230 justify-center gap-5 py-4', {
            'sm:justify-between': 'mobile'
          })}
        >
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
