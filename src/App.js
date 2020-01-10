import React from 'react';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Product } from './components/Product/Product';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShowMore } from './components/ShowMore/ShowMore';
import movies from './assets/movies.json';

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Route
					path="/"
					exact
					render={() => (
						<div className="container">
							<ul className="list-group">
								{movies.map(movie => (
									<Product key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />
								))}
							</ul>
						</div>
					)}
				/>
				<Route
					path="/product/:id"
					render={props => <ShowMore product={movies.find(({ id }) => id === parseInt(props.match.params.id))} />}
				/>
			</BrowserRouter>
		</>
	);
}

export default App;
