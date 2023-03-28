import {
	Button,
	MenuItem, Paper, Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexGrow: 1,
	},
	content: {
		flexGrow: 1,
		padding: '24px',
	},
	table: {
		minWidth: 650,
	},
	form: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '24px',
	},
	input: {
		marginRight: '24px',
	},
	button: {
		minWidth: '100px',
	},
});

type Task = {
  id: number;
  task: string;
  person: string;
};

const CompletedTasksPage: React.FC = () => {
	const classes = useStyles();
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState<string>('');
	const [assignedPerson, setAssignedPerson] = useState<string>('');

	const handleAddTask = () => {
		if (newTask && assignedPerson) {
			const newId = tasks.length + 1;
			const newTaskObj: Task = {
				id: newId,
				task: newTask,
				person: assignedPerson,
			};
			setTasks([...tasks, newTaskObj]);
			setNewTask('');
			setAssignedPerson('');
		}
	};

	const handleDeleteTask = (taskId: number) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	return (
		<div className={classes.root}>
			<nav className={classes.sidebar}>
				<ul>
					<li>Completed</li>
					<li>To Complete</li>
				</ul>
			</nav>
			<main className={classes.content}>
				<h1>Completed Tasks</h1>
				<div className={classes.filter}>
					<TextField label="Filter"
						variant="outlined" />
					<TextField
						select
						label="Filter by"
						value=""
						variant="outlined"
					>
						<MenuItem value="">All Fields</MenuItem>
						<MenuItem value="task">Task</MenuItem>
						<MenuItem value="person">Person</MenuItem>
					</TextField>
				</div>
				<TableContainer component={Paper}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell>Task</TableCell>
								<TableCell>Person</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							{tasks.map((task) => (
								<TableRow key={task.id}>
									<TableCell>{task.task}</TableCell>
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
				<div className={classes.form}>
					<TextField
						label="New Task"
						variant="outlined"
						className={classes.input}
						value={newTask}
						onChange={(event) => setNewTask(event.target.value)}
					/>
					<TextField
						select
						label="Assigned To"
						variant="outlined"
						value={assignedPerson}
						onChange={(event) => setAssignedPerson(event.target.value)}
					>
						<MenuItem value="">None</MenuItem>
						<MenuItem value="Alice">Alice</MenuItem>
						<MenuItem value="Bob">Bob</MenuItem>
						<MenuItem value="Charlie">Charlie</MenuItem>
					</TextField>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleAddTask}
					>
                        Add
					</Button>
				</div>
			</main>
			<div className={classes.account}>
				<img src="avatar.jpg"
					alt="Avatar" />
				<span>John Doe</span>
			</div>
		</div>
	);
};

export default CompletedTasksPage;
