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

export function TaskItem() {
	const [isEditing, setIsEditing] = React.useState(false);

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		setIsEditing(false);
	}

	return (
		<Card size="md" className="flex items-center gap-4">
			{!isEditing ? (
				<>
					<InputCheckbox />
					<Text className="flex-1">Fazer compras da semana</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant="tertiary" />
						<ButtonIcon
							icon={PencilIcon}
							variant="tertiary"
							onClick={handleEditTask}
						/>
					</div>
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							icon={x}
							variant="secondary"
							onClick={handleExitEditTask}
						/>
						<ButtonIcon icon={CheckIcon} variant="primary" />
					</div>
				</>
			)}
		</Card>
	);
}
