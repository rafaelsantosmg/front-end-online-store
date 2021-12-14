import React, { Component } from 'react';
import Categories from '../../components/Categories';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Categories />
      </div>
    );
  }
}

export default Home;
