import React from 'react';

import './App.css';


const Questions = (props)=>{
  return(
    <div className = "background">
  <p className = "text">{props.text}</p>
  <span>+</span>
    </div>
  )
}

// const Headlines = (props)=>{
//   return(
//     <div className="line">
     
//       <p id = "one">{props.firstHead}</p>
//       <hr />
//       <p id ="two">{props.secondHead}</p>
//     </div>
//   )
// }



class App2 extends React.Component {
  render() {
    return (
    <div className="App2">
    <p>Frequently Asked Questions</p>
    <Questions text = "What is Netflix?" />
    <Questions text = "How much does Netflix cost?" />
    <Questions text = "Where can i watch?" />
    <Questions text = "How do i cancel?" />
    <Questions text = "What can i watch on Netflix?" />
    <Questions text = "How does the free trial work?" />
      <p className = "buttom">TRY 30 DAYS FREE    ></p>
     
    </div>
  );
    }
}

export default App2;
