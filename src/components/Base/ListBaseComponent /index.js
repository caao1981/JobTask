import React from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List'

const ListBaseComponent = ({ children, ...otherProps }) => {
  return <List {...otherProps}>{children}</List>
}

ListBaseComponent.propTypes = {
  children: PropTypes.node,
}

ListBaseComponent.defaultProps = {
  children: <></>,
}

export default ListBaseComponent
