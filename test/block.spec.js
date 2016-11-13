/* global describe, it */

import React from 'react'
import Block from '../src/Block' // TODO: Change to lib
import {expect} from 'chai'
import {shallow} from 'enzyme'

describe('<Block />', function () {

  describe('default behaviour', function () {
    it('should render as a div by default', function () {
      const block = shallow(<Block />)
      expect(block.type()).to.equal('div')
    })

    it('should have the class name `Block` specified by default', function () {
      const block = shallow(<Block />)
      expect(block.prop('className')).to.equal('Block')
    })

    it('should render its children', function () {
      const block = shallow(<Block>foo</Block>)
      expect(block.text()).to.equal('foo')
    })

    it('should pass data attributes through to the root node', function () {
      const block = shallow(<Block data-foo data-bar="bar"/>)
      expect(block.prop('data-foo')).to.equal(true)
      expect(block.prop('data-bar')).to.equal('bar')
    })
  })

  describe('<Block className="foo bar" />', function () {
    it('should append additional class names to the end rather than overwrite the `Block` class name', function () {
      const block = shallow(<Block className="foo bar"/>)
      expect(block.prop('className')).to.equal('Block foo bar')
    })
  })

  describe('<Block classes={{foo: true, bar:false}} />', function () {
    it('should render the properties that evaluate to true as class names', function () {
      const block = shallow(<Block classes={{foo: true, bar: false}}/>)
      expect(block.find('.foo')).to.have.length(1)
      expect(block.find('.bar')).to.have.length(0)
    })
  })

  describe('<Block classes={["foo", {bar:true, baz:false}]} />', function () {
    it('should render the strings and the object properties that evaluate to true as class names', function () {
      const block = shallow(<Block classes={['foo', {bar: true, baz: false}]}/>)
      expect(block.find('.foo.bar')).to.have.length(1)
      expect(block.find('.baz')).to.have.length(0)
    })
  })

  describe('<Block classes="foo bar" />', function () {
    it('should render the space delimited values of the `classes` attribute as class names', function () {
      const block = shallow(<Block classes="foo bar"/>)
      expect(block.find('.foo.bar')).to.have.length(1)
    })
  })

  describe('<Block as="..." />', function () {
    it('should render as the native html element that has  been specified as the ' +
      'string value of the `as` attribute', function () {
      const block = shallow(<Block as="section"/>)
      expect(block.type()).to.equal('section')
    })
  })

  describe('<Block as={SomeComponent} />', function () {
    it('should render as the custom component that has been specified as the value of ' +
      'the `as` attribute', function () {

      function CustomComponent (props) {
        return (
          <ul>{props.children}</ul>
        )
      }

      const block = shallow(<Block as={CustomComponent}/>)
      expect(block.type()).to.equal(CustomComponent)
    })
  })

  describe('<Block className="Foo" props={{kind:"special smart someModifier"}}/>', function () {
    it('should render the space delimited values of the `kind` attribute as modifiers of the block', function () {
      const block = shallow(<Block className="Foo" props={{kind: 'special smart'}}/>)
      expect(block.find('.Foo--special.Foo--smart')).to.have.length(1)
    })
  })

  describe('<Block className="Foo" props={{kind:"special :someModifier"}} />', function () {
    it('should render modifier names found in the `kind` attribute that has been prefixxed with ' +
      '`:` as modifiers of `Block` itself', function () {

      const block = shallow(<Block className="Foo" props={{kind: 'special :someModifier'}}/>)
      expect(block.find('.Foo--special.Block--someModifier')).to.have.length(1)
      expect(block.prop('className')).to.not.contain('Foo--:someModifier')

    })
  })
})
