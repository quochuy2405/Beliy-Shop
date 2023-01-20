import Product from '@/pages/public/product.png'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Rating } from 'primereact/rating'
import React, { useState } from 'react'
import Title from '../atoms/Title'
import { Container } from '../molecules'
import BreadCrumb, { BreadCrumbItem } from '../molecules/Breadcrumb'

const breadcrumbs: Array<BreadCrumbItem> = [
  {
    label: 'Trang chủ',
    url: '/'
  },
  {
    label: 'Giỏ hàng'
  }
]
const About: React.FC = () => {
  const [products] = useState([
    {
      name: 'Áo hoodie',
      image: Product,
      price: 650000,
      category: 'Hoodie',
      rating: 4,
      status: 'Còn'
    },
    {
      name: 'Áo hoodie',
      image: Product,
      price: 650000,
      category: 'Hoodie',
      rating: 4,
      status: 'Còn'
    },
    {
      name: 'Áo hoodie',
      image: Product,
      price: 650000,
      category: 'Hoodie',
      rating: 4,
      status: 'Còn'
    }
  ])

  const formatCurrency = (value) => {
    return value.toLocaleString('vi', { style: 'currency', currency: 'VND' })
  }

  const imageBodyTemplate = (rowData) => {
    return <Image src={rowData.image} className="h-52 w-40" alt={rowData.name} />
  }

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price)
  }

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />
  }

  const statusBodyTemplate = (rowData) => {
    return <span className={`product-badge status-success`}>{rowData.status}</span>
  }

  const sumPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)
  const header = <div className="table-header">Sản phẩm đã chọn</div>
  const footer = `Tổng cộng:  ${products ? products.length : 0} sản phẩm.`
  return (
    <Container>
      <BreadCrumb items={breadcrumbs} />
      <Title>Giỏ hàng của bạn</Title>
      <div className="mt-3">
        <div className="card">
          <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
            <Column field="name" header="Tên"></Column>
            <Column header="Hình Ảnh" body={imageBodyTemplate}></Column>
            <Column field="price" header="Giá" body={priceBodyTemplate}></Column>
            <Column field="category" header="Loại"></Column>
            <Column field="rating" header="Đánh giá" body={ratingBodyTemplate}></Column>
            <Column header="Tình trạng" body={statusBodyTemplate}></Column>
          </DataTable>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex w-[40%] flex-col my-5">
            <div className="flex gap-2 border p-2">
              <p>Tạm tính:</p>
              <p>{sumPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
            </div>
            <div className="flex border p-2 gap-2">
              <p>Tổng tiền thanh toán: </p>
              <p>{sumPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
            </div>
          </div>

          <Button label="Thanh toán" className="p-button-danger w-[40%] h-10" />
        </div>
      </div>
    </Container>
  )
}

export default About
