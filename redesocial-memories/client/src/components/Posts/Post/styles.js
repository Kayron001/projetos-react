import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '370px',
    position: 'relative',
    margin: '5px',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },
  title: {
    fontSize: '1.5em',
    padding: '0 16px',
    margin: '0px',
    height: '70px',
  },
  cardActions: {
    padding: '0 10px 2px 10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    textAlign: 'initial',
  },
  edit: {
    paddingLeft: '60px',
  },
  message:{
    padding: '12px',
    margin: '0px',
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {

  },
}));