# flute-ui-component

[![CircleCI branch](https://img.shields.io/circleci/project/github/ifyio/flute-ui-component/master.svg)](https://circleci.com/gh/ifyio/flute-ui-component)
[![Coverall Test Coverage](https://img.shields.io/coveralls/ifyio/flute-ui-component/master.svg)](https://coveralls.io/github/ifyio/flute-ui-component)
[![Code Climate](https://codeclimate.com/github/ifyio/flute-ui-component/badges/gpa.svg)](https://codeclimate.com/github/ifyio/flute-ui-component)
[![Dependency Status](https://www.versioneye.com/user/projects/5830c1aeee1db3003d7b965b/badge.svg)](https://www.versioneye.com/user/projects/5830c1aeee1db3003d7b965b)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A component that encapsulates the common behaviour amongst components that follow the flute-ui components methodology.

## Installation
```
npm install @flute-ui/component -S
```

## Quick Start

Start by defining your component like this

```js
import React, {Component} from 'react'
import FuiComponent from '@flute-ui/component'

export default class Btn extends Component {

  render () {
    return (
      <FuiComponent className="Btn" as="button" {...this}>
        <span className="Btn-contents">{this.props.children}</span>
      </FuiComponent>
    )
  }
}
```

Then when used as follows...

```html
<Btn kind="primary :fillsParent" classes={{foo: true, bar: false}}>Hello</Btn>
```

It will render as follows: 

```html
<button class="fui-Component fui-Component--fillsParent Btn Btn--primary foo">
  <span class="Btn-contents">Hello</span>
</button>
```

## Problems That It Solves
TODO
