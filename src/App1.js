import React from 'react';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import './App.css';


const Pictures = (props)=>{
  return(
    <div className = "img">
  <img src ={props.name} alt="pic1" />
  <p className = "picText">{props.text}</p>

    </div>
  )
}

const Headlines = (props)=>{
  return(
    <div className="line">
     
      <p id = "one">{props.firstHead}</p>
      <hr />
      <p id ="two">{props.secondHead}</p>
    </div>
  )
}



class App1 extends React.Component {
  render() {
    return (
    <div className="App">
     <h1>marks react</h1>
    <Headlines firstHead ="Long Reads"  secondHead = "See All"/>
     <div className =" image">
      <Pictures name = {pic1} text="This is a girl" />
      <Pictures name = {pic2} text="This is a man " />
      <Pictures name = {pic3} text="This is a girl with glowing hands" />
      <Pictures name = {pic4} text="This is a man sitting down" />
      <Pictures name = {pic5} text="Lovely old couples" />
      </div>

      <Headlines firstHead ="Newsbeats"  secondHead = "See All"/>
      <div className =" image">
      <Pictures name = {pic1} text="This is a girl" />
      <Pictures name = {pic2} text="This is a man " />
      <Pictures name = {pic3} text="This is a girl with glowing hands" />
      <Pictures name = {pic4} text="This is a man sitting down" />
      <Pictures name = {pic5} text="Lovely old couples" />
      </div>

      {/* <Person  name="mark" age="22" pet = "lion"/> */}
    </div>
  );
    }
}

export default App1;
