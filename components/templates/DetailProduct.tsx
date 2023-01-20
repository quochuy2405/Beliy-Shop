import ProductImage from '@/pages/public/product.png'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Galleria } from 'primereact/galleria'
import React from 'react'
import { Container } from '../molecules'
import BreadCrumb, { BreadCrumbItem } from '../molecules/Breadcrumb'

const breadcrumbs: Array<BreadCrumbItem> = [
  {
    label: 'Trang chủ',
    url: '/'
  },
  {
    label: 'Hoodie'
  }
]

const DetailProduct: React.FC = () => {
  const price = 650000
  const details = ['Chất liệu: nỉ bông', 'Họa tiết: trơn', 'Size: S M L']
  const itemTemplate = () => {
    return (
      <div className="w-full h-full">
        <Image
          src={ProductImage}
          width={400}
          height={400}
          alt="product"
          className="w-full h-full rounded-sm object-contain"
        />
      </div>
    )
  }
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

  const thumbnailTemplate = () => {
    return (
      <div className="w-[100px] h-[130px] overflow-hidden">
        <Image
          src={ProductImage}
          width={200}
          height={200}
          alt="product"
          className="w-[100px] flex-1 rounded-sm object-cover overflow-hidden "
        />
      </div>
    )
  }
  const images = [1, 2, 3, 4]
  return (
    <Container>
      <BreadCrumb items={breadcrumbs} />
      <div className="flex">
        <div className="w-full h-[80vh] relative flex-1">
          <Galleria
            value={images}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            numVisible={5}
            responsiveOptions={responsiveOptions}
            thumbnailsPosition="left"
            showThumbnailNavigators={false}
            className="h-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-medium">Áo hoodie Beliy Session 1</h2>
          <p className="text-red-500 text-lg font-normal">
            {price.toLocaleString('vi', {
              maximumFractionDigits: 9,
              currency: 'VND',
              style: 'currency'
            })}
          </p>
          <div className="flex gap-4 mt-6">
            <p>SIZE:</p>
            <div className="flex w-[140px] gap-2">
              <Button label="S" className="p-0 w-9 h-9" />
              <Button label="M" className="p-0 w-9 h-9" />
              <Button label="L" className="p-0 w-9 h-9" />
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium">Thông tin sản phẩm:</p>
            <div className="flex flex-col gap-2 mt-2">
              {details.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <></>
    </Container>
  )
}

export default DetailProduct
