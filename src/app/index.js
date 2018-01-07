import React from 'react';
import  { render } from 'react-dom';
import App from './App';

class Index extends React.Component {
 
  render() {


    return (
      
      <App/> 
     
    );
  }


}

render(<Index/>, window.document.getElementById("root"));