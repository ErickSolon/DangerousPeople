import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
} from "@mui/material";
import { useParams } from "react-router-dom";
import PessoasService from "../services/PessoasService";
import "./tabela.css";

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
    PessoasService.getPessoasById("/people/", idParam).then((res) => {
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

      if (
        state.casado === "" ||
        state.cpf === "" ||
        state.criminoso === "" ||
        state.endereco === "" ||
        state.identidade === "" ||
        state.nomecompleto === ""
      ) {
        alert("Digite todos os campos!");
      } else {
        await PessoasService.updatePessoaById("/data/", state.id, pessoasData);
        await PessoasService.updatePessoaById(
          "/moreinfo/",
          state.id,
          pessoasMoreInfo
        );

        alert("Informações atualizadas com sucesso!");
      }
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
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="formulario">
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="nome">Nome Completo</InputLabel>
                    <Input
                      id="nome"
                      aria-describedby="my-helper-text"
                      value={state.nomecompleto}
                      onChange={changeNomeCompletoHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="casado">casado(a)?</InputLabel>
                    <Input
                      id="casado"
                      aria-describedby="my-helper-text"
                      value={state.casado}
                      onChange={changeCasadoHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="cpf">CPF</InputLabel>
                    <Input
                      id="cpf"
                      aria-describedby="my-helper-text"
                      value={state.cpf}
                      onChange={changeCPFHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="endereco">
                      Endereço completo
                    </InputLabel>
                    <Input
                      id="endereco"
                      aria-describedby="my-helper-text"
                      value={state.endereco}
                      onChange={changeEnderecoHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="identidade">Identidade</InputLabel>
                    <Input
                      id="identidade"
                      aria-describedby="my-helper-text"
                      value={state.identidade}
                      onChange={changeIdentidadeHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="criminoso">Criminoso(a)?</InputLabel>
                    <Input
                      id="criminoso"
                      aria-describedby="my-helper-text"
                      value={state.criminoso}
                      onChange={changeCriminosoHandler}
                      className="espacamento"
                    />
                  </FormControl>
                  <FormControl>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={updatePessoas}
                    >
                      Atualizar
                    </Button>
                  </FormControl>
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default UpdatePessoa;
