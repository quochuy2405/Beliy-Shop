import React, { ReactElement } from 'react'
interface IContainerProps {
  children?: ReactElement[]
}
const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="w-[80%] mx-auto">{children.map((child) => React.cloneElement(child))}</div>
}

export default Container
