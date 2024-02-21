import PropTypes from 'prop-types'
import FormControl from '@mui/material/FormControl'

const FormControlBaseComponent = ({ children, ...otherProps }) => {
  return <FormControl {...otherProps}>{children}</FormControl>
}
FormControlBaseComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormControlBaseComponent
