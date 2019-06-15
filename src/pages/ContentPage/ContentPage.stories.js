import React from 'react'
import { storiesOf } from '@storybook/react'
import ContentPage from './ContentPage'

export default storiesOf('Pages | ContentPage', module).add(
  'default',
  () => <ContentPage />,
  { info: { inline: true, header: false } }
)
