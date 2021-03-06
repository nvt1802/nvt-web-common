import React, { Fragment } from 'react'

import { Table } from 'nvt-web-common'
import 'nvt-web-common/dist/index.css'
import './app.css'

const App = () => {
  // const [items, setItems] = useState<any[]>([
  //   '๐ฐ Cake',
  //   '๐ฉ Donut',
  //   '๐ Apple',
  //   '๐ Pizza'
  // ])

  const column = [
    {
      no: '1',
      name: 'name',
      center: false
    },
    {
      no: '2',
      name: 'age',
      center: true
    },
    {
      no: '3',
      name: 'gender',
      center: true
    }
  ]

  const data = [
    {
      no: '1',
      name: 'ABC',
      age: '22',
      gender: 'name'
    },
    {
      no: '1',
      name: 'XYZ',
      age: '23',
      gender: 'nแปฏ'
    },
    {
      no: '1',
      name: 'GHK',
      age: '34',
      gender: 'Nam'
    }
  ]

  return (
    <Fragment>
      <Table isBordered isHover data={data} column={column} />
    </Fragment>
  )
}

export default App
