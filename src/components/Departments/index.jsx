import Cards from '../Cards'
import './Departments.css'

const Departments = (props) =>{
    return(

        props.personagens.length > 0 ? 
        <section className='departments' style={{backgroundColor: props.corSecundaria}}>
            <h3>{props.nome}</h3>
            <hr style={{backgroundColor: props.corPrimaria}}></hr>
           
           <div class="departments_characters">
               {props.personagens.map(personagem => <Cards
                    corDeFundo={props.corPrimaria}
                    nome={personagem.nome}
                    imagem={personagem.imagem}
                    descricao={personagem.descricao}
                    key={personagem.nome}
               />)}
           </div>
            
        </section> : ''
    )
}

export default Departments
