import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { ButtonIcon } from "../components/Button-icon";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";
import { InputCheckbox } from "../components/Input-checkbox";
import { InputText } from "../components/Input-text";
import confirmIcon from "../assets/icons/check.svg?react";
import trashIcon from "../assets/icons/trash.svg?react";
import plusIcon from "../assets/icons/plus.svg?react";

export function PageComponent() {
	return (
		<Container>
			<div>
				<div>
					<Icon svg={confirmIcon} animate />
				</div>

				<div className="space-x-2">
					<Badge variant="primary" size="sm">
						5
					</Badge>
					<Badge variant="secondary" size="sm">
						2 de 5
					</Badge>
					<Badge loading>5</Badge>
				</div>
				<div>
					<Button icon={plusIcon}>Nova tarefa</Button>
				</div>
				<div className="flex gap-2">
					<ButtonIcon icon={confirmIcon} variant={"primary"} />
					<ButtonIcon icon={plusIcon} variant={"secondary"} />
					<ButtonIcon icon={trashIcon} variant={"tertiary"} />
				</div>
				<div className="flex gap-2">
					<InputText />
				</div>
				<div className="flex gap-3">
					<InputCheckbox />
				</div>

				<div>
					<Card size="md">Muito teste</Card>
				</div>
			</div>
		</Container>
	);
}
