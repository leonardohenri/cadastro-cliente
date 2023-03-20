import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";


export default function FormDialog(props) {
  const [editvalues, setEditValues] = useState({
    id:props.id,
    name:props.name,
    cpf:props.cpf,
    rg:props.rg,
    idade:props.idade,
    sexo:props.sexo,
    trabalho:props.trabalho,
    rua:props.rua,
    bairro:props.bairro,
    numero:props.numero,
    cidade:props.cidade,
  });
console.log("idade", editvalues.idade);
  const handlesalvar = () =>{
    Axios.put("http://localhost:3001/edit",{
    id:editvalues.id,
    name:editvalues.name,
    idade:editvalues.idade,
    cpf:editvalues.cpf,
    rg:editvalues.rg,
    sexo:editvalues.sexo,
    trabalho:editvalues.trabalho,
    rua:editvalues.rua,
    bairro:editvalues.bairro,
    numero:editvalues.numero,
    cidade:editvalues.cidade,
  });
  handleClose();
  
  };
  const handleDelete = () =>{
    Axios.delete(`http://localhost:3001/delete/${editvalues.id}`);
    handleClose();
  }


  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChange = value =>{
    setEditValues(defaultValue=>({
      ...defaultValue,
      [value.target.id]: value.target.value,
    }))
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.name}
            type="text"
            onChange={handleChange}
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="idade"
            label="idade"
            defaultValue={props.idade}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF"
            defaultValue={props.cpf}
            type="number"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="rg"
            label="rg"
            defaultValue={props.rg}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            disabled
            margin="dense"
            id="sexo"
            label="sexo"
            defaultValue={props.sexo}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="trabalho"
            label="trabalho"
            defaultValue={props.trabalho}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="rua"
            label="rua"
            defaultValue={props.rua}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="numero"
            label="numero"
            defaultValue={props.numero}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="bairro "
            label="bairro"
            defaultValue={props.bairro}
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cidade"
            label="cidade"
            defaultValue={props.cidade}
            type="text"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDelete()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handlesalvar()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}