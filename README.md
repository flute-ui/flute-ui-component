# react-component
A `<Component />` component that encapsulates some common behaviour that is often needed by UI components that are styled using BEM

## Installation
```
npm install @flute-io/react-component -S
```

## Usage

So you would define your component like this

```js
import React from 'react'
import Component from '@flute-io/react-component'

export default class FancyButton extends React.Component {

  render () {
    return (
      <Component className="FancyButton" as="Button" {...this}>
        <span className="FancyButton-contents">{this.props.children}</span>
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

Then this component can be used as follows:

```html
<FancyButton kind="primary c:fillsParent">Hello</FancyButton>
```

Which will render as follows 

```html
<Button class="Component Component--fillsParent FancyButton FancyButton--primar
  <span class="FancyButton-contents">Hello</span>
</Button>
```

## Notes
* Can only be used with components that extend the React.Component class



