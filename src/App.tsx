
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompletedPage from './pages/CompletedPage';
import ToCompletePage from './pages/ToCompletePage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerContainer}>
						<List>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faUser}
										size="2x" />
								</ListItemIcon>
								<ListItemText
									primary={
										<Typography variant="h6">John Doe</Typography>
									}
								/>
							</ListItem>
						</List>
					</div>
				</Drawer>
				<main className={classes.content}>
					<Switch>
						<Route path="/completed">
							<CompletedPage />
						</Route>
						<Route path="/">
							<ToCompletePage />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
