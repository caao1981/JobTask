import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem'

export default function MenuItemComponent({ children, ...otherProps }) {
  return <MenuItem {...otherProps}>{children}</MenuItem>
}

MenuItemComponent.propTypes = {
  children: PropTypes.node.isRequired,
}
MenuItemComponent.defaultProps = {
  children: <></>,
}
