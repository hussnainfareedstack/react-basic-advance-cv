import React from 'react'
import './myStyles.css'

const inlineStyle = {
    fontSize: '72px',
    color: 'blue'
}

function StyleSheet({className}) {
    let className1 = className ? 'primary' : ''
  return (
    // <div className={`${className1} font-xl`}>StyleSheet</div>

    //inline:
    <div style={inlineStyle}>Inline</div>
  )
}

export default StyleSheet