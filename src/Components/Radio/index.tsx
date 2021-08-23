import React, { Fragment } from 'react'
import classNames from 'classnames'
import Label from '../Label'
import styles from './styles.css'

interface MouseEvent extends React.MouseEventHandler<HTMLButtonElement> {}
interface FocusEvent extends React.FocusEventHandler<HTMLButtonElement> {}
interface ChangeEvent extends React.ChangeEventHandler<HTMLInputElement> {}

declare type SIZE_TYPE = 'default' | 'sm' | 'lg'
declare type INPUT_VALUE_TYPE = string | number | any

const smallCss: React.CSSProperties = {
  width: 'calc(1.5em + 0.5rem + 2px)',
  height: 'calc(1.5em + 0.5rem + 2px)'
}

const largeCss: React.CSSProperties = {
  width: 'calc(1.5em + 1rem + 2px)',
  height: 'calc(1.5em + 1rem + 2px)'
}

export interface IRadioProps {
  id?: string
  name: string
  title?: string
  value?: INPUT_VALUE_TYPE
  defaultValue?: INPUT_VALUE_TYPE
  defaultChecked?: INPUT_VALUE_TYPE
  size?: SIZE_TYPE
  style?: React.CSSProperties
  className?: string
  isReadOnly?: boolean
  isDisabled?: boolean
  inputRef?: React.LegacyRef<HTMLInputElement>
  max?: INPUT_VALUE_TYPE
  min?: INPUT_VALUE_TYPE
  maxLength?: INPUT_VALUE_TYPE
  minLength?: INPUT_VALUE_TYPE
  onclick?: MouseEvent
  onChange?: ChangeEvent
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

const Radio: React.FC<IRadioProps> = ({
  id = '',
  name,
  title = '',
  value = '',
  style = {},
  inputRef = null,
  className = '',
  size = 'default',
  isReadOnly = false,
  isDisabled = false,
  max = '',
  min = '',
  maxLength = '',
  minLength = '',
  onChange
}) => {
  const small = size === 'sm' ? smallCss : {}
  const large = size === 'lg' ? largeCss : {}
  return (
    <Fragment>
      <Label title={title} htmlFor={name} />
      <input
        name={name}
        value={value}
        type='radio'
        className={classNames(styles.form_control, className)}
        id={id}
        style={{
          ...small,
          ...large,
          ...style
        }}
        ref={inputRef}
        max={max}
        min={min}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onChange={onChange}
      />
    </Fragment>
  )
}

export default Radio
