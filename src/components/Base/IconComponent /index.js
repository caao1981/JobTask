import PropTypes from 'prop-types'
import { Icon } from '@mui/material'

const IconComponent = ({ children, ...otherProps }) => {
  return <Icon {...otherProps}>{children}</Icon>
}

export default IconComponent

IconComponent.propTypes = {
  children: PropTypes.node,
}
IconComponent.defaultProps = {
  children: <></>,
}
