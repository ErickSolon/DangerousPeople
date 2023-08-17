import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ul class="nav nav-tabs" id="navId" role="tablist">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
              Início
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/pessoas">
              Pessoas
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/criar-pessoa">
              Criar Pessoa
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
