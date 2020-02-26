import React from 'react';
import './carDescription.css';

const Description = (props) => {
	return (
		<div>
			<p className="carName"> {props.carName}</p>
			<p className="bhp"> {props.bhp}</p>
			<p className="specs"> {props.specs}</p>
			<p className="type"> {props.type}</p>
			<p className="des2">BRAND NEW - IN STOCK</p>
		</div>
	);
};

export default Description;
