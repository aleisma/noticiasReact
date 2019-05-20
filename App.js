import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

  state = {
    noticias : []
  }


  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general' ) => {

    // console.log(categoria);

    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6c1c1dfcb4a943c7bf481bc628b80153`;
    // console.log(url);

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      })

  }


  render() {
    return (
      <div className="contenedor-app">
            <Header 
              titulo = 'Filtrador de Noticias'
            />


        <div className="container blue contenedor-noticias">
            <Formulario
              consultarNoticias={this.consultarNoticias}
            />
            <Noticias
                noticias = {this.state.noticias}
            />
         </div>
      </div>
    );
  }
}

export default App;
