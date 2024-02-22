import PropTypes from 'prop-types'
import OutlinedInput from '@mui/material/OutlinedInput'

const OutlinedInputBaseComponent = ({ id, sx, label, ...otherProps }) => {
  return <OutlinedInput id={id} sx={sx} label={label} {...otherProps} />
}

OutlinedInputBaseComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sx: PropTypes.object,
}

export default OutlinedInputBaseComponent
