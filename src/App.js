import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Departments from "./components/Departments";

function App() {
  
  const departamentos = [
    {
      nome: 'Antropologia',
      corPrimaria: '#8A2BE2',       
      corSecundaria: '#E6E0FA'      
    },
    {
      nome: 'Agente do FBI',
      corPrimaria: '#1E90FF',       
      corSecundaria: '#D0E8FF'      
    },
    {
      nome: 'Entomologia',
      corPrimaria: '#228B22',       
      corSecundaria: '#DFFFE0'     
    },
    {
      nome: 'Artista Forense',
      corPrimaria: '#FF8C00',       
      corSecundaria: '#FFE8CC'     
    },
    {
      nome: 'Squintern (Estagiário)',
      corPrimaria: '#A52A2A',       
      corSecundaria: '#F5D3C8'      
    },
    {
      nome: 'Psicologia',
      corPrimaria: '#C71585',       
      corSecundaria: '#F9D3EB'     
    },
    {
      nome: 'Chefe do Laboratório',
      corPrimaria: '#2F4F4F',       
      corSecundaria: '#DDEEEE'      
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemCadastrado = (personagem) =>{
    setPersonagens([...personagens,personagem])
    console.log(personagens);
    
  }

   return(
      <div className="App">
        <Banner/>
        <Form 
          departamentos={departamentos.map(departamento => departamento.nome)}
          aoPersonagemCadastrado={personagem => aoNovoPersonagemCadastrado(personagem)}
        />

        {departamentos.map(departamento => <Departments
          key={departamento.nome}
          nome={departamento.nome}
          corPrimaria={departamento.corPrimaria}
          corSecundaria={departamento.corSecundaria}
          personagens={personagens.filter(personagem => personagem.departamento === departamento.nome )}
        />)}

      </div>
   )
}

export default App;
