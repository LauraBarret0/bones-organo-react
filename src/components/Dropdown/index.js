import './Dropdown.css'

const Dropdown = (props) =>{
    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select value={props.valor} required={props.obrigatorio} onChange={evento => props.aoAlterado(evento.target.value)}>
                <option></option>
                {props.departamentos.map(departamentos => <option key={departamentos}>{departamentos}</option>)}
            </select>
        </div>
    )
}

export default Dropdown