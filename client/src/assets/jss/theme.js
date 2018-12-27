import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
  primary: {
    main: '#8065ff',
    dark1: '#6852d1',
    light1: '#9f8bfc'
  },
  text: {
    body1: '#5f5e5e',
    body2: '#828282',
    light: '#acacac',
    strong: '#111111'
  }
}

const sizes = {
  sidebar: {
    width: 300
  },
  navbar: {
    height: 48
  },
  fullHeight: `calc(100vh - 48px)`
}

const fonts = {
  family: {
    main: "'Open Sans', sans-serif",
    alt: "'Montserrat', sans-serif"
  },
  weight: {
    xlight: 100,
    light: 300,
    normal: 400
  }
}

const text = {
  strong1: {
    color: colors.text.strong,
    fontSize: '1.05rem'
  },
  strong2: {
    color: colors.text.strong,
    fontSize: '0.8rem'
  },
  body1: {
    color: colors.text.body1,
    fontSize: '1.1rem'
  },
  body2: {
    color: colors.text.body2,
    fontWeight: fonts.weight.light,
    fontSize: '1.1rem',
  },
  light: {
    color: colors.text.light,
    fontSize: '0.8rem'
  },
  link: {
    color: colors.primary.main,
    fontWeight: fonts.weight.normal,
    fontSize: '0.9rem'
  },
  title: {
    fontFamily: fonts.family.alt,
    fontWeight: fonts.weight.xlight
  }
}

const shadow = {
  navbar: '0 1px 7px 0 rgba(33,38,44,.07)',
  card: '0 1px 3px 0 rgba(0,0,0,0.1)',
  search: '2px -2px 7px rgba(33,38,44,.07)',
  button: '0 .2rem 1rem rgba(0,0,0,.15)!important'
}

const borders = {
  light: '1px solid rgba(0, 0, 0, .045)'
}

const theme = createMuiTheme({
  colors, 
  fonts, 
  text, 
  borders, 
  shadow,
  sizes,
  palette: {
    primary: {
      main: '#6A72FF'
    },
    background: {
      default: '#f8f9fa'
    }
  },
  typography: {
    useNextVariants: true,
  },
  sidebar: {
    width: sizes.sidebar.width
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: "100px !important"
      }
    },
  }
});


export default theme;

