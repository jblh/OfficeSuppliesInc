import { makeStyles } from '@material-ui/core/styles';
// import Image from '../assets/image15.jpg';
import Image from '../assets/background.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  bckImg: {
    position: 'absolute',
    top: '50px',
    left: 0,
    width: '100%',
    height: '100%',

    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.35)), url(${Image})`,
    // backgroundImage: `url(${Image})`,
    backgroundSize: '130%',
    backgroundPosition: 'auto auto',
    backgroundBlendMode: 'darken',
    backgroundRepeat: 'no-repeat',
  },
  box: {
    boxShadow: '5px 5px 5px 5px',
  },
}));
