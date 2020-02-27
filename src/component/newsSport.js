import React from 'react';
import './newsSport.css';

const Sport = (props) => {
	return (
		<div className="sport">
			<div>
				<img src={props.pic} alt={props.alt} />
			</div>
			<div className="text">
				<p className ="topic">{props.topic}</p>
				<p className ="sportType">{props.sportType}</p>
			</div>
		</div>
	);
};

export default Sport;
