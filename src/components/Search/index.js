import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  render() {
    const { query } = this.state;
    const { handleClick } = this.props;
    return (
      <InputGroup className="search" style={ { width: '40%' } }>
        <FormControl
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
          placeholder="Buscar produtos"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

        />
        <Button
          data-testid="query-button"
          variant="outline-secondary"
          id="button-addon2"
          onClick={ () => handleClick('', query) }
        >
          <i className="fas fa-search-dollar" />
        </Button>
      </InputGroup>
    );
  }
}

Search.propTypes = {
  handleClick: PropTypes.func,
};

Search.defaultProps = {
  handleClick: () => {},
};

export default Search;
