import React, { Component } from 'react';
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
    return (
      <div className="category btn-dark">
        {categories.map((category) => (
          <Button
            data-testid="category"
            key={ category.id }
            variant="dark"
          >
            { category.name }
          </Button>
        ))}
      </div>
    );
  }
}
