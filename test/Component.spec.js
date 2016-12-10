/* global describe, it */

import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Component from '../src/Component'

describe('<Component />', function () {

  describe('default behaviour', function () {
    it('should render as a div by default', function () {
      const component = shallow(<Component />)
      expect(component.type()).to.equal('div')
    })

    it('should have the class name `Component` specified by default', function () {
      const component = shallow(<Component />)
      expect(component.prop('className')).to.equal('fui-Component')
    })

    it('should render its children', function () {
      const component = shallow(<Component>foo</Component>)
      expect(component.text()).to.equal('foo')
    })

    it('should pass data attributes through to the root node', function () {
      const component = shallow(<Component data-foo data-bar="bar"/>)
      expect(component.prop('data-foo')).to.equal(true)
      expect(component.prop('data-bar')).to.equal('bar')
    })
  })

  describe('<Component className="foo bar" />', function () {
    it('should append additional class names to the end rather than overwrite ' +
      'the `Component` class name', function () {
      const component = shallow(<Component className="foo bar"/>)
      expect(component.prop('className')).to.equal('fui-Component foo bar')
    })
  })

  describe('<Component props={{className: `foo bar`}} />', function () {
    it('should append additional class names found in `props.props.className` to the end rather ' +
      'than overwrite the `Component` class name', function () {
      const component = shallow(<Component props={{className: 'foo bar'}}/>)
      expect(component.prop('className')).to.equal('fui-Component foo bar')
    })
  })

  describe('<Component classes={{foo: true, bar:false}} />', function () {
    it('should render the properties that evaluate to true as class names', function () {
      const component = shallow(<Component classes={{foo: true, bar: false}}/>)
      expect(component.find('.foo')).to.have.length(1)
      expect(component.find('.bar')).to.have.length(0)
    })
  })

  describe('<Component classes={["foo", {bar:true, baz:false}]} />', function () {
    it('should render the strings and the object properties that evaluate to true as class names', function () {
      const component = shallow(<Component classes={['foo', {bar: true, baz: false}]}/>)
      expect(component.find('.foo.bar')).to.have.length(1)
      expect(component.find('.baz')).to.have.length(0)
    })
  })

  describe('<Component classes="foo bar" />', function () {
    it('should render the space delimited values of the `classes` attribute as class names', function () {
      const component = shallow(<Component classes="foo bar"/>)
      expect(component.find('.foo.bar')).to.have.length(1)
    })
  })

  describe('<Component props={{classes:{foo: true, bar:false}}} />', function () {
    it('should render the properties of `props.props.classes` that evaluate to true as class names', function () {
      const component = shallow(<Component props={{classes: {foo: true, bar: false}}}/>)
      expect(component.find('.foo')).to.have.length(1)
      expect(component.find('.bar')).to.have.length(0)
    })
  })

  describe('<Component props={{classes:[`foo`, {bar:true, baz:false}]}} />', function () {
    it('should render the strings and the object properties in `props.props.classes` that evaluate to true as class names', function () {
      const component = shallow(<Component props={{classes: ['foo', {bar: true, baz: false}]}} />)
      expect(component.find('.foo.bar')).to.have.length(1)
      expect(component.find('.baz')).to.have.length(0)
    })
  })

  describe('<Component props={{classes:`foo bar`}} />', function () {
    it('should render the space delimited values of the `props.props.classes` attribute as class names', function () {
      const component = shallow(<Component props={{classes: 'foo bar'}} />)
      expect(component.find('.foo.bar')).to.have.length(1)
    })
  })

  describe('<Component as="..." />', function () {
    it('should render as the native html element that has  been specified as the ' +
      'string value of the `as` attribute', function () {
      const component = shallow(<Component as="section"/>)
      expect(component.type()).to.equal('section')
    })
  })

  describe('<Component as="div" props={{as:`span`}} />', function () {
    it('should render as the tag name specified in `props.props.as`', function () {
      const component = shallow(<Component as="div" props={{as: 'span'}} />)
      expect(component.type()).to.equal('span')
    })
  })

  describe('<Component as={SomeComponent} />', function () {
    it('should render as the custom component that has been specified as the value of ' +
      'the `as` attribute', function () {

      function CustomComponent (props) {
        return (
          <ul>{props.children}</ul>
        )
      }

      const component = shallow(<Component as={CustomComponent}/>)
      expect(component.type()).to.equal(CustomComponent)
    })
  })

  describe('<Component className="Foo" props={{kind:"special smart someModifier"}}/>', function () {
    it('should render the space delimited values of the `kind` attribute as modifiers of the component', function () {
      const component = shallow(<Component className="Foo" props={{kind: 'special smart'}}/>)
      expect(component.find('.Foo--special.Foo--smart')).to.have.length(1)
    })
  })

  describe('<Component className="Foo" props={{kind:"special :someModifier"}} />', function () {
    it('should render modifier names found in the `kind` attribute that has been prefixed with ' +
      '`:` as modifiers of `Component` itself', function () {

      const component = shallow(<Component className="Foo" props={{kind: 'special :someModifier'}}/>)
      expect(component.find('.Foo--special.fui-Component--someModifier')).to.have.length(1)
      expect(component.prop('className')).to.not.contain('Foo--:someModifier')

    })
  })
})
