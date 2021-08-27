import React from 'react'
import classNames from 'classnames'
import styles from './styles.css'

declare type COLUMN_TYPE = {
  name: string
  center?: boolean
  minWidth?: string
}

interface ITableProps {
  column?: COLUMN_TYPE[]
  data?: any[]
  isStriped?: boolean
  isBordered?: boolean
  isHover?: boolean
}

const Table: React.FC<ITableProps> = ({
  column = [],
  data = [],
  isStriped = false,
  isBordered = false,
  isHover = false
}) => {
  return (
    <table
      className={classNames(
        styles.table,
        isStriped ? styles.table_striped : '',
        isBordered ? styles.table_bordered : '',
        isHover ? styles.table_hover : ''
      )}
    >
      <thead>
        <tr>
          {column.map((item: COLUMN_TYPE, index: number) => (
            <th
              key={index}
              className={classNames(item?.center ? styles.text_center : '')}
            >
              {String(item?.name).charAt(0).toUpperCase() +
                String(item?.name).slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => {
          return (
            <tr key={`${index}`}>
              {column.map((value: any, i: number) => {
                return (
                  <td
                    key={i}
                    className={classNames(
                      value?.center ? styles.text_center : ''
                    )}
                  >
                    {item[value?.name]}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
