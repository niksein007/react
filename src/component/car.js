import React from 'react';

import './car.css';
import Description from './carDescription';
const Cars = (props) => {
	return (
		<div>
			<img src={props.pic} alt="car" />

			<div className="des1">
				<p className="strike">RRP</p>
				<p className="save">Save</p>
			</div>
			<div className="price">
				<p className="strike">£{props.rrp}</p>
				<p className="salePrice">£{props.salePrice}</p>
				<p className="saveValue">£{props.rrp - props.salePrice}</p>

			</div>
            <Description carName ={props.carName} bhp ={props.bhp} specs ={props.specs} type={props.type} />
		</div>
	);
};

export default Cars;
