import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [query, setQuery] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center w-screen max-w-1x1"
			action="">
			<input
				type="text"
				className="w-2/4 text-black border border-gray-300 rounded-l py-2 px-4 w-full  focus:border-blue-500"
				value={query}
				onChange={handleChange}
			/>
			<button
				type="submit"
				className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none focus">
				Search
			</button>
		</form>
	);
};
