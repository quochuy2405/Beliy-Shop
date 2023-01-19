import ProductImage from '@/pages/public/product.png'
import Image from 'next/image'

const Product: React.FC = () => {
  const price = 650000
  return (
    <div className="flex-1 max-w-[250px] min-w-[230px]">
      <Image
        src={ProductImage}
        width={200}
        height={200}
        alt="product"
        className="w-full h-[300px] rounded-sm object-cover"
      />
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
