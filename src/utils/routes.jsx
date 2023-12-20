import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage/LoginPage"
export const AppRoutes = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={LoginPage} />
			</Routes>
		</BrowserRouter>
	)
}