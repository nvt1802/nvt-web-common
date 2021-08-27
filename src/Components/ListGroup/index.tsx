import React from 'react'
import styles from './styles.css'

interface IListGroupProps {
  items?: any[]
  isDraggable?: boolean
  onDrag?: React.DragEventHandler<HTMLLIElement>
  onMouseMove?: React.MouseEventHandler<HTMLLIElement>
  getItemSelected?: (item: any) => any
}

const ListGroup: React.FC<IListGroupProps> = ({
  items = [],
  isDraggable = false,
  onDrag,
  onMouseMove,
  getItemSelected = () => {}
}) => {
  const handleOnclick = (e: any) => {
    getItemSelected(items[e.target?.id])
  }

  return (
    <ul className={styles.list_group}>
      {items.map((item: any, index: number) => (
        <li
          key={index}
          id={`${index}`}
          className={styles.list_group_item}
          draggable={isDraggable}
          onClick={handleOnclick}
          onDrag={onDrag}
          onMouseMove={onMouseMove}
          style={{ cursor: isDraggable ? 'pointer' : '' }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ListGroup
