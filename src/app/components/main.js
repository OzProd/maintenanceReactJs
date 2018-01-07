import React from 'react';
import  { render } from 'react-dom';
import IndexCA from './IndexCA';
import IndexDT from './IndexDT';

export default class Main extends React.Component {
  constructor(props)  {
    super(props);
    
  }

  
  render (){
    console.log("children ");
    return  (
      <div>
      <h1> It's Main   </h1>
      </div>
    )
    ;
  }
}