import { ButtonIcon } from "../components/Button-icon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/Input-checkbox";
import { Text } from "../components/Text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import x from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState } from "react";
import React from "react";
import { InputText } from "../components/Input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/use-task";
import { Skeleton } from "../components/Skeleton";

interface TaskItemProps {
	task: Task;
	loading?: boolean;
}

export function TaskItem({ task, loading }: TaskItemProps) {
	const [isEditing, setIsEditing] = React.useState(
		task?.state === TaskState.Creating,
	);

	const [taskTitle, setTaskTitle] = useState(task.title || "");
	const {
		updatedTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	} = useTask();

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		if (task.state === TaskState.Creating) {
			deleteTask(task.id);
		}
		setIsEditing(false);
	}

	function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log({ id: task.id, taskTitle });
		await updatedTask(task.id, { title: taskTitle });
		setIsEditing(false);
	}

	function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;

		updateTaskStatus(task.id, checked);
	}

	async function handleDeleteTask() {
		await deleteTask(task.id);
	}

	return (
		<form onSubmit={handleSaveTask}>
			<Card size="md" className="flex items-center gap-4">
				{!isEditing ? (
					<>
						<InputCheckbox
							checked={task?.concluded}
							onChange={handleChangeTaskStatus}
							loading={loading}
						/>
						{!loading ? (
							<Text
								className={cx("flex-1", {
									"line-through": task?.concluded,
								})}
							>
								{task?.title}
							</Text>
						) : (
							<Skeleton className="h-6 flex-1" />
						)}
						<div className="flex gap-1">
							<ButtonIcon
								type="button"
								icon={TrashIcon}
								variant="tertiary"
								onClick={handleDeleteTask}
								loading={loading}
								handling={isDeletingTask}
							/>
							<ButtonIcon
								type="button"
								icon={PencilIcon}
								variant="tertiary"
								onClick={handleEditTask}
								loading={loading}
							/>
						</div>
					</>
				) : (
					<>
						<InputText
							value={taskTitle}
							className="flex-1"
							onChange={handleChangeTaskTitle}
							required
							autoFocus
						/>
						<div className="flex gap-1">
							<ButtonIcon
								type="button"
								icon={x}
								variant="secondary"
								onClick={handleExitEditTask}
							/>
							<ButtonIcon
								type="submit"
								icon={CheckIcon}
								variant="primary"
								handling={isUpdatingTask}
							/>
						</div>
					</>
				)}
			</Card>
		</form>
	);
}
