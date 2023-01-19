import clsx from 'clsx'
import React, { ReactElement } from 'react'
export interface ITitleProps {
  children?: string | ReactElement
  className?: string
  border?: boolean
}
const Title: React.FC<ITitleProps> = ({ children, className, border = true }) => {
  const classNames = clsx('font-semibold flex flex-col relative w-fit text-lg', {
    [className as string]: className
  })
  return (
    <div className={classNames}>
      <h1>{children}</h1>
      {border && <span className="w-[60%] h-[2px] bg-[#6a1212]"></span>}
    </div>
  )
}

export default Title
