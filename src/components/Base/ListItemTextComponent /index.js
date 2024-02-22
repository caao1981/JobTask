import React from 'react'
import PropTypes from 'prop-types'
import ListItemText from '@mui/material/ListItemText'

const ListItemTextComponent = ({ children, ...otherProps }) => {
  return <ListItemText {...otherProps}>{children}</ListItemText>
}

ListItemTextComponent.propTypes = {
  children: PropTypes.node,
}

ListItemTextComponent.defaultProps = {
  children: <></>,
}

export default ListItemTextComponent
