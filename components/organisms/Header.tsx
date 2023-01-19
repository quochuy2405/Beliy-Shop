import Logo from '@/pages/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiShoppingBag2Line } from 'react-icons/ri'
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center flex-col gap-3 h-36 backdrop:blur-sm shadow-md px-5">
      <div className="w-full h-3/4 flex items-center justify-between">
        <div className="flex gap-6 flex-1">
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker />
            <h3 className="text-sm">
              Địa chỉ: <span>KTX Khu A - ĐHQG TPHCM</span>
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlinePhone />
            <h3 className="text-sm">
              Liên hệ: <span>0963639201</span>
            </h3>
          </div>
        </div>
        <div className="flex-1 h-full items-center flex justify-center">
          <div className="w-36 h-fit">
            <Image src={Logo} alt="Beliy" />
          </div>
        </div>
        <div className="flex gap-6 flex-1">
          <div className="flex items-center gap-1">
            <div className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Search" className="w-12 h-9 text-sm" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <BiUser />
            <h3>Tải khoản</h3>
          </div>
          <div className="flex items-center gap-1">
            <RiShoppingBag2Line />
            <h3>Giỏ hàng</h3>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-between h-1/4">
        <Link href="#" className="uppercase text-xs font-semibold">
          Trang chủ
        </Link>
        <Link href="#" className="uppercase text-xs font-semibold">
          Về chúng tôi
        </Link>
        <Link href="#" className="uppercase text-xs font-semibold">
          All sale
        </Link>
        <Link href="#" className="uppercase text-xs font-semibold">
          New arrival
        </Link>
        <Link href="#" className="uppercase text-xs font-semibold">
          Liên hệ
        </Link>
      </div>
    </header>
  )
}

export default Header
