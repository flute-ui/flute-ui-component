import React from 'react'
import toClassNames from 'classnames'

//import './Block.scss' // TODO: Uncomment

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

    const modifiers = modsFor(blockName, [
      p.kind,
      {
        prefix: ':',
        blockName: 'Block'
      }
    ])

    let classes = blockName

    if (modifiers) {
      classes += ` ${modifiers}`
    }

    if (additionalClasses) {
      classes += ` ${additionalClasses}`
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

function modsFor (blockName, modMappings) {
  const mods = []

  for (let mapping of modMappings) {
    if (mapping) {
      if (typeof mapping === 'string') {
        mapping.trim().split(' ').forEach(item => {
          mods.push(`${blockName}--${item}`)
        })
      }
//      else if (mapping.value) {
//        mods.push(`${blockName}--${mapping.prefix}${mapping.value}`)
//      }
    }
  }

  return mods.join(' ')
}

