import PropTypes from 'prop-types'
import InputLabel from '@mui/material/InputLabel'

const InputLabelBaseComponent = ({ sx, htmlFor, ...otherProps }) => {
  return <InputLabel sx={sx} htmlFor={htmlFor} {...otherProps} />
}

InputLabelBaseComponent.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  sx: PropTypes.object,
}

export default InputLabelBaseComponent
