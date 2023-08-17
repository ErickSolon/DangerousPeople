import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const baseURL = "https://localhost:7000/";

function UpdatePessoa() {
  const { idParam } = useParams();

  const [state, setState] = useState({
    id: idParam,
    nomecompleto: "",
    casado: "false",
    cpf: "",
    endereco: "",
    identidade: "",
    criminoso: "false",
  });

  const changeNomeCompletoHandler = (event) => {
    setState({ ...state, nomecompleto: event.target.value });
  };
  const changeCasadoHandler = (event) => {
    setState({ ...state, casado: event.target.value });
  };
  const changeCPFHandler = (event) => {
    setState({ ...state, cpf: event.target.value });
  };
  const changeEnderecoHandler = (event) => {
    setState({ ...state, endereco: event.target.value });
  };
  const changeIdentidadeHandler = (event) => {
    setState({ ...state, identidade: event.target.value });
  };
  const changeCriminosoHandler = (event) => {
    setState({ ...state, criminoso: event.target.value });
  };

  useEffect(() => {
    axios.get(baseURL + "people/" + idParam).then((res) => {
      let pessoas = res.data;
      setState((prevState) => ({
        ...prevState,
        nomecompleto: pessoas.nomeCompleto,
        casado: pessoas.isMarried,
        cpf: pessoas.cpf,
        endereco: pessoas.fullAddress,
        identidade: pessoas.identity,
        criminoso: pessoas.isCriminal,
      }));
    });
  }, [idParam]);

  const updatePessoas = async () => {
    try {
      const pessoasData = {
        nomeCompleto: state.nomecompleto,
        isMarried: state.casado,
      };

      const pessoasMoreInfo = {
        cpf: state.cpf,
        fullAddress: state.endereco,
        identity: state.identidade,
        isCriminal: state.criminoso,
      };

      await axios.put(baseURL + "data/" + state.id, pessoasData);
      await axios.put(baseURL + "moreinfo/" + state.id, pessoasMoreInfo);

      alert("Informações atualizadas com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar informações:", error);
      alert("Ocorreu um erro ao atualizar as informações.");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "200ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div class="row p-5">
          <div class="col">
            <div class="form-group">
              <div class="form-control">
                <TextField
                  id="outlined-basic"
                  label="Nome Completo"
                  variant="outlined"
                  value={state.nomecompleto}
                  onChange={changeNomeCompletoHandler}
                />
                <TextField
                  id="outlined-basic"
                  label="casado(a)?"
                  variant="outlined"
                  value={state.casado}
                  onChange={changeCasadoHandler}
                />
                <TextField
                  id="outlined-basic"
                  label="CPF"
                  variant="outlined"
                  value={state.cpf}
                  onChange={changeCPFHandler}
                />
                <TextField
                  id="outlined-basic"
                  label="Endereço completo"
                  variant="outlined"
                  value={state.endereco}
                  onChange={changeEnderecoHandler}
                />
                <TextField
                  id="outlined-basic"
                  label="Identidade"
                  variant="outlined"
                  value={state.identidade}
                  onChange={changeIdentidadeHandler}
                />
                <TextField
                  id="outlined-basic"
                  label="Criminoso(a)?"
                  variant="outlined"
                  value={state.criminoso}
                  onChange={changeCriminosoHandler}
                />
              </div>
              <Button
                variant="contained"
                color="success"
                onClick={updatePessoas}
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default UpdatePessoa;
