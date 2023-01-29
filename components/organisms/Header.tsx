import Logo from '@/pages/public/logo.png'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FiPhone, FiShoppingCart } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Badge } from 'primereact/badge'
import { Sidebar } from 'primereact/sidebar'
import { HiBars4 } from 'react-icons/hi2'
const Header: React.FC = () => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const handleSidebarOpen = () => {
    setVisible(true)
  }
  const handleSidebarClose = () => {
    setVisible(false)
  }
  return (
    <header className={clsx('flex flex-col h-fit backdrop:blur-sm shadow-md py-3 mb-10')}>
      <div
        className={clsx({
          'lg:flex lg:w-[80%]': 'laptop',
          'sm:px-5': 'mobile',
          'md:flex md:w-[95%]': 'ipad',
          'hidden mb-2 gap-1 justify-between w-[80%] mx-auto': 'any'
        })}
      >
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
        <div
          className={clsx({
            'w-32 relative h-[70%]': 'any',
            'lg:w-32': 'laptop',
            'md:w-28': 'ipad',
            'sm:w-20': 'mobile'
          })}
        >
          <Image src={Logo} alt="BeliyShop" />
        </div>
        <ul
          className={clsx({
            'md:!flex': 'ipad',
            'sm:hidden': 'mobile',
            'flex-1 pt-5 list-none hidden': 'any'
          })}
        >
          <div
            className={clsx({
              'lg:w-[80%]': 'ipad',
              'md:w-[90%]': 'mobile',
              'w-[80%] mx-auto flex justify-evenly gap-2': 'any'
            })}
          >
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
        <div className="flex items-center gap-5 pt-5">
          <Link href="/cart">
            <div className="flex gap-3 items-center">
              <div className="h-4 relative">
                <FiShoppingCart size={18} />
                <Badge
                  value="2"
                  size="normal"
                  className="absolute -top-4 -right-3 p-badge-danger"
                />
              </div>
              <p
                className={clsx({
                  'sm:block': 'mobile',
                  hidden: 'any'
                })}
              >
                {' '}
                Giỏ hàng
              </p>
            </div>
          </Link>
          <div
            className={clsx({
              'cursor-pointer': 'any',
              'md:hidden': 'mobile'
            })}
            onClick={handleSidebarOpen}
          >
            <HiBars4 size={30} />
          </div>
        </div>
      </div>

      <Sidebar
        className="fixed top-0 w-[80%]"
        visible={visible}
        position="left"
        onHide={handleSidebarClose}
      >
        <h1 className="font-semibold text-lg">BELIY STORE</h1>

        <div className="list-none">
          <Link href="/" className="">
            <li
              onClick={handleSidebarClose}
              className={clsx('h-10 border-2 flex items-center px-2 rounded-sm mt-2', {
                'border-b-2 border-gray-800': router.pathname == '/'
              })}
            >
              Trang chủ
            </li>
          </Link>
          <Link href="/products">
            <li
              onClick={handleSidebarClose}
              className={clsx('h-10 border-2 flex items-center px-2 rounded-sm mt-2', {
                'border-b-2 border-gray-800': router.pathname == '/products'
              })}
            >
              Sản phẩm
            </li>
          </Link>
          <Link href="/collections">
            <li
              onClick={handleSidebarClose}
              className={clsx('h-10 border-2 flex items-center px-2 rounded-sm mt-2', {
                'border-b-2 border-gray-800': router.pathname == '/collections'
              })}
            >
              Bộ sưu tập
            </li>
          </Link>
          <Link href="/stores">
            <li
              onClick={handleSidebarClose}
              className={clsx('h-10 border-2 flex items-center px-2 rounded-sm mt-2', {
                'border-b-2 border-gray-800': router.pathname == '/stores'
              })}
            >
              Cửa hàng
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={handleSidebarClose}
              className={clsx('h-10 border-2 flex items-center px-2 rounded-sm mt-2', {
                'border-b-2 border-gray-800': router.pathname == '/about'
              })}
            >
              Về chúng tôi
            </li>
          </Link>
        </div>
      </Sidebar>
    </header>
  )
}

export default Header
