import clsx from 'clsx'
import React, { ReactElement } from 'react'
import shortid from 'shortid'
interface IContainerProps {
  children?: ReactElement[]
}
const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div
      className={clsx({
        'w-[95%] mx-auto': 'any',
        'sm:w-[80%]': 'mobile'
      })}
    >
      {children.map((child) => React.cloneElement(child, { key: shortid.generate() }))}
    </div>
  )
}

export default Container
