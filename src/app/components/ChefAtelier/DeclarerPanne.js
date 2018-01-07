import React from 'react';
import  { render } from 'react-dom';

export class DeclarerPanne extends React.Component {
    constructor(props) {
        super(props);
      }

      

    render() {
        return (
            <div class="row"> 
            <div class="col-md-12">   
                <div class="panel panel-default">
                    <div class="panel-heading">
                              <h2> declaration </h2>
                              </div>
                              <div class="panel-body">
                              <div class="row">
                                <div class="col-md-6">
                                <form role="form">
                                
                                       <div class="form-group">
                                                <label for="disabledSelect">Machine</label>
                                                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input" disabled />
                                       </div>
                                       <div class="form-group">
                                            <label>Description de la panne</label>
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>

                                        
                                        <div class="form-group">
                                            <label>Nature de la panne</label>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />Electique
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Mecanique
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"/>Telecom
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"/>Informatique
                                                </label>
                                            </div>
                                            <div>
                                                <input type="button" name="ok" value="ok"/>
                                            </div>
                                        </div>
                                        
                                       
                                        

                                </form>

                                </div>
                            </div>
                              </div>
                          </div>
                          </div>
                  </div>
    
    );
    }
}
