import { Button } from "../components/Button";
import plusIcon from "../assets/icons/plus.svg?react";
import { TaskItem } from "./task-item";
import { UseTasks } from "../hooks/use-tasks";
import { useTask } from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

export function TasksList() {
	const { tasks, isLoadingTasks } = UseTasks();
	const { preparetask } = useTask();

	function handleNewTask() {
		preparetask();
	}

	return (
		<>
			<section>
				<Button
					icon={plusIcon}
					className="w-full"
					onClick={handleNewTask}
					disabled={
						tasks.some((task) => task.state === TaskState.Creating) ||
						isLoadingTasks
					}
				>
					Nova Tarefa
				</Button>
			</section>

			<section className="space-y-2">
				{!isLoadingTasks &&
					tasks.map((task) => <TaskItem key={task.id} task={task} />)}
				{isLoadingTasks && (
					<>
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
					</>
				)}
			</section>
		</>
	);
}
