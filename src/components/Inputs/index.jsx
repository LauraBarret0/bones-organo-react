import './Inputs.css'

const Inputs = (props) =>{

    const aoDigitado = (event) =>{
        props.aoAlterado(event.target.value);
    }

    return(
        <div className='inputs'>
            <label>{props.label}</label>
            <input onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio} value={props.valor} />
        </div>
    )
}   

export default Inputs