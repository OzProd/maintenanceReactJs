import React from 'react';
import  { render } from 'react-dom';
import { ListeTechniciens} from './DirecteurT/Technicien';
import { Pannes } from './DirecteurT/Pannes'


export default  class IndexDT extends React.Component {
 

  constructor(props)  {
    super(props);
  }
  render(){

    return(
       <div>
        <h3>  indexdt</h3>
       <ListeTechniciens> </ListeTechniciens>
       <Pannes> </Pannes>
      </div>
    );
  }


}
