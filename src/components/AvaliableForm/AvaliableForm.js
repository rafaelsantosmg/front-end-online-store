import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import StarAvaliable from '../StarAvaliable';

import './AvaliableForm.css';

class AvaliableForm extends Component {
  render() {
    const {
      rating,
      onStarClick,
      onChange,
      userAvaliable,
      userComent,
      handleClickAvaliable,
    } = this.props;
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="avaliable-form-container">
            <Form.Control
              type="email"
              placeholder="Email"
              name="userAvaliable"
              className="form-input-email"
              onChange={ onChange }
              value={ userAvaliable }
            />
            <StarAvaliable
              idValue="radio-1"
              rating={ rating }
              onStarClick={ onStarClick }
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            className="form-input-textarea"
            as="textarea"
            rows={ 3 }
            placeholder="Mensagem (opcional)"
            onChange={ onChange }
            name="userComent"
            value={ userComent }
          />
        </Form.Group>
        <Button onClick={ handleClickAvaliable }>Avaliar</Button>
      </Form>
    );
  }
}

AvaliableForm.propTypes = {
  userAvaliable: PropTypes.string.isRequired,
  userComent: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onStarClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  handleClickAvaliable: PropTypes.func.isRequired,
};

export default AvaliableForm;
