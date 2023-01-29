import React, { ReactElement } from 'react'
import shortid from 'shortid'
interface IContainerProps {
  children?: ReactElement[]
}
const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="w-[80%] mx-auto">
      {children.map((child) => React.cloneElement(child, { key: shortid.generate() }))}
    </div>
  )
}

export default Container
