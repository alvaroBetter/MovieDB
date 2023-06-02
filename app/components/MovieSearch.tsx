"use client";

import { useState } from "react";
import { searchMovie } from "../service/movie.service";
import { MovieCard } from "./MovieCard";
import { SearchBar } from "./SearchBar";

export const MovieSearch = () => {
	const [movie, setMovie] = useState([]);

	const handleSearch = async (query: string) => {
		const results = await searchMovie(query);
		setMovie(results);
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			<div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
				{movie.map((movie: any) => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						overview={movie.overview}
						posterPath={movie.poster_path}
					/>
				))}
			</div>
		</>
	);
};
