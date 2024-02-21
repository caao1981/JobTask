import Alert from '@mui/material/Alert'
import PropTypes from 'prop-types'

const AlertComponent = ({ severity, icon, children, ...otherProps }) => {
  return (
    <Alert severity={severity} icon={icon} {...otherProps}>
      {children}
    </Alert>
  )
}

export default AlertComponent

AlertComponent.propTypes = {
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.oneOf([false])]),
}
AlertComponent.defaultProps = {
  children: <></>,
}
