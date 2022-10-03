import Header from './components/Header'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

import './App.css'

const tags = [
	'Node.js',
	'Express.js',
	'Materialize',
	'Passport.js',
	'Passport.js',
]

const projects = [
	{
		title: 'Post-it!',
		description:
			"A full-stack app that allows users, to create / edit their own stories and to read other user's stories.",
		link: '',
		repoLink: 'https://github.com/Henry-Arb/Node.js-App-with-userAuth',
		tags: ['Node.js', 'Express.js', 'MaterializeCSS', 'Passport.js', 'EJS'],
	},
	{
		title: 'To-Do-List',
		description:
			'A full-stack app designed to help users maintain focus and productivity by incorporting a pomodoro session into a to-list application',
		link: 'https://pomodoro-tasks-tracker.herokuapp.com/',
		repoLink: 'https://github.com/Henry-Arb/todo-mvc-auth-local',
		tags: ['Node.js', 'Express.js', 'MaterializeCSS', 'Passport.js', 'EJS'],
	},
	{
		title: 'SpringBoard',
		description:
			'An app designed to help and encourage users to achieve a healthier lifestyle in a fun and enjoyable way. This app is still being developed and links will be update accordingly.',
		link: 'https://github.com/Henry-Arb',
		repoLink: 'https://github.com/Henry-Arb',
	},
	{
		title: 'Personal Website',
		description: 'A site designed to showcase my portfolio',
		link: '',
		repoLink: '',
		tags: ['React', 'TailwindCSS', 'DaisyUI'],
	},
]

function App() {
	return (
		<div className="app">
			<Header />
			<section
				id="hero"
				className="h-screen flex justify-center items-center bg-blue-900">
				<h1 className="sm:text-4xl md:text-9xl neumorphism p-20 sm:w-screen md:w-fit text-center">
					Welcome
				</h1>
			</section>
			<div className="h-fit flex flex-col p-12 justify-around bg-blue-900">
				<section
					id="aboutMe"
					className="h-fit flex flex-col items-center neumorphism md:w-11/12 sm:w-screen p-10 self-center">
					<img
						className="md:w-5/12 card bg-orange-300 p-1"
						src="assets/imageedit_1_2314005629.jpg"
						alt="Image of Me"
					/>
					<p className="mt-4 md:w-3/5 sm:text-start md:text-justify">
						Hi there! my name is Henry James Arboladora and I am
						currently a third-year Computer Engineering student at
						Toronto Metropolitan University, formerly known as
						Ryerson University. I am passionate and excited about
						all the latest things that the world of tech has to
						offer. At the moment, I am learning how to become a
						full-stack web developer, but I am also looking into
						learning more about artificial intelligence and machine
						learning.
					</p>
					<p className="mt-4 md:w-3/5 sm:text-start md:text-justify">
						When I'm not coding you can often find me either working
						out at the gym with my friends or language or trying to
						cook new recipes. I am also a huge fan of Formula 1 and
						the complete organized chaos it often devolves into. I
						would love the opportunity to meet you whether it be for
						a job, project, or even just a friendly chat. Please
						feel free to{' '}
						<a
							className="link"
							href="https://linktr.ee/henryarboladora">
							connect with me
						</a>
						.
					</p>
				</section>
				<section
					id="portfolio"
					className="h-fit flex flex-col items-center mt-20 neumorphism sm:w-screen md:w-11/12 sm:p-1 sm:py-5 md:p-10 self-center">
					<h2 className="text-4xl mb-4">Portfolio</h2>
					<Carousel projects={projects}></Carousel>
				</section>
			</div>
			<Footer />
		</div>
	)
}

export default App
