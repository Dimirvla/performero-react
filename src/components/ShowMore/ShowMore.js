import React from 'react';
import { Link } from 'react-router-dom';

export const ShowMore = ({ product }) => {
	return (
		<div>
			<Link to="/" className="btn btn-light btn-sm mb-3">
				Back
			</Link>

			<div className="card">
				<div className="card-body">
					<h3>{product.title}</h3>
					<h5>Description:</h5>
					<p>{product.description}</p>
					<h5>Long description:</h5>
					<p>{product.longDescription}</p>
					<h6>Genre:</h6>
					<p>{product.genre}</p>
					<h6>Director:</h6>
					<p>{product.director}</p>
					<h6>Starring:</h6>
					<p>{product.starring}</p>
					<h6>Release Date:</h6>
					<p>{product.releaseDate}</p>
				</div>
			</div>
		</div>
	);
};
