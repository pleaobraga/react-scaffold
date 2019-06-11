import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import '../presentation/styles/index.sass'
import './custom.scss'

// automatically import all files ending in *.stories.tsx
const req = require.context('/', true, /index.stories.js/)

function loadStories() {
  addDecorator(withInfo)
  addDecorator(withKnobs)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
