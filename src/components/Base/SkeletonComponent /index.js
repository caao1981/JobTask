import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'

export default function SkeletonComponent({
  animation,
  variant,
  ...otherProps
}) {
  return <Skeleton animation={animation} variant={variant} {...otherProps} />
}

SkeletonComponent.propTypes = {
  animation: PropTypes.string,
  variant: PropTypes.string,
}
SkeletonComponent.defaultProps = {
  animation: 'wave',
  variant: 'rectangular',
}
