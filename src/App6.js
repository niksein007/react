import React from 'react'

import './App6.css';

class App6 extends React.Component {
	state = {
		numbers: [1,2,3,4],
		currentNumber:"",
		showNumbers:true

	};
	addNumber =(num)=>{
		// because its an object you have a curly bracket in the setState method
		this.setState({
			numbers:[...this.state.numbers, this.state.currentNumber],
			currentNumber:""
		})
	}

	recordNumber =(event)=>{
		console.log(event.target.value)
		this.setState({
			currentNumber:event.target.value
		})
	}

	showNumbers =()=>{
		let show = this.state.showNumbers;
		this.setState({showNumbers:!show})
	}

	render() {
		// let eachNumber = null;
		// if (this.state.showNumbers === true) {
		// 	eachNumber = this.state.numbers.map((numbers,index)=>{
		// 		return <li key ={index} > {numbers} </li>
		// 	});
		// } 
		const eachNumber = this.state.numbers.map((numbers,index)=>{
					return <li key ={index} > {numbers} </li>
			 	});

		return( <div className="main">
		<h1>React state part two</h1>
            {/* {eachNumber} */}
			{/* using a tenary operator */}
			<ul>{this.state.showNumbers?eachNumber : null}</ul>
			<input type="number" onChange ={this.recordNumber} value={this.state.currentNumber} />
			{/* <button onClick={()=>{this.addNumber(10)}}>Add Number</button> */}
			<button onClick={this.addNumber}>Add Number</button>
			<button onClick={this.showNumbers}>Show/Hide</button>
		</div>
		)
	}
}

export default App6;
