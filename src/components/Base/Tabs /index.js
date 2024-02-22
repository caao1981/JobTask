import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'

const TabsComponent = ({ onChange, children, ...otherProps }) => {
  return (
    <Tabs onChange={onChange} {...otherProps}>
      {children}
    </Tabs>
  )
}

TabsComponent.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

TabsComponent.defaultProps = {
  value: '',
  children: <></>,
  onChange: () => {},
}

export default TabsComponent
