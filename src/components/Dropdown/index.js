import './Dropdown.css'

const Dropdown = ({label, departamentos, valor, aoAlterado, obrigatorio = false}) =>{
    return(
        <div className='dropdown'>
            <label>{label}</label>
            <select 
                value={valor} 
                required={obrigatorio} 
                onChange={evento => aoAlterado(evento.target.value)}
            >

                <option/>
                {departamentos.map(departamento => <option key={departamento}>{departamento}</option>)}
            </select>
        </div>
    )
}

export default Dropdown