import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import React from "react";

export function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
	const [isDeletingTask, setIsDeletingTask] = React.useState(false);

	function preparetask() {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		]);
	}

	function updatedTask(id: string, payload: { title: Task["title"] }) {
		setIsUpdatingTask(true);
		setTasks(
			tasks.map((task) =>
				task.id === id
					? { ...task, state: TaskState.Created, ...payload }
					: task,
			),
		);
		setIsUpdatingTask(false);
	}

	function updateTaskStatus(id: string, concluded: boolean) {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
		);
	}

	function deleteTask(id: string) {
		setIsDeletingTask(true);

		setTasks(tasks.filter((task) => task.id !== id));

		setIsDeletingTask(false);
	}

	return {
		preparetask,
		updatedTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	};
}
