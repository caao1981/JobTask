import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'

export default function IconButtonComponent({
  children,
  onClick,
  ...otherProps
}) {
  return (
    <IconButton {...otherProps} onClick={onClick}>
      {children}
    </IconButton>
  )
}

IconButtonComponent.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}
IconButtonComponent.defaultProps = {
  children: <></>,
  onClick: () => {},
}
