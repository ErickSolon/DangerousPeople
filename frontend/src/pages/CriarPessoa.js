import React, { Component } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
} from "@mui/material";
import PessoasService from "../services/PessoasService";
import './CriarPessoa.css';

class CriarPessoa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomecompleto: "",
      casado: "false",
      cpf: "",
      endereco: "",
      identidade: "",
      criminoso: "false",
    };

    this.changeNomeCompletoHandler = this.changeNomeCompletoHandler.bind(this);
    this.changeCasadoHandler = this.changeCasadoHandler.bind(this);
    this.changeCPFHandler = this.changeCPFHandler.bind(this);
    this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
    this.changeIdentidadeHandler = this.changeIdentidadeHandler.bind(this);
    this.changeCriminosoHandler = this.changeCriminosoHandler.bind(this);
  }

  changeNomeCompletoHandler = (event) => {
    this.setState({ nomecompleto: event.target.value });
  };
  changeCasadoHandler = (event) => {
    this.setState({ casado: event.target.value });
  };
  changeCPFHandler = (event) => {
    this.setState({ cpf: event.target.value });
  };
  changeEnderecoHandler = (event) => {
    this.setState({ endereco: event.target.value });
  };
  changeIdentidadeHandler = (event) => {
    this.setState({ identidade: event.target.value });
  };
  changeCriminosoHandler = (event) => {
    this.setState({ criminoso: event.target.value });
  };

  savePessoa = async () => {
    try {
      const pessoaData = {
        nomeCompleto: this.state.nomecompleto,
        isMarried: this.state.casado === "true",
      };

      const pessoaMoreInfo = {
        cpf: this.state.cpf,
        fullAddress: this.state.endereco,
        identity: this.state.identidade,
        isCriminal: this.state.criminoso === "true",
      };

      if (
        this.state.casado === "" ||
        this.state.cpf === "" ||
        this.state.criminoso === "" ||
        this.state.endereco === "" ||
        this.state.identidade === "" ||
        this.state.nomecompleto === ""
      ) {
        alert("Digite todos os campos!");
      } else {
        await PessoasService.savePessoa("/data", pessoaData);
        await PessoasService.savePessoa("/moreinfo", pessoaMoreInfo);

        alert("Pessoa salva com sucesso!");
      }

      this.setState({
        nomecompleto: "",
        casado: "false",
        cpf: "",
        endereco: "",
        identidade: "",
        criminoso: "false",
      });
    } catch (error) {
      console.error("Erro ao salvar pessoa:", error);
      alert("Ocorreu um erro ao salvar a pessoa.");
    }
  };

  render() {
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
                        value={this.state.nomecompleto}
                        onChange={this.changeNomeCompletoHandler}
                        className="espacamento"
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="casado">casado(a)?</InputLabel>
                      <Input
                        id="casado"
                        aria-describedby="my-helper-text"
                        value={this.state.casado}
                        onChange={this.changeCasadoHandler}
                        className="espacamento"
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="cpf">CPF</InputLabel>
                      <Input
                        id="cpf"
                        aria-describedby="my-helper-text"
                        value={this.state.cpf}
                        onChange={this.changeCPFHandler}
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
                        value={this.state.endereco}
                        onChange={this.changeEnderecoHandler}
                        className="espacamento"
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="identidade">Identidade</InputLabel>
                      <Input
                        id="identidade"
                        aria-describedby="my-helper-text"
                        value={this.state.identidade}
                        onChange={this.changeIdentidadeHandler}
                        className="espacamento"
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="criminoso">Criminoso(a)?</InputLabel>
                      <Input
                        id="criminoso"
                        aria-describedby="my-helper-text"
                        value={this.state.criminoso}
                        onChange={this.changeCriminosoHandler}
                        className="espacamento"
                      />
                    </FormControl>
                    <FormControl>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={this.savePessoa}
                      >
                        Salvar
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
}

export default CriarPessoa;
