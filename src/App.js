import axios from "axios";
import React from "react";

import './App.css';

class App extends React.Component{

  state = { advice : ''};

componentDidMount(){
  this.fetchAdvice();
}

fetchAdvice = () =>{

  console.log('click')
  axios.get('https://api.adviceslip.com/advice')

        .then((response)=>{
          console.log(response.data.slip);
          const {advice} = response.data.slip
          this.setState({advice});
        })
        .catch((error)=>{
          console.log(error)
        });
}

  render(){
    const {advice} = this.state;

    return(
      <div className="app">
        <div className="card">
            <h1>{advice}</h1>
            <button onClick={this.fetchAdvice} className="btn"><span>Get advice</span></button>
        </div>
      </div>
    )
  }
}

export default App;
