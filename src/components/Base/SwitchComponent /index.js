import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CustomizedSwitch } from './style'

export default function SwitchComponent({ checked, onChange, ...otherProps }) {
  const [flag, setFlag] = useState(checked)

  React.useEffect(() => {
    setFlag(checked)
  }, [checked])

  return (
    <CustomizedSwitch checked={checked} onChange={onChange} {...otherProps} />
  )
}

SwitchComponent.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}
SwitchComponent.defaultProps = {
  value: false,
  onChange: () => {},
}
