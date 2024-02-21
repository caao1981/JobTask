import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const CustomizedDrawer = styled(Drawer)(() => ({
  zIndex: '1301',
  '& .MuiDrawer-paper': {
    background: 'var(--mui-palette-white-A50)',
    boxShadow: '0px -10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '24px 24px 0px 0px',
    padding: '10px 24px 32px 24px',
    maxHeight: '380px',
  },
}))

export const CustomizedBox = styled(Box)(() => ({
  borderRadius: '20px',
  background: 'var(--swiper-theme-color)',
  width: '50px',
  height: '4px',
  margin: '0 auto',
  position: 'fixed',
  marginTop: '10px',
  left: 'calc(50% - 26px)',
}))

export const CustomizedChildrenBox = styled(Box)(() => ({
  marginTop: '51px',
}))
