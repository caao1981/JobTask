import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'

export default function InputLabelComponent({ children, ...otherProps }) {
  return <InputLabel {...otherProps}>{children}</InputLabel>
}

InputLabelComponent.propTypes = {
  children: PropTypes.node.isRequired,
}
InputLabelComponent.defaultProps = {
  children: <></>,
}
