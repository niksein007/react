import React from 'react';
import corvet from './images/car1.jpg';
import ferarri from './images/car2.jpg';
import fordGT from './images/car3.jpg';
import fordTruck from './images/car4.jpg';
import './App3.css'
import Cars from './component/car';

class App3 extends React.Component {
	render() {
		return (
			<div className="App3">
				<Cars
					pic={corvet}
					rrp={200000}
					salePrice={150000}
					carName="Corvet "
					bhp="1200BHP"
					specs="3 Doors manual petrol"
					type="Saloon"
				/>
				<Cars
					pic={ferarri}
					rrp={300000}
					salePrice={255000}
					carName="Ferarri "
					bhp="1300BHP"
					specs="3 Doors manual petrol"
					type="Saloon"
				/>
				<Cars
					pic={fordGT}
					rrp={150000}
					salePrice={105000}
					carName="Ford GT "
					bhp="1400BHP"
					specs="3 Doors manual petrol"
					type="Sport Car"
				/>
				<Cars
					pic={fordTruck}
					rrp={85000}
					salePrice={65000}
					carName="Ford Truck "
					bhp="1100BHP"
					specs="4 Doors manual petrol"
					type="Truck"
				/>
			</div>
		);
	}
}

export default App3;
