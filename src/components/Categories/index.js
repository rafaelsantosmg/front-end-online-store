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
      <div className="category btn-dark">
        {categories.map((category) => (
          <Button
            data-testid="category"
            key={ category.id }
            variant="dark"
            onClick={ () => handleClick(category.id, '') }
          >
            { category.name }
          </Button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func,
};

Categories.defaultProps = {
  handleClick: () => {},
};
