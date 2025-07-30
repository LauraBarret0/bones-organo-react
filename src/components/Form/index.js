import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import Inputs from '../Inputs'
import './Form.css'


const Form = ({departamentos, aoPersonagemCadastrado, aoCadastrarDepart}) =>{

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [nomeDepart, setnomeDepart] = useState('')
    const [corDepart, setcorDepart] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        aoPersonagemCadastrado({
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
            <form className='form__personagens' onSubmit={aoSalvar}>
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
                    departamentos={departamentos} 
                    valor={departamento}
                    aoAlterado={valor => setDepartamento(valor)}
                />
                <Button>Criar card</Button>
            </form>
            

            

            <form className='form__depart' onSubmit={(evento) => {
                evento.preventDefault()
                aoCadastrarDepart({
                    nome: nomeDepart,
                    cor: corDepart
                })
                setnomeDepart('')
                setcorDepart('')
            }}>
                <h2>Preencha os dados para criar um novo departamento.</h2>
                <Inputs 
                    label='Departamento' 
                    placeholder='Digite o nome do departamento ' 
                    obrigatorio={true}
                    valor={nomeDepart}
                    aoAlterado={valor => setnomeDepart(valor)}
                />
                <Inputs 
                    label='Cor' 
                    placeholder='Digite a cor do departamento' 
                    obrigatorio={true}
                    valor={corDepart}
                    aoAlterado={valor => setcorDepart(valor)}
                    type='color'
                />
                
                <Button>Criar departamento</Button>
            </form>
            
        </section>
        
    )
}

export default Form