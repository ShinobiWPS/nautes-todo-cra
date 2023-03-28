import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{      paper: classes.drawerPaper,
    }}
  >
    <Toolbar />
    <Divider />
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="To Complete" />
      </ListItem>
      <ListItem button component={Link} to="/completed">
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Completed" />
      </ListItem>
    </List>
  </Drawer>
  <main className={classes.content}>
    <div className={classes.toolbar} />
  </main>
</div>

  );
}

export default Sidebar;