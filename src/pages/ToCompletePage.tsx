
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
	filter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
	},
	formControl: {
		minWidth: 120,
	},
}));

function ToCompletePage() {
	const classes = useStyles();
	const [tasks, setTasks] = React.useState([]);
	const [filterValue, setFilterValue] = React.useState('');
	const [filterType, setFilterType] = React.useState('person');
	const [newTask, setNewTask] = React.useState({ text: '', person: '' });

	const handleFilterChange = (event) => {
		setFilterValue(event.target.value);
	};

	const handleFilterTypeChange = (event) => {
		setFilterType(event.target.value);
	};

	const handleNewTaskChange = (event) => {
		setNewTask({
			...newTask,
			[event.target.name]: event.target.value,
		});
	};

	const handleNewTaskSubmit = (event) => {
		event.preventDefault();
		setTasks([...tasks, newTask]);
		setNewTask({ text: '', person: '' });
	};

	const handleDeleteTask = (taskId: number) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const filteredTasks =
		filterValue === ''
			? tasks
			: tasks.filter((task) => {
				if (filterType === 'person') {
					return task.person.toLowerCase().includes(filterValue.toLowerCase());
				} else {
					return task.text.toLowerCase().includes(filterValue.toLowerCase());
				}
			});

	return (
		<div className={classes.root}>
			<div className={classes.filter}>
				<TextField
					label="Filter"
					value={filterValue}
					onChange={handleFilterChange}
				/>
				<FormControl className={classes.formControl}>
					<InputLabel id="filter-type-label">Filter By</InputLabel>
					<Select
						labelId="filter-type-label"
						id="filter-type"
						value={filterType}
						onChange={handleFilterTypeChange}
					>
						<MenuItem value="person">Person</MenuItem>
						<MenuItem value="task">Task</MenuItem>
					</Select>
				</FormControl>
			</div>
			<form onSubmit={handleNewTaskSubmit}>
				<TextField
					label="New Task"
					name="text"
					value={newTask.text}
					onChange={handleNewTaskChange}
				/>
				<FormControl className={classes.formControl}>
					<InputLabel id="person-label">Assign To</InputLabel>
					<Select
						labelId="person-label"
						id="person"
						name="person"
						value={newTask.person}
						onChange={handleNewTaskChange}
					>
						<MenuItem value="John Doe">John Doe</MenuItem>
						<MenuItem value="Jane Smith">Jane Smith</MenuItem>
						<MenuItem value="Bob Johnson">Bob Johnson</MenuItem>
					</Select>
				</FormControl>
				<Button type="submit"
					variant="contained"
					color="primary">
Add
				</Button>
			</form>
			<TableContainer component={Paper}
				className={classes.container}>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Task</TableCell>
							<TableCell>Assign To</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredTasks.map((task, index) => (
							<TableRow key={index}>
								<TableCell>{task.text}</TableCell>
								<TableCell>{task.person}</TableCell>
								<TableCell>
									<Button
										variant="contained"
										color="secondary"
										onClick={() => handleDeleteTask(task.id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default ToCompletePage;
