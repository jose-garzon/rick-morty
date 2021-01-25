import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

export const Modal = ({
	isOpen,
	image,
	name,
	origin,
	species,
	gender,
	status,
	openCloseModal,
}) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<section className="Modal">
			<div className="Modal__content">
				<figure className="Modal__image">
					<img src={image} alt={name} />
				</figure>
				<div className="Modal__description">
					<h1 className="Modal__title">{name}</h1>
					<div>
						<p className="Modal__data">{origin}</p>
						<p className="Modal__data">{species}</p>
						<p className="Modal__data">{gender}</p>
						<p className="Modal__data">{status}</p>
					</div>
					<button className="Modal__button" onClick={openCloseModal}>
						Close
					</button>
				</div>
			</div>
		</section>,
		document.getElementById('modal')
	);
};
