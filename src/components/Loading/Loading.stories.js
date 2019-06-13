import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from './Loading'

export default storiesOf('Components | Loading', module).add(
  'default',
  () => <Loading />,
  { info: { inline: true, header: false } }
)
