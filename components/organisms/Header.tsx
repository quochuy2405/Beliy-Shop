import Logo from '@/pages/public/logo.png'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FiPhone, FiShoppingCart } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Badge } from 'primereact/badge'
const Header: React.FC = () => {
  const router = useRouter()
  return (
    <header className="flex flex-col h-36 backdrop:blur-sm shadow-md px-5 py-3 mb-10">
      <div className="flex justify-between w-[80%] mx-auto">
        <div className="flex gap-1">
          <HiOutlineLocationMarker size={18} color="#6d6d6d" />
          <h2 className="text-sm">Địa chỉ: KTX Khu A - ĐHQG TPHCM, Linh Trung, TP.Thủ Đức</h2>
        </div>
        <div className="flex gap-1">
          <FiPhone size={18} color="#6d6d6d" />
          <h2 className="text-sm">Liên hệ: 0963639201</h2>
        </div>
        <div className="flex gap-1">
          <FaTiktok size={18} color="#6d6d6d" />
          <h2 className="text-sm">Titok: Beliy.scm</h2>
        </div>
        <div className="flex gap-1">
          <BsInstagram size={18} color="#6d6d6d" />
          <h2 className="text-sm">Instagram: _beliy_scm</h2>
        </div>
        <div className="flex gap-1">
          <BsFacebook size={18} color="#6d6d6d" />

          <h2 className="text-sm">Facebook: beliyscm.fb</h2>
        </div>
      </div>
      <div className="flex flex-1 justify-between items-center w-[80%] mx-auto">
        <div className="w-32 relative h-[70%]">
          <Image src={Logo} alt="BeliyShop" />
        </div>
        <ul className="flex-1 pt-5 list-none">
          <div className="w-[80%] mx-auto flex justify-evenly">
            <li
              className={clsx({
                'border-b-2 border-gray-800': router.pathname == '/'
              })}
            >
              <Link href="/" className="">
                Trang chủ
              </Link>
            </li>
            <li
              className={clsx({
                'border-b-2 border-gray-800': router.pathname == '/products'
              })}
            >
              <Link href="/products">Sản phẩm</Link>
            </li>
            <li
              className={clsx({
                'border-b-2 border-gray-800': router.pathname == '/collections'
              })}
            >
              <Link href="/collections">Bộ sưu tập</Link>
            </li>
            <li
              className={clsx({
                'border-b-2 border-gray-800': router.pathname == '/stores'
              })}
            >
              <Link href="/stores">Cửa hàng</Link>
            </li>
            <li
              className={clsx({
                'border-b-2 border-gray-800': router.pathname == '/about'
              })}
            >
              <Link href="/about">Về chúng tôi</Link>
            </li>
          </div>
        </ul>
        <Link href="/cart">
          <div className="flex gap-3 items-center pt-5">
            <div className="h-4 relative">
              <FiShoppingCart size={18} />
              <Badge value="2" size="normal" className="absolute -top-4 -right-3 p-badge-danger" />
            </div>
            <p> Giỏ hàng</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
