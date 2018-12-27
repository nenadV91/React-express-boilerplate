export default theme => ({
  "@global": {
    body: {
      ...theme.text.body1
    },
    'h1, h2, h3': {
      fontFamily: theme.fonts.family.alt,
      fontWeight: theme.fonts.weight.light,
    },
    a: {
      ...theme.text.link,

      '&:hover': {
        color: theme.colors.primary.main,
      }
    }
  },
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  layout: {
    display: 'flex',
    flex: 1
  }
})