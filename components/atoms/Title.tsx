import React, { ReactElement } from 'react'
export interface ITitleProps {
  children?: ReactElement
}
const Title: React.FC<ITitleProps> = ({ children }) => {
  return <h1>{children}</h1>
}

export default Title
