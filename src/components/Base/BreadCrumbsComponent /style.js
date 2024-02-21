export const styles = {
  linkStyle: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12.07px',
    lineHeight: '21px',
    display: 'flex',
    alignItems: 'center',
    color: '#737678',
    textDecoration: 'none',
  },
  container: {
    margin: '10px 0px 0px 0px',
    padding: '10px 108px 10px 108px',
    width: '100%',
    backgroundColor: 'white',
    // borderBottom: '1px solid rgba(0,0,0,.1)',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  skeleton: {
    padding: '0px 108px 0px 108px',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
}
