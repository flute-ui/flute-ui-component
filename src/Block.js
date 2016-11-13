import React from 'react'
import toClassNames from 'classnames'

const WORD_WITH_COLON_PREFIX = /(:[^\s]+)/
const WORD_WITHOUT_COLON_PREFIX = /^(?!:).+/

export default class Block extends React.Component {

  static get propTypes () {
    return {
      as: React.PropTypes.any
    }
  }

  static get defaultProps () {
    return {
      as: 'div'
    }
  }

  render () {
    const p = this.props.props || {}

    const classNames = typeof this.props.className === 'string'
      ? this.props.className.split(' ')
      : []
    const blockName = classNames[0] || ''

    let additionalClasses = p.className === undefined ? '' : p.className

    if (classNames.length > 1) {
      additionalClasses += ' ' + classNames.splice(1, classNames.length).join(' ')
    }

    if (this.props.classes) {
      additionalClasses += ' '

      if (typeof this.props.classes === 'object') {
        additionalClasses += toClassNames(this.props.classes)
      } else {
        additionalClasses += this.props.classes
      }
    }

    const modifiers = getModsFor({
      blockName,
      modifiers: p.kind,
      match: WORD_WITHOUT_COLON_PREFIX
    })

    const rootBlockModifiers = getModsFor({
      blockName: 'Block',
      modifiers: p.kind,
      match: WORD_WITH_COLON_PREFIX
    })

    let classes = blockName

    if (modifiers) {
      classes += ` ${modifiers}`
    }

    if (additionalClasses) {
      classes += ` ${additionalClasses}`
    }

    if (rootBlockModifiers) {
      classes += ` ${rootBlockModifiers}`
    }

    classes = `Block ${classes}`

    classes = removeDuplicatesFromCssClassNames(classes)

    classes = removeExtraSpacesFromCssClassNames(classes)

    const tag = p.as || this.props.as

    const props = {}

    Object.keys(this.props).forEach((key) => {
      if (key.startsWith('data-')) {
        props[key] = this.props[key]
      }
    })

    props.className = classes

    return React.createElement(tag, props, this.props.children)
  }
}

function removeDuplicatesFromCssClassNames (value) {
  const obj = {}
  value.split(' ').forEach(item => {
    obj[item] = ''
  })
  return Object.keys(obj).join(' ')
}

function removeExtraSpacesFromCssClassNames (classes) {
  return classes.replace('  ', ' ').trim()
}

function getModsFor ({blockName, modifiers, match}) {

  const mods = []

  if (modifiers) {
    for (let modifier of modifiers.split(' ')) {
      if (match.test(modifier)) {
        mods.push(`${blockName}--${modifier.replace(':', '')}`)
      }
    }
  }

  return mods.join(' ')
}
