import Tab from '@mui/material/Tab'
import PropTypes from 'prop-types'

const TabComponent = ({ value, label, ...otherProps }) => {
  return (
    <Tab
      value={value}
      label={label}
      {...otherProps}
      sx={{ ...otherProps.sx, ...{ textTransform: 'capitalize' } }}
    />
  )
}

TabComponent.propTypes = {
  value: PropTypes.string,
  label: PropTypes.node,
}

TabComponent.defaultProps = {
  value: '',
  label: <></>,
}

export default TabComponent
