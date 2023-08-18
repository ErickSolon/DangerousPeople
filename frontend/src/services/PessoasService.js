import axios from "axios";

const baseURL = "https://localhost:7000";

class PessoasService {
  getPessoas(path) {
    return axios.get(baseURL + path);
  }

  getPessoasById(path, id) {
    return axios.get(baseURL + path + id);
  }

  savePessoa(path, data) {
    return axios.post(baseURL + path, data);
  }

  updatePessoaById(path, id, data) {
    return axios.put(baseURL + path + id, data);
  }

  deletePessoaByid(path, id) {
    return axios.delete(baseURL + path + id);
  }
}

export default new PessoasService();
