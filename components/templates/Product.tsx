import { dataTree } from '@/constants/product'
import slider from '@/pages/public/slider.png'
import Image from 'next/image'
import { Paginator } from 'primereact/paginator'
import { Tree } from 'primereact/tree'
import React from 'react'
import Title from '../atoms/Title'
import { Container, Product } from '../molecules'
import BreadCrumb, { BreadCrumbItem } from '../molecules/Breadcrumb'

const breadcrumbs: Array<BreadCrumbItem> = [
  {
    label: 'Trang chủ',
    url: '/'
  },
  {
    label: 'Tất cả sản phẩm'
  }
]
const Products: React.FC = () => {
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
      <div className="w-full flex my-3 gap-4">
        <Tree value={dataTree} className="sticky h-screen top-3 w-[240px] mt-8" />
        <div className="flex-1">
          <Title>TẤT CẢ SẢN PHẨM</Title>

          <div className="grid grid-cols-fluid justify-between py-5">
            {[...Array(10)].map((_, index) => (
              <Product key={index} />
            ))}
          </div>

          <Paginator first={1} rows={10} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} />
        </div>
      </div>
    </Container>
  )
}

export default Products
