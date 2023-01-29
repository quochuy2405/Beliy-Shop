import React from 'react'
import Logo from '@/pages/public/logo.png'
import Image from 'next/image'
import { GoPrimitiveDot } from 'react-icons/go'
import Link from 'next/link'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import clsx from 'clsx'

const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        'mt-10 h-fit min-h-[40vh] border-t-[3px] border-[#6A1212] w-[80%] mx-auto pt-6 font-semibold text-sm pb-5',
        {
          'md:flex md:flex-row md:justify-between md:gap-3': 'ipad',
          'sm:flex sm:flex-col': 'mobile',
          'flex flex-col': 'any'
        }
      )}
    >
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
          <div
            className={clsx('flex flex-col', {
              'md:flex md:flex-row': 'ipad',
              'sm:flex sm:flex-row': 'mobile'
            })}
          >
            <InputText
              type="text"
              className={clsx({
                'p-inputtext-sm block mb-2 rounded-none h-11 w-full': 'any',
                'md:w-64': 'ipad',
                'sm:w-64': 'mobile'
              })}
              placeholder="Email"
            />

            <Button
              className={clsx({
                'md:ml-1 md:!w-36': 'ipad',
                'sm:ml-1 sm:!w-36': 'mobile',
                'p-button-success p-button-sm rounded-none h-11 p-button-outlined w-full': 'any'
              })}
              label="ĐĂNG KÝ"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
