import { FaTrash, FaRegHeart, FaHeart } from "react-icons/fa"
import './Cards.css'

const Cards = ({personagem,corDeFundo, aoDeletar, aoFavoritar}) =>{

    const favoritar = () =>{
        aoFavoritar(personagem.id)
    }

    const propsFavorito = {
        size: 25,
        className: "rodape__favoritar-icon",
        onClick: favoritar
    }

    return(
        <div className='cards'>
            <FaTrash 
                size={25} 
                color="#f99e1b" 
                onClick={() => aoDeletar(personagem.id)} 
                className='cards__icon'
            />
                
            <div className='cards__cabecalho' 
                style={{ backgroundColor: corDeFundo }}
            >
                <img src={personagem.imagem} alt={`Foto de ${personagem.nome}`}/>
            </div>
            <div className='cards__rodape'>
                <h4>{personagem.nome}</h4>
                <p>{personagem.descricao}</p>
                <div className="rodape__favoritar">
                    {personagem.favorito 
                        ? <FaHeart  {...propsFavorito}/>
                        : <FaRegHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards