import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { getCategories } from '../../services/api';
import './styles.css';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  categories = async () => {
    const response = await getCategories();
    this.setState({
      categories: response,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleClick } = this.props;
    return (
      categories.map((category) => (
        <Button
          key={ category.id }
          variant="dark"
          style={ { width: '100%' } }
          onClick={ () => handleClick(category.id, '') }
        >
          { category.name }
        </Button>
      ))
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func,
};

Categories.defaultProps = {
  handleClick: () => {},
};
