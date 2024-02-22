import React from 'react'
import PropTypes from 'prop-types'
import { ClickAwayListener, Popper } from '@mui/material'

export default function PopperComponent({
  children,
  handleClose,
  ...otherProps
}) {
  return (
    <Popper
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ]}
      {...otherProps}
    >
      <ClickAwayListener onClickAway={() => handleClose()}>
        {children}
      </ClickAwayListener>
    </Popper>
  )
}

PopperComponent.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func,
}
PopperComponent.defaultProps = {
  children: <></>,
  handleClose: () => {},
}
