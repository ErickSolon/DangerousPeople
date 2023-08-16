import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const baseURL = "https://localhost:7000/";

export function Tabela() {
  const [pessoa, setPessoa] = useState(null);

  useEffect(() => {
    axios.get(baseURL + "people").then((res) => {
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
      width: 150,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row.id)}>Excluir</button>
      ),
    },
  ];

  const handleDelete = (id) => {
    axios.delete(baseURL + "data/" + id).then(() => {
      const updatedPessoa = pessoa.filter((item) => item.id !== id);
      setPessoa(updatedPessoa);
    });

    axios.delete(baseURL + "moreinfo/" + id).then(() => {
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
