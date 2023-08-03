import { makeStyles } from '@material-ui/core/styles';
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
  logoImage: {
    width: '100%', // Set the desired width of the image
    marginBottom: theme.spacing(2), // Add margin-bottom for spacing
  },
}));
