import React, { useState } from 'react';

import { Modal } from '../Modal';
import './style.css';

export const ListItem = ({ name, image, origin, species, gender, status }) => {
	const [isOpen, setIOpen] = useState(false);
	const openCloseModal = () => {
		setIOpen(!isOpen);
	};

	return (
		<>
			<li className="Item" onClick={openCloseModal}>
				<figure className="Item__image">
					<img src={image} alt={name} />
				</figure>
				<h1 className="Item__title">{name}</h1>
			</li>
			<Modal
				isOpen={isOpen}
				openCloseModal={openCloseModal}
				name={name}
				image={image}
				origin={origin}
				species={species}
				gender={gender}
				status={status}
			/>
		</>
	);
};
