import Logo from '@/pages/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FiPhone, FiShoppingCart } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const Header: React.FC = () => {
  return (
    <header className="flex flex-col h-36 backdrop:blur-sm shadow-md px-5 py-3 mb-10">
      <div className="flex justify-between w-[80%] mx-auto">
        <div className="flex gap-1">
          <HiOutlineLocationMarker size={20} color="#6d6d6d" />
          <h2 className="text-sm">Địa chỉ: KTX Khu A - ĐHQG TPHCM, Linh Trung, TP.Thủ Đức</h2>
        </div>
        <div className="flex gap-1">
          <FiPhone size={20} color="#6d6d6d" />
          <h2 className="text-sm">Liên hệ: 0963639201</h2>
        </div>
        <div className="flex gap-1">
          <FaTiktok size={20} color="#6d6d6d" />
          <h2 className="text-sm">Titok: Beliy.scm</h2>
        </div>
        <div className="flex gap-1">
          <BsInstagram size={20} color="#6d6d6d" />
          <h2 className="text-sm">Instagram: _beliy_scm</h2>
        </div>
        <div className="flex gap-1">
          <BsFacebook size={20} color="#6d6d6d" />

          <h2 className="text-sm">Facebook: beliyscm.fb</h2>
        </div>
      </div>
      <div className="flex flex-1 justify-between items-center w-[80%] mx-auto">
        <div className="w-32 relative h-[70%]">
          <Image src={Logo} alt="BeliyShop" />
        </div>
        <div className="flex-1 pt-5">
          <div className="w-[80%] mx-auto flex justify-evenly">
            <Link href="#">Trang chủ</Link>
            <Link href="#">Sản phẩm</Link>
            <Link href="#">Bộ sưu tập</Link>
            <Link href="#">Cửa hàng</Link>
            <Link href="#">Về chúng tôi</Link>
          </div>
        </div>
        <div className="flex gap-1 items-center pt-5">
          <div className="h-4">
            <FiShoppingCart size={18} />
          </div>

          <Link href="#">Giỏ hàng</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
