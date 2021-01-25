import { useState, useEffect } from 'react';

export const useFetchData = (page = 1) => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const BASE_API = `https://rickandmortyapi.com/api/character/?page=${page}`;

	const normalizeData = (data) => {
		return data.map((item) => ({
			id: item.id,
			name: item.name,
			image: item.image,
			origin: item.origin.name,
			species: item.species,
			gender: item.gender,
			status: item.status,
		}));
	};

	const getData = async () => {
		setLoading(true);
		try {
			const response = await fetch(BASE_API);
			const data = await response.json();

			const normData = normalizeData(data.results);
			setCharacters(normData);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		getData();
	}, [page]);

	return { characters, loading, error };
};
