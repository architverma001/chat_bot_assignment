import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setAge } from './store';
const Age = (handleclick) => {
 
  const dispatch = useDispatch();
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
    
    handleclick.actionProvider.handleAge2(event.target.value);
    dispatch(setAge(event.target.value));
  };

  return (
    <div className='main'>
      <label htmlFor="age" className='Label'>Select Age:</label>
      
      <select id="age" value={selectedAge} onChange={handleAgeChange}>
        <option value="" >Select</option>
        {Array.from({ length: 23 }, (_, index) => index + 18).map((age) => (
          <option key={age} value={age} className='values'>
            {age}

          </option>
        ))}
      </select>
    </div>
  );
};

export default Age;
