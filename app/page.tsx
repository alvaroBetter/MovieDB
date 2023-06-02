import Head from "next/head";
import { MovieSearch } from "./components/MovieSearch";

export default function Home() {
	return (
		<div className="bg-black min-h-screen">
			<Head>
				<title>Movie Database</title>
				<meta name="description" content="A simple movie data base for users" />
			</Head>

			<main className="container mx-auto py410 px-4 flex flex-col items-center justify-center">
				<h1 className="text-4x1 font-bold mb-8 mt-2 text-white">
					Movie DataBase
				</h1>
				<MovieSearch />
			</main>
		</div>
	);
}
