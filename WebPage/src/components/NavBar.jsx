import { useRef } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
	const activeStyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	}


	return (
		<header className="rounded-xl  self-center mt-4 z-40">
			<nav className="">
				<NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/" >Home</NavLink>
				<NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/game">Play</NavLink>
				<NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/overview">Overview</NavLink>
				<NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/model">Explore</NavLink>
			</nav>

		</header>
	);
}

export default NavBar;