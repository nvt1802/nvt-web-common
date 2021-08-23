import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'

interface MouseEvent extends React.MouseEventHandler<HTMLButtonElement> {}
interface FocusEvent extends React.FocusEventHandler<HTMLButtonElement> {}

declare type VARIANT_TYPE = 'default' | 'outline'
declare type SIZE_TYPE = 'default' | 'sm' | 'lg'
declare type COLOR_TYPE =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'

export interface IButtonProps {
  title:
    | string
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
  color?: COLOR_TYPE
  variant?: VARIANT_TYPE
  size?: SIZE_TYPE
  style?: React.CSSProperties
  className?: string
  onclick?: MouseEvent
  onBlur?: FocusEvent
  onDoubleClick?: MouseEvent
  onFocus?: FocusEvent
  onMouseDown?: MouseEvent
  onMouseLeave?: MouseEvent
  onMouseMove?: MouseEvent
  onMouseOut?: MouseEvent
  onMouseOver?: MouseEvent
  onMouseUp?: MouseEvent
  onContextMenu?: MouseEvent
}

const Button: React.FC<IButtonProps> = ({
  title = '',
  color = 'default',
  size = 'default',
  variant = 'default',
  style = {},
  className = '',
  onclick,
  onBlur,
  onDoubleClick,
  onFocus,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onContextMenu
}) => {
  const getClassName = () => {
    let className = ''
    switch (color) {
      case 'primary':
        className = classNames(
          className,
          variant === 'outline'
            ? styles.btn_outline_primary
            : styles.btn_primary
        )
        break
      case 'secondary':
        className = classNames(
          className,
          variant === 'outline'
            ? styles.btn_outline_secondary
            : styles.btn_secondary
        )
        break
      case 'success':
        className = classNames(
          className,
          variant === 'outline'
            ? styles.btn_outline_success
            : styles.btn_success
        )
        break
      case 'warning':
        className = classNames(
          className,
          variant === 'outline'
            ? styles.btn_outline_warning
            : styles.btn_warning
        )
        break
      case 'danger':
        className = classNames(
          className,
          variant === 'outline' ? styles.btn_outline_danger : styles.btn_danger
        )
        break
      case 'dark':
        className = classNames(
          className,
          variant === 'outline' ? styles.btn_outline_dark : styles.btn_dark
        )
        break
      case 'info':
        className = classNames(
          className,
          variant === 'outline' ? styles.btn_outline_info : styles.btn_info
        )
        break
      default:
        break
    }

    switch (size) {
      case 'lg':
        className = classNames(className, styles.btn_lg)
        break
      case 'sm':
        className = classNames(className, styles.btn_sm)
        break
      default:
        break
    }
    return className
  }

  return (
    <button
      className={classNames(styles.btn, getClassName(), className)}
      style={style}
      onBlur={onBlur}
      onDoubleClick={onDoubleClick}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      onClick={onclick}
      onContextMenu={onContextMenu}
    >
      {title}
    </button>
  )
}

export default Button
