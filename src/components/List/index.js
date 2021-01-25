import React, { useState } from 'react';

import { ListItem } from '../ListItem';
import { useFetchData } from '../../hooks/useFetchData';
import './style.css';

export const List = () => {
	const [page, setPage] = useState(1);
	const { characters, loading, error } = useFetchData(page);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>{error}</h1>;

	return (
		<ul className="List">
			{characters.map((char) => (
				<ListItem key={char.id} {...char} />
			))}
			<button className="List__button--prev" onClick={() => setPage(page - 1)}>
				Previous
			</button>
			<button className="List__button--next" onClick={() => setPage(page + 1)}>
				Next
			</button>
		</ul>
	);
};
