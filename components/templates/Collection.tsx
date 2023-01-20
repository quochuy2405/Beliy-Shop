import Image from 'next/image'
import React from 'react'
import Title from '../atoms/Title'
import { Collection, Container } from '../molecules'
import slider from '@/pages/public/slider.png'
import BreadCrumb, { BreadCrumbItem } from '../molecules/Breadcrumb'

const breadcrumbs: Array<BreadCrumbItem> = [
  {
    label: 'Trang chủ',
    url: '/'
  },
  {
    label: 'Bộ sưu tập'
  }
]
const Collections: React.FC = () => {
  return (
    <Container>
      <BreadCrumb items={breadcrumbs} />
      <Image
        src={slider}
        alt="shop"
        width={1000}
        height={800}
        className="w-full h-[40vh] object-fill"
        loading="eager"
        placeholder="blur"
      />
      <div className="mt-5 w-full">
        <div className="flex justify-center">
          <Title className="text-3xl" border={false}>
            BỘ SƯU TẬP
          </Title>
        </div>
        <div className="grid grid-cols-3 gap-5 py-4 my-4">
          {[...Array(6)].map((_, index) => (
            <Collection key={index} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Collections
