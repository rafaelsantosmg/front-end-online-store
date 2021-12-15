import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles.css';

class Search extends Component {
  render() {
    return (
      <InputGroup className="mb-3 search">
        <FormControl
          placeholder="Buscar produtos"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

        />
        <Button variant="outline-secondary" id="button-addon2">
          <i className="fas fa-search-dollar" />
        </Button>
      </InputGroup>
    );
  }
}

export default Search;
