import React, { Fragment, useState } from 'react'

import { TextField, FormGroups, Button, Spinners } from 'nvt-web-common'
import 'nvt-web-common/dist/index.css'

const App = () => {
  const [username, setUsername] = useState<any>('')
  const [password, setPassword] = useState<any>('')

  const handleOnchangeUsername = (e: any) => {
    setUsername(e.target.value)
  }

  const handleOnchangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <Fragment>
      <FormGroups style={{ width: '300px' }}>
        <TextField
          title='Username'
          name='test'
          type='email'
          size='sm'
          value={username}
          onChange={handleOnchangeUsername}
        />
        <TextField
          title='Password'
          name='test'
          type='password'
          size='sm'
          value={password}
          onChange={handleOnchangePassword}
        />
        <Button
          title={
            <Spinners
              style={{ margin: 'auto' }}
              type='border'
              size='sm'
              color='success'
            />
          }
          color='primary'
          variant='outline'
          size='sm'
        />
      </FormGroups>
    </Fragment>
  )
}

export default App
