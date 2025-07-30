import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Departments from "./components/Departments";
import { v4 as uuidv4 } from 'uuid';
import { GiCrossedBones } from "react-icons/gi";

function App() {
  const [ departamentos, setDepartamentos] = useState([
    {
      id: uuidv4(),
      nome: "Antropologia",
      cor: "#8A2BE2",
    },
    {
      id: uuidv4(),
      nome: "Agente do FBI",
      cor: "#1E90FF",
    },
    {
      id: uuidv4(),
      nome: "Entomologia",
      cor: "#228B22",
    },
    {
      id: uuidv4(),
      nome: "Artista Forense",
      cor: "#FF8C00",
    },
    {
      id: uuidv4(),
      nome: "Squintern (Estagiário)",
      cor: "#A52A2A",
    },
    {
      id: uuidv4(),
      nome: "Psicologia",
      cor: "#C71585",
    },
    {
      id: uuidv4(),
      nome: "Chefe do Laboratório",
      cor: "#2F4F4F",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Temperance Brennan",
      descricao: "Antropóloga forense e autora de romances'",
      imagem: "./images/characters/Bones.jpg",
      departamento: departamentos[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Seeley Booth",
      descricao: "Agente Especial do FBI, parceiro de Brennan",
      imagem: "./images/characters/Booth.jpg",
      departamento: departamentos[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'James Aubrey',
      descricao: 'Agente do FBI, parceiro de Booth, inteligente e bem-humorado',
      imagem: "./images/characters/Aubrey.jpg",
      departamento: departamentos[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jack Hodgins",
      descricao: "Entomologista forense e especialista em solo",
      imagem: "./images/characters/Hodgins.jpg",
      departamento: departamentos[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Angela Montenegro",
      descricao: "Artista forense e especialista em reconstrução facial",
      imagem: "./images/characters/Angela.jpg",
      departamento: departamentos[3].nome
    },
    
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Zack Addy',
      descricao: 'Gênio em antropologia forense e ex-assistente de Brennan',
      imagem: "./images/characters/Zack.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clark Edison',
      descricao: 'Antropólogo forense sério e ético, interno do Jeffersonian',
      imagem: "./images/characters/Clarck.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Daisy Wick',
      descricao: 'Interna entusiasmada e PhD em Antropologia em andamento',
      imagem: "./images/characters/Daisy.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Arastoo Vaziri',
      descricao: 'Interno muçulmano com experiência em linguística e antropologia',
      imagem: "./images/characters/Arastoo.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wendell Bray',
      descricao: 'Interno determinado, estudante de antropologia e ex-jogador de hóquei',
      imagem: "./images/characters/Bray.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Colin Fisher',
      descricao: 'Interno com visão pessimista e humor sombrio',
      imagem: "./images/characters/Fisher.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Finn Abernathy',
      descricao: 'Interno sulista com grande talento, apesar do passado difícil',
      imagem: "./images/characters/Finn.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Oliver Wells',
      descricao: 'Interno extremamente inteligente, mas arrogante',
      imagem: "./images/characters/Wells.jpg",
      departamento: departamentos[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lance Sweets',
      descricao: 'Psicólogo do FBI, especialista em perfis criminais e dinâmica de equipe',
      imagem: "./images/characters/Sweets.jpg",
      departamento: departamentos[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Camille Saroyan",
      descricao: "Patologista forense e chefe do laboratório",
      imagem: "./images/characters/Cam.jpg",
      departamento: departamentos[6].nome
    },

  ];

  const deletarPersonagem = (id) => {
    setPersonagens(personagens.filter(personagen => personagen.id !== id))    
  }

  const mudarCorDepartamento = (cor, id) => {
    setDepartamentos(departamentos.map(departamento => {
        if(departamento.id === id){
         return{...departamento, cor: cor} 
        }
        return departamento
    }))
  }

  const favoritarPersonagem = (id) =>{
    setPersonagens(personagens.map(personagen => {
        if(personagen.id === id) personagen.favorito = !personagen.favorito
        return personagen
    }))
  }

  const [personagens, setPersonagens] = useState(inicial);

  return (
    <div className="App">
      <Banner />
      <Form
        aoCadastrarDepart={ (novoDepart) => 
           setDepartamentos([...departamentos, {...novoDepart, id: uuidv4()}]) 
        }
        departamentos={departamentos.map((departamento) => departamento.nome)}
        aoPersonagemCadastrado={(personagem) =>
          setPersonagens([...personagens, personagem])
        }
        
      />
      

      <section className="departamentos">
        <div className="departamentos__conatainer">
          <GiCrossedBones size={50} color='#f99e1b' rotate={90} className='app__icon' />
          <h1>Minha organização</h1>
        </div>

        {departamentos.map((departamento, indice) => (
          <Departments
            aoAlterado={mudarCorDepartamento}
            key={indice}
            departamento={departamento}
            personagens={personagens.filter(
              (personagem) => personagem.departamento === departamento.nome
            )}
            aoDeletar={deletarPersonagem}
            aoFavoritar={favoritarPersonagem}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
