import React from 'react'
import PropTypes from 'prop-types'
import { CustomizedDrawer, CustomizedBox, CustomizedChildrenBox } from './style'
function DrawerComponent({
  active,
  drawerSlidePosition,
  drawerOnCloseHandler,
  children,
}) {
  return (
    <CustomizedDrawer
      anchor={drawerSlidePosition}
      open={active}
      onClose={drawerOnCloseHandler}
    >
      <CustomizedBox />
      <CustomizedChildrenBox>{children}</CustomizedChildrenBox>
    </CustomizedDrawer>
  )
}

DrawerComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  drawerSlidePosition: PropTypes.string.isRequired,
  drawerOnCloseHandler: PropTypes.func.isRequired,
}

export default DrawerComponent
