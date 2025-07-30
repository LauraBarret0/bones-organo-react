import './Inputs.css'

const Inputs = ({label, placeholder, valor, aoAlterado, obrigatorio = false, type = 'text' }) =>{

      return(
        <div className='inputs'>
            <label>{label}</label>
            <input 
                onChange={evento => aoAlterado(evento.target.value)} 
                placeholder={placeholder} 
                required={obrigatorio} 
                value={valor} 
                type={type}
            />
        </div>
    )
}   

export default Inputs