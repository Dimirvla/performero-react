import React from 'react';
import { Link } from 'react-router-dom';

export const Product = ({ id, title, poster }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<h3>
				<Link to={'product/' + id}>{title}</Link>
			</h3>
			<div className="image-parent">
				<img src={poster} className="img-fluid" alt="quixote" />
			</div>
		</li>
	);
};
