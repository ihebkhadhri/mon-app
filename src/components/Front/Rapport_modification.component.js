import axios from 'axios';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Rapport_modification extends React.Component {

  constructor(props) {
    super(props);
    

    if(sessionStorage.getItem("Token")==null)
    {
      window.location.href="/Authentification";
    }

  }


state = {
    docs: [
        { uri: require("../../Templates Word_pdf/a.pdf") },
        
      ],
      idintegration:0
      ,integration:Object

  }

  componentDidMount() {

    


  let hrf=  window.location.href.split("/");
  let idi=hrf[hrf.length-1];

  this.setState({
    idintegration:idi
  
  })


  
 
    

    
    axios.get(`https://localhost:7103/Integration/GetIntegration/`+idi)
      .then(res => { console.log(res.data);
        this.setState({integration:res.data,
          
        })
        
        
      })


      axios.get(`https://localhost:7103/Integration/GetFinalPdf/`+idi)
      .then(res => { console.log(res.data);
        this.setState({
          docs: [
            {  uri: "data:application/pdf;base64, " + encodeURI(res.data)
          }
          ]
        })
        
        
      })
  }




  render() {
    return (
      <div className="templates">
        
        <div className="row">
          
        <div className="col-5">

          <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={this.state.docs}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false
            }
          }}
          style={{ height: 700 }}
        />
        
  </div>
          
   <div className ="col-7 mt-5">
   <ul>
   
   <li> Mes Données </li>
    <li>{this.state.integration.nom} </li>
    <li>{this.state.integration.prenom} </li>
    <li>{this.state.integration.age} </li>
    <li>{this.state.integration.nationalite} </li>
      
</ul>

     
   </div>
  
  </div>
      </div>
    );
  }
  }