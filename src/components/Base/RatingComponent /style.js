import { styled } from '@mui/material'
import Rating from '@mui/material/Rating'

export const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: 'var(--mui-styled-rating)',
  },
  '& .MuiRating-iconHover': {
    color: 'var(--mui-styled-rating)',
  },
  '& .MuiSvgIcon-root': {
    maxWidth: 'none',
  },
}))
