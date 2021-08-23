import React, { Fragment } from 'react'
import { formGroupsCss } from './styles'

export interface ILabelProps {
  id?: string
  children?:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
  style?: React.CSSProperties
  className?: string
  formGroupsRef?: React.LegacyRef<HTMLDivElement>
}

const Label: React.FC<ILabelProps> = ({
  id = '',
  style = {},
  formGroupsRef = null,
  className = '',
  children = <Fragment />
}) => {
  return (
    <div
      id={id}
      ref={formGroupsRef}
      style={{ ...style, ...formGroupsCss }}
      className={className}
    >
      {children}
    </div>
  )
}

export default Label
