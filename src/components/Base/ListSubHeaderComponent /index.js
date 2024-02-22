import React from 'react'
import PropTypes from 'prop-types'
import ListSubheader from '@mui/material/ListSubheader'

const ListSubHeaderComponent = ({ children, ...otherProps }) => {
  return <ListSubheader {...otherProps}>{children}</ListSubheader>
}

ListSubHeaderComponent.propTypes = {
  children: PropTypes.node,
}

ListSubHeaderComponent.defaultProps = {
  children: <></>,
}

export default ListSubHeaderComponent
