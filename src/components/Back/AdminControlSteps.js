import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import swal from 'sweetalert';
import './../../jquery.dataTables.min.css'
import { Link } from 'react-router-dom';
$.DataTable = require('datatables.net');
export default class AdminControlSteps extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.downloadinput = this.downloadinput.bind(this);
    }
    state = {
        
        integrations: []
    
      }
      downloadinput(id) {
        axios.get(`https://localhost:7103/Archive/Downloadinput/` + id)
            .then(res => {

                console.log(res.data);
                const url = 'data:xml;base64,' + encodeURI(res.data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'input.xml'); //or any other extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            }
            )
    }

    delete(id) {
        axios.delete(`https://localhost:7103/Integration/DeleteIntegration/` + id)
            .then(res => {
                window.location.reload();

            }
            )
    }
    componentDidMount(){
      
        axios.get(`https://localhost:7103/Integration/IntegrationStep1/`)

        .then(res => {
  
            console.log(res.data);
  
          this.setState({ integrations: res.data });
          $('#dt').DataTable({ "pagingType": "full_numbers" });
          $('.dataTables_length').addClass('bs-select');
        })
      
   
      }

     
    render() {
        return (
            <div>
                
                 <h2 className="text-center">Workflow Etape 1</h2>
                 
                 <br></br>
                 <div className = "row">
                 <table id="dt" className="table   table-striped table-bordered table-sm" cellSpacing="0" width="100%" >


                            <thead>
                                <tr>
                                    <th>username</th>
                                    <th> Catégorie</th>
                                    <th> Date de dépot</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.integrations.map(
                                        integration => 
                                        <tr>
                                            <td>{integration.userImport.username}</td>
                                             <td>{integration.template.categorie.libelle}  </td>   
                                             <td>{new Date(integration.created).toLocaleDateString()}  {new Date(integration.created).toLocaleTimeString()} </td>
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.downloadinput(integration.id)} className="btn btn-success">extraire </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.delete(integration.id)} className="btn btn-success">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                          )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
