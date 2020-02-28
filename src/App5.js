import React from 'react';
import bedroom1 from './images/bedroom1.jpg';
import bedroom2 from './images/bedroom2.jpg';
import house from './images/house.jpg';
import girl from './images/girl.jpg';
import girl2 from './images/girl2.jpg';
import boy from './images/boy.jpg';
import rating from './images/rating.png';
import Room from './component/room'
import './App5.css';

class App5 extends React.Component {
	state = {
		appartment: [
			{
				picture: bedroom1,
				rating: rating,
				description: '', 
				icon: girl,
				name: 'Cherl',
				location: 'United States'
			},

			{
				picture: bedroom2,
				rating: rating,
				description: '',
				icon: girl2,
				name: 'Charlie',
				location: 'United Kingdom'
			},

			{
				picture: house,
				rating: rating,
				description: '',
				icon: boy,
				name: 'John Wayne',
				location: 'Canada'
			}
		]
	};

	render() {
		const appartment = this.state.appartment.map((appartment,index)=>{
            return <Room picture ={appartment.picture} rating ={appartment.rating} description ={appartment.description}
                        icon ={appartment.icon} name ={appartment.name} location ={appartment.location}  key ={index} />
        });

		return <div className="main">
            {appartment}
        </div>;
	}
}

export default App5;
