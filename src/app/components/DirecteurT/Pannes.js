import React from 'react';
import  { render } from 'react-dom';
import axios from 'axios';

export class Pannes extends React.Component {
   
 
  constructor(props , content)  {
    super(props);


this.state = {
    pannes : []
             };
    
    }
//////getPannes
    componentDidMount() {
    axios.get(`http://localhost:8080/maintenance/all`)
      .then( (response) => {

      this.state.pannes = response.data;
      console.log(this.state.pannes);
      this.setState({ });
      
///////Actions in java script

//const s = document.createElement('script');
//scriptText = document.createTextNode('function myFunction() {  alert("hii"); } ');
//script.appendChild(scriptText);
//document.head.appendChild(script);
    });    
 }


  render() {


    return (
      
      
      <div class="row"> 
      <div class="col-md-12">   
          <div class="panel panel-default">
              <div class="panel-heading">
                        <h2> Les Pannes</h2>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        
                                    </thead>
                                    <tbody>
                                    { 
                                        this.state.pannes.map((panne,key)=>
                                        <tr class="odd gradeX" key={panne.idUtilisateur}>
                                            <td> { panne.nature} </td>
                                            <td>{ panne.machine } </td>
                                        </tr>
                                         )
                                        }
                                        </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                    </div>
            </div>

     
    );
  }


}

