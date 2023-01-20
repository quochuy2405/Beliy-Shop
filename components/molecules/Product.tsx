import ProductImage from '@/pages/public/product.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
const Product: React.FC = () => {
  const toast = useRef<Toast>()
  const price = 650000
  const onAddToCart = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Đã thêm vào giỏ hàng',
      detail: 'Vừa thêm hoodie vào giỏ hàng'
    })
  }
  return (
    <div className="flex-1 max-w-[250px] min-w-[230px] relative box-product">
      <Toast ref={toast} position="top-right" />
      <Image
        src={ProductImage}
        width={200}
        height={200}
        alt="product"
        className="w-full h-[300px] rounded-sm object-cover "
      />
      <div className="absolute top-0 flex opacity-0 duration-200 ease-out items-center justify-evenly w-full h-full view-product">
        <Link href={`/products/1`}>
          <Button className="text-xs p-2 p-button-danger rounded-sm" label="Xem sản phẩm" />
        </Link>
        <Button
          className="text-xs p-2 p-button-danger  rounded-sm"
          label="Thêm vào giỏ hàng"
          onClick={onAddToCart}
        />
      </div>
      <div className="w-full font-medium">
        <div className="uppercase flex justify-between">
          <h1>SMILEY FACE HOODIE</h1>
          <p>
            {price.toLocaleString('vi', {
              maximumFractionDigits: 9,
              currency: 'VND',
              style: 'currency'
            })}
          </p>
        </div>
        <p className="text-sm opacity-80">HOODIE</p>
      </div>
    </div>
  )
}

export default Product
