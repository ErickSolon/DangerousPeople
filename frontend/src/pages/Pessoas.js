import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PessoasService from "../services/PessoasService";

export function Pessoas(props) {
  const [pessoa, setPessoa] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    PessoasService.getPessoas("/people").then((res) => {
      setPessoa(res.data);
    });
  }, []);

  if (!pessoa) return "Carregando...";

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nomeCompleto",
      headerName: "Nome Completo",
      width: 150,
      editable: false,
    },
    {
      field: "isMarried",
      headerName: "Casado(a)?",
      width: 150,
      editable: false,
    },
    {
      field: "cpf",
      headerName: "CPF",
      width: 150,
      editable: false,
    },
    {
      field: "fullAddress",
      headerName: "Endereço",
      width: 150,
      editable: false,
    },
    {
      field: "identity",
      headerName: "Identidade",
      width: 150,
      editable: false,
    },
    {
      field: "isCriminal",
      headerName: "Criminoso(a)?",
      width: 150,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            onClick={() => handleUpdate(params.row.id)}
            variant="contained"
            color="primary"
          >
            Atualizar
          </Button>
          <Button
            onClick={() => handleDelete(params.row.id)}
            variant="contained"
            color="error"
          >
            Excluir
          </Button>
        </div>
      ),
    },
  ];

  const handleUpdate = (id) => {
    navigate(`/update-pessoa/${id}`);
  };

  const handleDelete = (id) => {
    PessoasService.deletePessoaByid("/data/", id).then(() => {
      const updatedPessoa = pessoa.filter((item) => item.id !== id);
      setPessoa(updatedPessoa);
    });

    PessoasService.deletePessoaByid("/moreinfo/", id).then(() => {
      const updatedPessoa = pessoa.filter((item) => item.id !== id);
      setPessoa(updatedPessoa);
    });
  };


  const rows = pessoa.map((element) => ({
    id: element.data.id,
    nomeCompleto: element.data.nomeCompleto,
    isMarried: element.data.isMarried,
    cpf: element.moreInfo.cpf,
    fullAddress: element.moreInfo.fullAddress,
    identity: element.moreInfo.identity,
    isCriminal: element.moreInfo.isCriminal,
  }));

  return (
    <div className="row p-5">
      <div className="col">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}
