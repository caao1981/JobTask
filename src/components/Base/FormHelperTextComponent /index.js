import React from 'react'
import PropTypes from 'prop-types'
import FormHelperText from '@mui/material/FormHelperText'

export default function FormHelperTextComponent({ children, ...otherProps }) {
  return <FormHelperText {...otherProps}>{children}</FormHelperText>
}

FormHelperTextComponent.propTypes = {
  children: PropTypes.node,
}

FormHelperTextComponent.defaultProps = {
  children: <></>,
}
