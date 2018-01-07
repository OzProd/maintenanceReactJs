import React from 'react';
import  { render } from 'react-dom';
import axios from 'axios';

export class ListeTechniciens extends React.Component {
   
 
  constructor(props , content)  {
    super(props);


this.state = {
    techniciens : []
             };
    
    }
//////getMACHINEs
    componentDidMount() {
    axios.get(`http://localhost:8080/T/all`)
      .then( (response) => {

      this.state.techniciens = response.data;
      console.log(this.state.techniciens);
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
                        <h2> Technicien</h2>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        
                                    </thead>
                                    <tbody>
                                    { 
                                        this.state.techniciens.map((technicien,key)=>
                                        <tr class="odd gradeX" key={technicien.idUtilisateur}>
                                            <td> { technicien.nom} </td>
                                            <td>{ technicien.prenom } </td>
                                            <td>{ technicien.specialite }</td>
                                         
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

