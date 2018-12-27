export default props => ({
  root: {
    flex: `0 0 ${props.sidebar.width}px`,
    transition: 'all 0.2s ease-in',
  },
  paper: {
    borderRight: "none",
    position: 'relative',
    // backgroundColor: 'transparent'
  },
  hide: {
    transform: `translateX(-${props.sidebar.width}px)`
  }
})