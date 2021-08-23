import React from 'react'
import { label } from './styles'

export interface ILabelProps {
  id?: string
  title: string
  htmlFor: string
  style?: React.CSSProperties
  className?: string
  labelRef?: React.LegacyRef<HTMLLabelElement>
}

const Label: React.FC<ILabelProps> = ({
  id = '',
  title = '',
  htmlFor = '',
  style = {},
  labelRef = null,
  className = ''
}) => {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      ref={labelRef}
      style={{ ...style, ...label }}
      className={className}
      title={title}
    >
      {title}
    </label>
  )
}

export default Label
