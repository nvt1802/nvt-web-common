import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'

declare type SPINNERS_TYPE = 'default' | 'border' | 'grow'
declare type COLOR_TYPE =
  | 'default'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
declare type SIZE_TYPE = 'default' | 'sm'

export interface ISpinnersProps {
  id?: string
  type?: SPINNERS_TYPE
  color?: COLOR_TYPE
  size?: SIZE_TYPE
  style?: React.CSSProperties
  className?: string
}

const Spinners: React.FC<ISpinnersProps> = ({
  id = '',
  type = 'default',
  color = 'default',
  style = {},
  size = 'default',
  className = ''
}) => {
  return (
    <div
      id={id}
      style={{ ...style }}
      className={classNames(
        type === 'default' ? styles.spinner_border : '',
        type === 'border' ? styles.spinner_border : '',
        type === 'grow' ? styles.spinner_grow : '',
        size === 'sm' ? styles.spinner_border_sm : '',
        color === 'danger' ? styles.text_danger : '',
        color === 'dark' ? styles.text_dark : '',
        color === 'info' ? styles.text_info : '',
        color === 'light' ? styles.text_light : '',
        color === 'muted' ? styles.text_muted : '',
        color === 'primary' ? styles.text_primary : '',
        color === 'secondary' ? styles.text_secondary : '',
        color === 'success' ? styles.text_success : '',
        color === 'warning' ? styles.text_warning : '',
        className
      )}
    />
  )
}

export default Spinners
