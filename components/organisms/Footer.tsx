import React from 'react'
import Logo from '@/pages/public/logo.png'
import Image from 'next/image'
import { GoPrimitiveDot } from 'react-icons/go'
import Link from 'next/link'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 h-fit min-h-[40vh] flex justify-between gap-3 border-t-[3px] border-[#6A1212] w-[80%] mx-auto pt-6 font-semibold">
      <div className="flex-1">
        <div className="w-32 relative">
          <Image src={Logo} alt="BeliyShop" />
        </div>
        <div className="mt-5">
          <h2>Ship COD toàn quốc</h2>
          <h2>FREESHIP đơn hàng từ 300.000đ</h2>
        </div>
      </div>
      <div className="flex-1">
        <h2>LIÊN HỆ</h2>
        <ul className="mt-4">
          <li className="flex items-center gap-1">
            <GoPrimitiveDot /> BELIY - INSECT WORLD
          </li>
          <li className="flex items-center gap-1">
            <GoPrimitiveDot /> IA SƯƠM, KRÔNG PA, GIA LAI
          </li>
          <li className="flex items-center gap-1">
            <GoPrimitiveDot /> KTX KHU A - ĐHQG TPHCM, LINH TRUNG, TP.THỦ ĐỨC
          </li>
          <li className="flex items-center gap-1">
            <GoPrimitiveDot /> beliy@clothing.com
          </li>
          <li className="flex items-center gap-1">
            <GoPrimitiveDot /> 0963639201
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2>CHÍNH SÁCH</h2>
        <ul className="mt-4">
          <Link href="#" className="flex items-center gap-1 underline">
            <GoPrimitiveDot /> CHÍNH SÁCH THÀNH VIÊN
          </Link>
          <li className="flex items-center gap-1 underline">
            <GoPrimitiveDot /> CHÍNH SÁCH ĐỔI TRẢ
          </li>
          <li className="flex items-center gap-1 underline">
            <GoPrimitiveDot /> CHÍNH SÁCH VẬN CHUYỂN
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2>ĐĂNG KÝ NHẬN TIN</h2>
        <div className="mt-4 flex flex-col gap-3">
          <p>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa</p>
          <div className="flex">
            <InputText
              type="text"
              className="p-inputtext-sm block mb-2 rounded-none"
              placeholder="Email"
            />

            <Button
              className="p-button-success p-button-sm rounded-none h-11 p-button-outlined"
              label="ĐĂNG KÝ"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
