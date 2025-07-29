import { Container } from "../components/Container";
import { TasksList } from "../core-components/tasks-list";
import { TasksSummary } from "../core-components/tasks-summary";

export function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex items-center justify-between">
				<TasksSummary />
			</header>

			<TasksList />
		</Container>
	);
}
