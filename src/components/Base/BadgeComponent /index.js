import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@mui/material/Badge'

export default function BadgeComponent({
  badgeContent,
  invisible,
  children,
  ...otherProps
}) {
  return (
    <Badge invisible={invisible} badgeContent={badgeContent} {...otherProps}>
      {children}
    </Badge>
  )
}

BadgeComponent.propTypes = {
  children: PropTypes.node,
  invisible: PropTypes.bool,
  badgeContent: PropTypes.node,
}
BadgeComponent.defaultProps = {
  children: <></>,
  invisible: true,
  badgeContent: <></>,
}
