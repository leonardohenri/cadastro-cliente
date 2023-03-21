import "./styles.css"
import FormDialog from "../dialog/dialogform";
import React from "react";
export const Cards = (obj) =>{
    const [open, setOpen] =  React.useState(false);
    

    const handleClick=()=>{
        setOpen(true)
    };
    return (
        <>
        <FormDialog open = {open} setOpen = {setOpen} id={obj.id} rua={obj.rua} bairro={obj.bairro} numero={obj.numero} name={obj.name} cpf={obj.cpf} rg={obj.rg}
          trabalho ={obj.trabalho} cidade={obj.cidade} sexo={obj.sexo} idade={obj.idade} getMysql={obj.getMysql}/>
        <div className="card__container" onClick={handleClick} >
            <p className="card__name">{obj.name}</p>
            <p className="card__cpf">{obj.cpf}</p>
            <p className="card__rua">{obj.rua}</p>
            <p className="card__numero">{obj.numero}</p>
            <p className="card__bairro">{obj.bairro}</p>
        </div>
        </>
    );
}