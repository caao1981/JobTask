import { styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'

export const CircularProgressBarModified = styled(CircularProgress)(() => ({
  width: '18px !important',
  height: '18px !important',
  color: 'var(--mui-palette-white-A50)',
  display: 'block',
}))
