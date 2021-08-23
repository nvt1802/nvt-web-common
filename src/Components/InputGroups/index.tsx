import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

declare type CHILDREN_TYPE =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[]

export interface IInputGroupsProps {
  style?: React.CSSProperties
  className?: string
  children?: CHILDREN_TYPE
  before?: CHILDREN_TYPE
  after?: CHILDREN_TYPE
}

const InputGroups: React.FC<IInputGroupsProps> = ({
  style = {},
  className = '',
  children = <Fragment />,
  before = <Fragment />,
  after = <Fragment />
}) => {
  return (
    <div className={classNames(styles.input_group, className)} style={style}>
      <div className={styles.input_group_prepend}>{before}</div>
      {children}
      <div className={styles.input_group_append}>{after}</div>
    </div>
  )
}

export default InputGroups
