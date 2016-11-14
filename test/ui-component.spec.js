/* global describe, it */

import React from 'react'
import UiComponent from '../src/UiComponent' // TODO: Change to lib
import {expect} from 'chai'
import {shallow} from 'enzyme'

describe('<UiComponent />', function () {

  describe('default behaviour', function () {
    it('should render as a div by default', function () {
      const component = shallow(<UiComponent />)
      expect(component.type()).to.equal('div')
    })

    it('should have the class name `UiComponent` specified by default', function () {
      const component = shallow(<UiComponent />)
      expect(component.prop('className')).to.equal('UiComponent')
    })

    it('should render its children', function () {
      const component = shallow(<UiComponent>foo</UiComponent>)
      expect(component.text()).to.equal('foo')
    })

    it('should pass data attributes through to the root node', function () {
      const component = shallow(<UiComponent data-foo data-bar="bar"/>)
      expect(component.prop('data-foo')).to.equal(true)
      expect(component.prop('data-bar')).to.equal('bar')
    })
  })

  describe('<UiComponent className="foo bar" />', function () {
    it('should append additional class names to the end rather than overwrite ' +
      'the `UiComponent` class name', function () {
      const component = shallow(<UiComponent className="foo bar"/>)
      expect(component.prop('className')).to.equal('UiComponent foo bar')
    })
  })

  describe('<UiComponent props={{className: `foo bar`}} />', function () {
    it('should append additional class names found in `props.props.className` to the end rather ' +
      'than overwrite the `UiComponent` class name', function () {
      const component = shallow(<UiComponent props={{className: 'foo bar'}}/>)
      expect(component.prop('className')).to.equal('UiComponent foo bar')
    })
  })

  describe('<UiComponent classes={{foo: true, bar:false}} />', function () {
    it('should render the properties that evaluate to true as class names', function () {
      const component = shallow(<UiComponent classes={{foo: true, bar: false}}/>)
      expect(component.find('.foo')).to.have.length(1)
      expect(component.find('.bar')).to.have.length(0)
    })
  })

  describe('<UiComponent classes={["foo", {bar:true, baz:false}]} />', function () {
    it('should render the strings and the object properties that evaluate to true as class names', function () {
      const component = shallow(<UiComponent classes={['foo', {bar: true, baz: false}]}/>)
      expect(component.find('.foo.bar')).to.have.length(1)
      expect(component.find('.baz')).to.have.length(0)
    })
  })

  describe('<UiComponent classes="foo bar" />', function () {
    it('should render the space delimited values of the `classes` attribute as class names', function () {
      const component = shallow(<UiComponent classes="foo bar"/>)
      expect(component.find('.foo.bar')).to.have.length(1)
    })
  })

  describe('<UiComponent props={{classes:{foo: true, bar:false}}} />', function () {
    it('should render the properties of `props.props.classes` that evaluate to true as class names', function () {
      const component = shallow(<UiComponent props={{classes: {foo: true, bar: false}}}/>)
      expect(component.find('.foo')).to.have.length(1)
      expect(component.find('.bar')).to.have.length(0)
    })
  })

  describe('<UiComponent props={{classes:[`foo`, {bar:true, baz:false}]}} />', function () {
    it('should render the strings and the object properties in `props.props.classes` that evaluate to true as class names', function () {
      const component = shallow(<UiComponent props={{classes: ['foo', {bar: true, baz: false}]}} />)
      expect(component.find('.foo.bar')).to.have.length(1)
      expect(component.find('.baz')).to.have.length(0)
    })
  })

  describe('<UiComponent props={{classes:`foo bar`}} />', function () {
    it('should render the space delimited values of the `props.props.classes` attribute as class names', function () {
      const component = shallow(<UiComponent props={{classes: 'foo bar'}} />)
      expect(component.find('.foo.bar')).to.have.length(1)
    })
  })

  describe('<UiComponent as="..." />', function () {
    it('should render as the native html element that has  been specified as the ' +
      'string value of the `as` attribute', function () {
      const component = shallow(<UiComponent as="section"/>)
      expect(component.type()).to.equal('section')
    })
  })

  describe('<UiComponent as="div" props={{as:`span`}} />', function () {
    it('should render as the tag name specified in `props.props.as`', function () {
      const component = shallow(<UiComponent as="div" props={{as: 'span'}} />)
      expect(component.type()).to.equal('span')
    })
  })

  describe('<UiComponent as={SomeComponent} />', function () {
    it('should render as the custom component that has been specified as the value of ' +
      'the `as` attribute', function () {

      function CustomComponent (props) {
        return (
          <ul>{props.children}</ul>
        )
      }

      const component = shallow(<UiComponent as={CustomComponent}/>)
      expect(component.type()).to.equal(CustomComponent)
    })
  })

  describe('<UiComponent className="Foo" props={{kind:"special smart someModifier"}}/>', function () {
    it('should render the space delimited values of the `kind` attribute as modifiers of the component', function () {
      const component = shallow(<UiComponent className="Foo" props={{kind: 'special smart'}}/>)
      expect(component.find('.Foo--special.Foo--smart')).to.have.length(1)
    })
  })

  describe('<UiComponent className="Foo" props={{kind:"special :someModifier"}} />', function () {
    it('should render modifier names found in the `kind` attribute that has been prefixxed with ' +
      '`:` as modifiers of `UiComponent` itself', function () {

      const component = shallow(<UiComponent className="Foo" props={{kind: 'special :someModifier'}}/>)
      expect(component.find('.Foo--special.UiComponent--someModifier')).to.have.length(1)
      expect(component.prop('className')).to.not.contain('Foo--:someModifier')

    })
  })
})
