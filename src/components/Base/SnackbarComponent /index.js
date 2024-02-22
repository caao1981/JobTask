import Snackbar from '@mui/material/Snackbar'

const SnackbarComponent = ({
  open,
  message,
  onClose,
  anchorOrigin,
  autoHideDuration,
  children,
  ...otherProps
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      message={message}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      {...otherProps}
    >
      {children}
    </Snackbar>
  )
}

export default SnackbarComponent
