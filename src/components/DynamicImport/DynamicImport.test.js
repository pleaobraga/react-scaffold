import 'babel-polyfill'
import React from 'react'
import { mount } from 'enzyme'
import DynamicImport from './DynamicImport'

const a = () => <div id="content">test</div>

const request = data => {
  return new Promise((resolve, reject) => {
    resolve({ default: a })
    // process.nextTick(() =>
    //   data
    //     ? resolve({ default: a })
    //     : reject({
    //       error: 'Error'
    //     })
    // )
  })
}

describe.only('DynamicImport', () => {
  it('render proprely', () => {
    const dynamicImport = mount(
      <DynamicImport loadComponent={() => request('test')} />
    )

    expect(dynamicImport).toMatchSnapshot()
    expect(dynamicImport.find('#loading').length).toBe(1)
  })

  it('render proprely', async () => {
    const dynamicImport = await mount(
      <DynamicImport loadComponent={() => request('test')} />
    )

    dynamicImport.update()

    expect(dynamicImport).toMatchSnapshot()
    expect(dynamicImport.contains(<div id="content">test</div>)).toEqual(true)
  })
})
