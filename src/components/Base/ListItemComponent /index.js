import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem'

const ListItemComponent = ({ children, ...otherProps }) => {
  return <ListItem {...otherProps}>{children}</ListItem>
}

ListItemComponent.propTypes = {
  children: PropTypes.node,
}

ListItemComponent.defaultProps = {
  children: <></>,
}

export default ListItemComponent
