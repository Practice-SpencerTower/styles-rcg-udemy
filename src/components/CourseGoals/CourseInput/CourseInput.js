import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

// creating another component - ok if it is only used by the other component in the same file

const FormControl = styled.div`
  margin: 0.5rem 0;

 & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red' : 'black'}
}

 & input {
  display: block;
  width: 100%;
  // function is called by styled-components package
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

// &.invalid input{
//   border-color: red;
//   background: #ffd7d7;
// }

// &.invalid label{
//   color: red;
// }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
