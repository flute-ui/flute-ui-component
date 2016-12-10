import React from 'react'
import toClassNames from 'classnames'

const BLOCK_NAME = 'fui-Component'
const WORD_WITH_COLON_PREFIX = /(:[^\s]+)/
const WORD_WITHOUT_COLON_PREFIX = /^(?!:).+/


export default class Component extends React.Component {

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
    const localProps = this.props
    const remoteProps = this.props.props || {}

    let {blockName, additionalClasses} = classNameDetailsOf({
      localClassName: localProps.className,
      remoteClassName: remoteProps.className,
      conditionalClassNames: [
        localProps.classes,
        remoteProps.classes
      ]
    })

    const modifiers = getModsFor({
      blockName,
      modifiers: remoteProps.kind,
      match: WORD_WITHOUT_COLON_PREFIX
    })

    const rootBlockModifiers = getModsFor({
      blockName: BLOCK_NAME,
      modifiers: remoteProps.kind,
      match: WORD_WITH_COLON_PREFIX
    })

    const className = cleanClassNames(
      `${BLOCK_NAME} ${blockName} ${modifiers} ${additionalClasses} ${rootBlockModifiers}`
    )

    const tag = remoteProps.as || this.props.as

    const props = {}

    Object.keys(localProps).forEach((key) => {
      if (key.startsWith('data-')) {
        props[key] = this.props[key]
      }
    })

    props.className = className

    return React.createElement(tag, props, this.props.children)
  }
}

function classNameDetailsOf ({localClassName, remoteClassName, conditionalClassNames}) {
  const localNames = typeof localClassName === 'string'
    ? localClassName.split(' ')
    : []

  const additionalLocalClassNames = localNames.length > 1
    ? localNames.splice(1, localNames.length).join(' ')
    : ''

  const additionalRemoteClassNames = remoteClassName === undefined
    ? ''
    : remoteClassName

  return {
    blockName: localNames[0] || '',
    additionalClasses: `${additionalRemoteClassNames} ${additionalLocalClassNames} ${toClassNames(conditionalClassNames)}`
  }
}

function cleanClassNames (classNames) {
  return removeExtraSpacesFromCssClassNames(
    removeDuplicatesFromCssClassNames(classNames)
  )
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
