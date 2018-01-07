import React from 'react';
import  { render } from 'react-dom';
import IndexCA from './IndexCA';
import IndexDT from './IndexDT';
import Main from './main'
export default class Hello extends React.Component {
  constructor(props)  {
    super(props);
  }
 
  
  render (){
  
    return  (
      <div>
      <h1> It's Hello   </h1>
      {this.props.children}
      </div>
    )
    ;
  }
}