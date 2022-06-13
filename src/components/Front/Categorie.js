import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {

  constructor(props) {
    super(props);
    this.saveFileSelected = this.saveFileSelected.bind(this);
    this.importFile = this.importFile.bind(this);
<<<<<<< HEAD
    
   // if(sessionStorage.getItem("Token")==null)
//{
 // window.location.href="/Authentification";
//}
=======

    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }
>>>>>>> fba2b7219a1c3317f7d9bcb007acb977de65d4ab

  }

  state = {
    categories: [],
    filex: null,
  }


  saveFileSelected(e) {

    console.log(e.target.files[0]);

    this.setState({
      filex: e.target.files[0]
    }
    )


  };


  importFile = (e) => {
    const formData = new FormData();
    formData.append("file", this.state.filex);
    try {
      const res = axios.post("https://localhost:7103/Integration/AddIntegration", formData).then(res => {

        console.log(res.data);
        window.location.href = "/Templates/" + res.data;
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  componentDidMount() {
<<<<<<< HEAD
    
    axios.get(`https://localhost:7103/Categorie/GetAll/`)
=======

    axios.get(`https://localhost:7103/Categorie/GetCategorie/`)
>>>>>>> fba2b7219a1c3317f7d9bcb007acb977de65d4ab
      .then(res => {

        const categories = res.data;

        this.setState({ categories });
      })
  }

  render() {
    return (
      <div>
        <h4 className='titre'>Image conversion prend habituellement quelques secondes. Convertir xml à pdf très rapidement.</h4>
        <h4 className='titre'>Il suffit à déposer vos fichiers xml sur la page et choisir la catégorie pour convertir pdf.</h4>

        <div className=" d-flex justify-content-center" style={{ marginBottom: "20px" }}>
          <div className="progress col-6 ">
            <div className="progress-bar progress-bar-striped w-25 progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>

        <div class="row g-4 justify-content-center">
          <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary2 text-center p-5">
              <h1 className="mb-4">sélectionnez un fichier xml que vous souhaitez convertir</h1>
              <form>
                <div className="row g-3">



                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="file" onChange={this.saveFileSelected} />
                      <label htmlFor="cage">Importer votre fichier</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-control border-0" >
                        {this.state.categories.map(categorie => <option>{categorie.libelle}</option>)}
                      </select>
                      <label htmlFor="cage">Categorie</label>
                    </div>
                  </div>
                  <div className="col-12">

                    <input type="button" className="btn btn-dark w-100 py-3" value="upload" onClick={this.importFile} />

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

    )
  }
}