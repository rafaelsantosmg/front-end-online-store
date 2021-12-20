import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

import './AvaliableComent.css';

class AvaliableComent extends Component {
  render() {
    const { coments } = this.props;
    return (
      coments.map((coment) => (
        <div key={ coment.email } className="avaliableComent-container">
          <div className="avaliableComent-content-user">
            <h5>{coment.userAvaliable}</h5>
            <span>
              {' '}
              <StarRatingComponent
                name="rate2"
                renderStarIcon={ (index, value) => (
                  <span>
                    <i className={ index <= value ? 'fas fa-star' : 'far fa-star' } />
                  </span>
                ) }
                starCount={ 5 }
                value={ coment.rating }
                editing="false"
              />
            </span>
          </div>
          <p>{coment.userComent}</p>
        </div>

      ))
    );
  }
}

AvaliableComent.propTypes = {
  coments: PropTypes.arrayOf(PropTypes.shape({
    userAvaliable: PropTypes.string,
  })).isRequired,
};

export default AvaliableComent;
