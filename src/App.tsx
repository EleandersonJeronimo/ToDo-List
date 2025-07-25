import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { PageComponent } from "./pages/page-component";
import { LayoutMain } from "./pages/layout-main";
import { PageHome } from "./pages/page-home";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/componentes" element={<PageComponent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
