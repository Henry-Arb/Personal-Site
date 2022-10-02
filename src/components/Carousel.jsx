import Slider from 'react-slick'
import Card from './Card'

import React from 'react'

const Carousel = ({ projects }) => {
	var settings = {
		dots: true,
		arrows: true,
	}
	return (
		<div className="card bg-orange-300 p-1 md:p-10 w-11/12 mx-auto shadow-2xl">
			<Slider {...settings}>
				{projects.map((item, i) => (
					<Card key={i} {...item} />
				))}
			</Slider>
		</div>
	)
}

export default Carousel
