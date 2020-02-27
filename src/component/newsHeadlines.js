import React from 'react';
import './newsHeadlines.css';

const Headlines = (props) => {
	return (
		<div className="headlines">
			<div>
				
				<img src={props.pic} alt={props.alt} />
			</div>
			<div className="text">
				<p className ="topic">{props.topic}</p>
				<p className ="country">{props.country}</p>
			</div>
		</div>
	);
};

export default Headlines;
