import './Cards.css'

const Cards = (props) =>{
    return(
        <div className='cards'>
            <div className='cards__cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={`Foto de ${props.nome}`}/>
            </div>
            <div className='cards__rodape'>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default Cards