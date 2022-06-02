import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default class Rapport_template extends React.Component {
  constructor(props) {
    super(props);
    this.onpasse = this.onpasse.bind(this);
    this.selectiontemplate = this.selectiontemplate.bind(this);
  }


  state = {
    docs: [],
    idtemplate: 0,
    idintegration: '62554e665306a2fc8ae06791'
  }


  componentDidMount() {

    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://localhost:7103/Template/AllTemplatesByCategorie");


    axios.get("https://localhost:7103/Template/AllTemplatesByCategorie")
    .then(res => {
       

        let listtemplate = (res.data);
        console.log(listtemplate);
        let _docs = [];
        for (let i = 0; i < listtemplate.length; i++) {

          let _listemplateId=listtemplate[i].split("-*-")[0];
          let _listemplateUrlFile=listtemplate[i].split("-*-")[1];
          console.log(_listemplateId);
          console.log(_listemplateUrlFile);

          let _doc = [
            {
              uri: "data:application/pdf;base64, " + encodeURI(_listemplateUrlFile),
              id: _listemplateId
            },

          ];


          _docs.push(_doc);
        }



        let hrf = window.location.href.split("/");
        let idi = hrf[hrf.length - 1];

        this.setState({
          docs: _docs,
          idintegration: idi
        })

        
        

      
      
      
    })


   




  }

  selectiontemplate(e) {
    e.preventDefault();

    this.setState({ idtemplate: e.target.id })
  }

  onpasse(e) {
    e.preventDefault();

    axios.get('https://localhost:7103/Integration/EcrireTemplate/' + this.state.idintegration + '/' + this.state.idtemplate)
      .then(res => {

        console.log(res.data);
        window.location.href = "/Rapport/" + this.state.idintegration;
      });

  }


  /* const docs = [
     { uri: require("../../../src/a.pdf") },
     
   ];*/

  render() {
    return (
      <div className="templates">

        <h3 style={{ textAlign: 'center' }}>Ces modèles sont prêts à l’emploi, il ne vous reste alors plus qu’à les compléter et à les adapter selon votre profil. Choisir le modèle qui corresponde le mieux à votre besoin.</h3>
        <div className="row">

          {this.state.docs.map(doc =>
            <div className="col-4">
              <DocViewer
                pluginRenderers={DocViewerRenderers}
                documents={doc}
                config={{
                  header: {
                    disableHeader: false,
                    disableFileName: true,
                    retainURLParams: false
                  }
                }}
                style={{ height: 500 }}
              />
              <button onClick={this.selectiontemplate} id={doc[0].id} > Sélectionner</button>
            </div>
          )}


        </div>
        <div>
          <button onClick={this.onpasse} style={{ color: "#CA300A", fontWeight: "bold" }} > Suivant </button>
        </div>
      </div>
    );
  }
}