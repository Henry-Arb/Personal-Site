import React from 'react'

const Header = () => {
	return (
		<div className="navbar bg-orange-300 fixed z-10 w-screen ">
			<div className="dropdown lg:hidden">
				<div className="">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-300 rounded-box w-52">
						<li>
							<a href="#hero">Home</a>
						</li>
						<li>
							<a href="#aboutMe">About Me</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="lg:navbar-start sm:mx-auto">
				<a className="btn btn-ghost normal-case text-xl" href="#hero">
					Henry Arboladora
				</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li>
						<a href="#hero">Home</a>
					</li>
					<li>
						<a href="#aboutMe">About Me</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
