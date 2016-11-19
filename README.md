# react-ui-component

[![CircleCI branch](https://img.shields.io/circleci/project/github/ifyio/react-ui-component/master.svg)](https://circleci.com/gh/ifyio/react-ui-component)
[![Coverall Test Coverage](https://img.shields.io/coveralls/ifyio/react-ui-component/master.svg)](https://coveralls.io/github/ifyio/react-ui-component)
[![Code Climate](https://codeclimate.com/github/ifyio/react-ui-component/badges/gpa.svg)](https://codeclimate.com/github/ifyio/react-ui-component)
[![Dependency Status](https://www.versioneye.com/user/projects/581a0a0289f0a91d55eb925f/badge.svg)](https://www.versioneye.com/user/projects/581a0a0289f0a91d55eb925f)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

An <UiComponent /> component that encapsulates some common behaviour that is often needed by UI components that are styled using [BEM](http://getbem.com/)

## Installation
```
npm install react-ui-component -S
```

## Usage

Start by defining your component like this

```js
import React, {Component} from 'react'
import UiComponent from 'react-ui-component'

export default class Btn extends Component {

  render () {
    return (
      <UiComponent className="Btn" as="button" {...this}>
        <span className="Btn-contents">{this.props.children}</span>
      </UiComponent>
    )
  }
}
```

Then you can define styles for this component as follows (Using the BEM naming convention as defined by [Suit CSS](https://suitcss.github.io/)):

```css
.Btn {
  background-color: black;
  color: white;
}

.Btn--primary {
  background-color: green;
}

```

This component can then be used as follows:

```html
<Btn kind="primary :fillsParent" classes={{foo: true, bar: false}}>Hello</Btn>
```

Which will render as follows: 

```html
<button class="UiComponent UiComponent--fillsParent Btn Btn--primary foo">
  <span class="Btn-contents">Hello</span>
</button>
```
