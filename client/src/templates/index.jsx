
import './styles.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { Cards } from '../components/cards/cards';
const Home = () =>{
 const [values, setValues] = useState();
 const [card, setCard] = useState();
 console.log(card)
  useEffect(()=>{
    axios.get("http://localhost:3001/getCards").then((res)=>(setCard(res.data)))
    
  },[])
  
  const handleSubmit=()=>{
    axios.post("http://localhost:3001/register",{
    name: values.name,
    idade:values.idade,
    cpf: values.cpf,
    rg: values.rg,
    sexo:values.sexo,
    trabalho:values.trabalho,
    rua: values.rua,
    numero: values.numero,
    bairro: values.bairro,
    cidade:values.cidade

  }).then((res)=>{console.log(res)})
  setTimeout(()=>{axios.get("http://localhost:3001/getCards").then((res)=>(setCard(res.data)))},[5000])
  
  }

  const handleChange=value=>{
    setValues(defaultValue=>({
      ...defaultValue,
      [value.target.name]: value.target.value,
    }))
  }
  return(
  <div className='body'>
  
    <h1>cadastro paciente</h1>
      <div className='cadastro'>
        <input onChange={handleChange} className='name' name='name' type="text" placeholder='Nome Completo' />
        <input onChange={handleChange} className='idade' name='idade' type="number" placeholder='idade' />
        <input onChange={handleChange} type='number' name='cpf' placeholder='CPF sem o "." eo "-"'/>
        <input onChange={handleChange} type="number" name='rg' placeholder='RG' />
        <select onChange={handleChange} name="sexo">
          <option value="" selected>escolha seu sexo</option>
          <option value="F">Feminino</option>
          <option value="M">Masculino</option>
        </select>
      <input type="text" name="trabalho" placeholder='Trabalho' onChange={handleChange} />
        <input onChange={handleChange} className='rua' name='rua' type="text" placeholder='Rua' />
        <input onChange={handleChange} id="numero" name='numero' type="text" placeholder='Numero' />
        <input onChange={handleChange} className='bairro' name='bairro' type="text" placeholder='Bairro'/>
        <input name='cidade' onChange={handleChange} placeholder="Cidade"/> 
        <button onClick={handleSubmit} className='btn'>enviar</button>
      </div>
      <div>

      <div className="card__container">
            <p className="card__name">nome</p>
            <p className="card__cpf">cpf</p>
            <p className="card__rua">rua</p>
            <p className="card__numero">numero</p>
            <p className="card__bairro">bairro</p>
        </div>
          {typeof card !== "undefined" && card.map((obj)=>(<Cards  key={obj.idpacientes} id={obj.idpacientes} idade={obj.idade} rua={obj.rua} bairro={obj.bairro} numero={obj.numero} name={obj.nome} cpf={obj.cpf} rg={obj.rg}
          trabalho ={obj.trabalho} cidade={obj.cidade} sexo={obj.sexo}/>))}
      
      </div>
    </div>
  )
}
export default Home;