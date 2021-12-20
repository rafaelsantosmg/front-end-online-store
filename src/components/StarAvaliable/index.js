import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './StarAvaliable.css';
import PropTypes from 'prop-types';

class StarAvaliable extends Component {
  render() {
    const { rating, onStarClick } = this.props;
    return (
      <div>
        <StarRatingComponent
          name="rate2"
          renderStarIcon={ (index, value) => (
            <span>
              <i className={ index <= value ? 'fas fa-star' : 'far fa-star' } />
            </span>
          ) }
          starCount={ 5 }
          value={ rating }
          onStarClick={ onStarClick }
        />
      </div>

    );
  }
}

StarAvaliable.propTypes = {
  rating: PropTypes.number.isRequired,
  onStarClick: PropTypes.func.isRequired,
};
export default StarAvaliable;
