import React from 'react';

import { List } from '../List';
import './style.css';

export const Layout = () => {
	return (
		<main className="Layout">
			<h1 className="Layout__title">Rick and Morty</h1>
			<List />
		</main>
	);
};
