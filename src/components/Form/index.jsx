import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import Inputs from '../Inputs'
import './Form.css'

const Form = (props) =>{

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [departamento, setDepartamento] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            descricao,
            imagem,
            departamento
        })

        setNome('')
        setDescricao('')
        setImagem('')
        setDepartamento('')
    }

    return(
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem.</h2>
                <Inputs 
                    label='Nome' 
                    placeholder='Digite o nome do personagem' 
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Inputs 
                    label='Descrição' 
                    placeholder='Descreva o personagem' 
                    obrigatorio={true}
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Inputs 
                    label='Imagem' 
                    placeholder='Digite o endereço de imagem' 
                    obrigatorio={true}
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <Dropdown 
                    label='Departamento' 
                    obrigatorio={true} 
                    departamentos={props.departamentos} 
                    valor={departamento}
                    aoAlterado={valor => setDepartamento(valor)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form