import React from 'react';
import Sport from './component/newsSport';
import Headlines from './component/newsHeadlines';
import torys from './images/torys.jpg';
import hkStudent from './images/hkStudent.jpg';
import andyMurray from './images/andyMurray.jpg';
import garyWoodland from './images/garyWoodland.jpg';
import sarri from './images/sarri.jpg';
import boxers from './images/boxers.jpg';
import './App4.css';

class App4 extends React.Component {
	state = {
		headlines: [
            {   pic:torys,
                alt:"torys",
				topic: 'Tory leader hopefuls clash over Brexit',
				country: 'UK POLITICS'
            },
            {   pic:hkStudent,
                alt:"hkStudent",
				topic: 'Freed student activist calls on HK leader to resign',
				country: 'CHINA'
            },
            {   pic:andyMurray,
                alt:"andyMurray",
				topic: 'Murray on rehab, mental health and escape rooms',
				country: 'UK'
			}
		],

		sport: [
            {   pic:garyWoodland,
                alt:"garyWoodland",
				topic: 'Woodland wins first major at US Open',
				sportType: 'GOLF'
            },
            {   pic:sarri,
                alt:"sarri",
				topic: 'Five questions for chelsea after Sarri exit',
				sportType: 'CHELSEA'
            },
            {   pic:boxers,
                alt:"boxers",
				topic: `'We might get golden heavyweight period'`,
				sportType: 'BOXING'
			}
		]
	};
	render() {
		const headlines = this.state.headlines.map((headlines, index) => {
			return <Headlines pic = {headlines.pic} alt ={headlines.alt} topic={headlines.topic} country={headlines.country} key={index} />;
		});

		const sport = this.state.sport.map((sport, index) => {
			return <Sport pic = {sport.pic} alt ={sport.alt} topic={sport.topic} sportType={sport.sportType} key={index} />;
		});
		return (
			<div className="main">
				<div>
					<p className="heading">News headlines ></p>
					{headlines}
				</div>
				<div>
					<p className="heading">Sport headlines >    <span>x</span> </p>
					{sport}
				</div>
			</div>
		);
	}
}
export default App4;
