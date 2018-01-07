import React from 'react';
import  { render } from 'react-dom';
import { DeclarerPanne } from './ChefAtelier/DeclarerPanne'
import { ListeMachines } from './ChefAtelier/ListeMachines'

export default class IndexCA extends React.Component {
 

    constructor(props)  {
      super(props);
    }
    render(){
  
      return(
         <div>
          <h3>  indexca </h3>
          <ListeMachines> </ListeMachines>
          <DeclarerPanne> </DeclarerPanne>
        </div>
      );
    }

}
