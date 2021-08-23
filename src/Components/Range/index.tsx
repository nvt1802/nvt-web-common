import React, { Fragment } from 'react'
import classNames from 'classnames'
import Label from '../Label'
import styles from './styles.css'

interface MouseEvent extends React.MouseEventHandler<HTMLButtonElement> {}
interface FocusEvent extends React.FocusEventHandler<HTMLButtonElement> {}
interface ChangeEvent extends React.ChangeEventHandler<HTMLInputElement> {}

declare type INPUT_VALUE_TYPE = string | number | any

export interface IRangeProps {
  id?: string
  name: string
  title?: string
  value?: INPUT_VALUE_TYPE
  defaultValue?: INPUT_VALUE_TYPE
  defaultChecked?: INPUT_VALUE_TYPE
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

const Range: React.FC<IRangeProps> = ({
  id = '',
  name,
  title = '',
  value = '',
  style = {},
  inputRef = null,
  className = '',
  isReadOnly = false,
  isDisabled = false,
  max = '',
  min = '',
  maxLength = '',
  minLength = '',
  onChange
}) => {
  return (
    <Fragment>
      <Label title={title} htmlFor={name} />
      <input
        name={name}
        value={value}
        type='range'
        className={classNames(styles.form_control_range, className)}
        id={id}
        style={style}
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

export default Range
