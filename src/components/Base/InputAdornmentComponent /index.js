import React from 'react'
import PropTypes from 'prop-types'
import InputAdornment from '@mui/material/InputAdornment'

export default function InputAdornmentComponent({ children, ...otherProps }) {
  return <InputAdornment {...otherProps}>{children}</InputAdornment>
}

InputAdornmentComponent.propTypes = {
  children: PropTypes.node,
}
InputAdornmentComponent.defaultProps = {
  children: <></>,
}
