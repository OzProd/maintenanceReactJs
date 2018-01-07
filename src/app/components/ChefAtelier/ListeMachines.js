import React from 'react';
import  { render } from 'react-dom';
import axios from 'axios';

export class ListeMachines extends React.Component {
   
 
  constructor(props , content)  {
    super(props);


this.state = {
  machines : []
             };
    
    }
//////getMACHINEs
    componentDidMount() {
    axios.get(`http://localhost:8080/machine/all`)
      .then( (response) => {

      this.state.machines = response.data;
      console.log(this.state.machines);
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
                        <h2> Machines</h2>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th> Code</th>
                                            <th>Marque </th>
                                            <th> Model</th>
                                            <th> Declaration </th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { 
                                        this.state.machines.map((machine,key)=>
                                        <tr class="odd gradeX" key={machine.idMachine}>
                                            <td> { machine.code } </td>
                                            <td>{ machine.marque } </td>
                                            <td>{ machine.model }</td>
                                           <td> 
                                             <a href="#declare" class="btn btn-danger btn-lg" id="PanneBtn" >Panne </a>
                                            
                                           </td>
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

