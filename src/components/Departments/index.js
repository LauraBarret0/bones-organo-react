import Cards from "../Cards";
import "./Departments.css";
import hexToRgba from 'hex-to-rgba';

const Departments = ({ departamento, personagens, aoDeletar, aoAlterado, aoFavoritar }) => {
  return (
    personagens.length > 0 && 
      <section className="departments"
        style={{
          backgroundImage: "url(./images/fundo.png)",
          backgroundColor: hexToRgba(departamento.cor, 0.6) 
        }}
      >
        <input value={departamento.cor} onChange={event =>aoAlterado(event.target.value,departamento.id )} type="color" className="departments__input"/>

        <h3>{departamento.nome}</h3>
        <hr style={{ backgroundColor: departamento.cor }}></hr>

        <div className="departments_characters">
          {personagens.map((personagem, indice) => {
            return (
              <Cards
                corDeFundo={departamento.cor}
                personagem={personagem}
                key={indice}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
};

export default Departments;
