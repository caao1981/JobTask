import { createTheme, ThemeProvider } from '@mui/material/styles'
import { getDesignTokens } from './DesignToken'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'
import mediaQuery from 'css-mediaquery'

function Theme({ children, mode, deviceType, props }) {
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      // width: deviceType === 'mobile' ? '320px' : '1024px',
      width: 800,
    }),
  })

  const themeOption = createTheme({
    ...getDesignTokens(mode),
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
    },
  })
  return (
    <ThemeProvider theme={themeOption}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
export default Theme

Theme.propTypes = {
  mode: PropTypes.string,
}
Theme.defaultProps = {
  mode: 'light',
}
