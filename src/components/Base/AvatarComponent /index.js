import React from 'react'
import Avatar from '@mui/material/Avatar'

const AvatarComponent = ({ alt, src, ...otherProps }) => {
  return <Avatar alt={alt} src={src} {...otherProps} />
}

export default AvatarComponent
