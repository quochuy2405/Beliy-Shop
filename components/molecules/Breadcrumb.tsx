import clsx from 'clsx'
import Link from 'next/link'
import React, { ReactElement } from 'react'
export type BreadCrumbItem = {
  label?: string
  icon?: ReactElement
  url?: string
}
interface IBreadCrumbProps {
  items: Array<BreadCrumbItem>
}
const BreadCrumb: React.FC<IBreadCrumbProps> = ({ items }) => {
  return (
    <div className="flex gap-1 my-3">
      {items.map((item, index) => {
        if (item.url)
          return (
            <Link href={item.url}>
              <div className="flex gap-1">
                {!!index && <p>/</p>}
                {item.icon}
                <p className={clsx('hover:text-black', { 'opacity-90': !!index })}>{item.label}</p>
              </div>
            </Link>
          )
        return (
          <div className="flex gap-1">
            {!!index && <p>/</p>}
            {item.icon}
            <p className={clsx({ 'opacity-90': !!index })}>{item.label}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BreadCrumb
