import ProductImage from '@/pages/public/product.png'
import Image from 'next/image'

const Collection: React.FC = () => {
  return (
    <div className="flex-1 max-w-[500px] min-w-[230px] relative">
      <Image
        src={ProductImage}
        width={200}
        height={200}
        alt="product"
        className="w-full h-full rounded-sm object-cover"
      />
      <div className=" absolute z-10 top-0 w-full  h-full font-medium flex items-center justify-center">
        <h1 className="uppercase flex justify-between text-2xl text-white italic font-extrabold">
          COLLECTION
        </h1>
      </div>
    </div>
  )
}
export default Collection
