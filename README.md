# react-component
A `<Component />` component that encapsulates some common behaviour that is often needed by UI components that are styled using BEM

## Installation
```
npm install @flute-io/react-component -S
```

## Usage

Start by defining your component like this

```js
import React from 'react'
import Component from '@flute-io/react-component'

export default class Btn extends React.Component {

  render () {
    return (
      <Component className="Btn" as="Button" {...this}>
        <span className="Btn-contents">{this.props.children}</span>
      </Component>
    )
  }
}
```

Then you can define styles for this component as follows (Using the BEM naming convention as defined by [Suit CSS](https://suitcss.github.io/)):

```css
.FancyButton {
  background-color: black;
  color: white;
}

.FancyButton--primary {
  background-color: green;
}

```

This component can then be used as follows:

```html
<Btn kind="primary :fillsParent">Hello</Btn>
```

Which will render as follows: 

```html
<button class="Component Btn Btn--primary Component--fillsParent">
  <span class="Btn-contents">Hello</span>
</button>
```

## Notes
* Can only be used with components that extend the React.Component class



