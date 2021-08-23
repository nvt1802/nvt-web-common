import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

export interface IButtonGroupsProps {
  style?: React.CSSProperties
  className?: string
  isVertical?: boolean
  children?:
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
}

const Button: React.FC<IButtonGroupsProps> = ({
  style = {},
  className = '',
  isVertical = false,
  children = <Fragment />
}) => {
  return (
    <div
      style={style}
      className={classNames(
        className,
        isVertical ? styles.btn_group_vertical : styles.btn_group
      )}
    >
      {children}
    </div>
  )
}

export default Button
