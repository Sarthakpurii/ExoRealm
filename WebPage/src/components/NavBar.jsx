import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const home = useRef();
	const model = useRef();
	const travel = useRef();

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<header className="rounded-xl mt-4 z-40">
			{/* <h3>LOGO</h3> */}
			<nav ref={navRef} className="z-40">
				<a href="/#" onClick={() => scrollToSection('home')} >Home</a>
				<a href="/#" onClick={() => scrollToSection('overview')}>Overview</a>
				<a href="/#" onClick={() => scrollToSection('demo')}>Explore</a>
				<a href="/#" onClick={() => scrollToSection('model')}>Play</a>
			</nav>
			{/* <button
				className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes />
			</button>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button> */}
		</header>
	);
}

export default NavBar;