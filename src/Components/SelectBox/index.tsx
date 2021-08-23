import React, { Fragment } from 'react'
import classNames from 'classnames'
import Label from '../Label'
import styles from './styles.css'

interface SelectEvent extends React.MouseEventHandler<HTMLSelectElement> {}
interface FocusEvent extends React.FocusEventHandler<HTMLSelectElement> {}
interface ChangeEvent extends React.ChangeEventHandler<HTMLSelectElement> {}

declare type INPUT_VALUE_TYPE = string | number | any
declare type OPTION_TYPE = { label: string; value: INPUT_VALUE_TYPE }

export interface ISelectBoxProps {
  id?: string
  name: string
  title?: string
  value?: INPUT_VALUE_TYPE
  defaultValue?: INPUT_VALUE_TYPE
  defaultChecked?: INPUT_VALUE_TYPE
  style?: React.CSSProperties
  className?: string
  options?: OPTION_TYPE[]
  multiple?: boolean
  isDisabled?: boolean
  selectRef?: React.LegacyRef<HTMLSelectElement>
  onclick?: SelectEvent
  onChange?: ChangeEvent
  onBlur?: FocusEvent
  onDoubleClick?: SelectEvent
  onFocus?: FocusEvent
  onMouseDown?: SelectEvent
  onMouseLeave?: SelectEvent
  onMouseMove?: SelectEvent
  onMouseOut?: SelectEvent
  onMouseOver?: SelectEvent
  onMouseUp?: SelectEvent
  onContextMenu?: SelectEvent
}

const SelectBox: React.FC<ISelectBoxProps> = ({
  id = '',
  name,
  title = '',
  value = '',
  style = {},
  selectRef = null,
  className = '',
  isDisabled = false,
  options = [],
  multiple = false,
  onChange,
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
  return (
    <Fragment>
      <Label title={title} htmlFor={name} />
      <select
        name={name}
        value={value}
        className={classNames(styles.form_control, className)}
        id={id}
        style={style}
        ref={selectRef}
        disabled={isDisabled}
        multiple={multiple}
        onChange={onChange}
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
        {options.map((item: OPTION_TYPE, index: number) => {
          return (
            <option key={index} value={item?.value}>
              {item?.label}
            </option>
          )
        })}
      </select>
    </Fragment>
  )
}

export default SelectBox
