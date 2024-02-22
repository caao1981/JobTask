import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'

export default function ToolTipComponent({ children, ...otherProps }) {
  return <Tooltip {...otherProps}>{children}</Tooltip>
}

ToolTipComponent.propTypes = {
  children: PropTypes.node,
}
ToolTipComponent.defaultProps = {
  children: <></>,
}
