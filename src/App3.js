import React from 'react';
import corvet from './images/car1.jpg';
import ferarri from './images/car2.jpg';
import fordGT from './images/car3.jpg';
import fordTruck from './images/car4.jpg';
import './App3.css';
import Cars from './component/car';

class App3 extends React.Component {
	state = {
		car: [
			{
				pic: corvet,
				rrp: 200000,
				salePrice: 150000,
				carName: 'Corvet',
				bhp: '1200BHP',
				specs: '3 Doors manual petrol',
				type: 'Saloon'
			},

			{
				pic: ferarri,
				rrp: 300000,
				salePrice: 255000,
				carName: 'Ferarri',
				bhp: '1300BHP',
				specs: '3 Doors manual petrol',
				type: 'Saloon'
			},

			{
				pic: fordGT,
				rrp: 150000,
				salePrice: 105000,
				carName: 'Ford GT',
				bhp: '1400BHP',
				specs: '3 Doors manual petrol',
				type: 'Sport Car'
			},

			{
				pic: fordTruck,
				rrp: 85000,
				salePrice: 65000,
				carName: 'Ford Truck ',
				bhp: '1100BHP',
				specs: '4 Doors manual petrol',
				type: 'Truck'
			}
		]
	};


	render() {

		const eachCar = this.state.car.map((car,index)=>{
		
			return <Cars pic  ={car.pic} rrp ={car.rrp} salePrice = {car.salePrice} carName = {car.carName} bhp = {car.bhp} specs ={car.specs} type ={car.type} key = {index} />
			
		})
		
		return (
		<div className="App3">
		{eachCar};



		</div>
		
		)
	}
}

export default App3;
