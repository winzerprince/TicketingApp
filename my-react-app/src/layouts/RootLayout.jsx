import { NavLink, Outlet } from "react-router-dom";
import "../styles/root.css"

export const RootLayout = () => {
	return (
		<div className="root-layout">
			<header>
				<nav>
					{ <h1>TicketHub</h1> }
					<NavLink to="/">Home</NavLink>
					<NavLink to="user">User</NavLink>
					<NavLink to="contact">Contact</NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>

			<footer className="footer">
				<p> &copy; 2025 TicketHub</p>
			</footer>
		</div>
	)
}
