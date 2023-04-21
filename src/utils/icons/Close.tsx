import React from 'react'
import Svg, { G, Path, Circle } from 'react-native-svg'

function Close (): JSX.Element {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19"><G transform="translate(-340 -148)"><Circle fill='#e8e8e8' cx="9.5" cy="9.5" r="9.5" transform="translate(340 148)"/><G transform="translate(341 149)"><Path fill='none' stroke='#adadad' strokeLinecap='round' fillRule='evenodd' d="M5,5l6.965,6.965"/><Path fill='none' stroke='#adadad' strokeLinecap='round' fillRule='evenodd' d="M0,6.965,6.965,0" transform="translate(11.965 11.965) rotate(180)"/></G></G></Svg>
  )
}

export default Close
