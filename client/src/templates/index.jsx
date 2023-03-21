
import './styles.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { Cards } from '../components/cards/cards';

export const Home = () =>{
 const [values, setValues] = useState();
 const [card, setCard] = useState();
 const [estados, setEstados] = useState(); 
 const [cidade, setCidade] = useState();
 const [disabled, setDisabled] = useState(true);

 
  useEffect(()=>{
    axios.get("http://localhost:3001/getCards").then((res)=>(setCard(res.data)));
    axios.get("http://localhost:3001/getEstados").then((res)=>(setEstados(res.data)));
    
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
    estado: values.estado,
    cidade:values.cidade

  }).then((res)=>{console.log(res)})
  setTimeout(()=>{axios.get("http://localhost:3001/getCards").then((res)=>(setCard(res.data)))},[5000])
  }
  const getCidades = (value) =>{
    console.log(value)
    axios.get(`http://localhost:3001/getCidades/${value}`).then((res)=>(setCidade(res.data)))
    setDisabled(false);
  }
  
  const handleChange=value=>{
   
    setValues(defaultValue=>({
      ...defaultValue,
      [value.target.name]: value.target.value,
    }))
    
  }
  return(
  <div className='body'>
  
    <h1>cadastro cliente</h1>
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

        <select onChange={(value)=>{handleChange(value);getCidades(value.target.value)}} name="estado">
          <option value="" selected>escolha o estado</option>
          
          {typeof estados !== "undefined" && estados.map((obj)=>(
            <option key={obj.id} value={obj.id}>{obj.uf}</option>
          ))}
        </select>

        <select onChange={handleChange} name="cidade" disabled={disabled}>
          <option value="" selected>cidade</option>
          
          {typeof cidade !== "undefined" && cidade.map((obj)=>(
            <option key={obj.id} value={obj.nome}>{obj.nome}</option>
          ))}
        </select>
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