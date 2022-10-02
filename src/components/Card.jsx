import React from 'react'

const Card = (props) => {
	return (
		<div className="card card-compact h-fit p-2 w-11/12 mx-auto md:shadow-2xl sm:shadow-md">
			<figure>
				<img src="https://placeimg.com/500/500/arch" alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title sm:text-lg md:text-xl">
					{props.title}
				</h2>
				<p className="text-base">{props.description}</p>
				<div className="card-actions justify-center mt-4">
					<a
						href={props.repoLink}
						className="btn btn-primary bg-blue-900 hover:bg-blue-700">
						Github Repo
					</a>
					<a
						href={props.link}
						className="btn btn-primary bg-blue-900 hover:bg-blue-700">
						Project Link
					</a>
				</div>
				{props.tags && (
					<div className="flex justify-center flex-wrap gap-5 mt-4">
						{props.tags.map((tag, i) => (
							<span key={i} className="bg-blue-900 badge">
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
