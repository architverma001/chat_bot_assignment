import React from 'react';
import { useSelector } from 'react-redux';

const FinalPage = () => {
  const name = useSelector((state) => state.enrollment.name);
  const age = useSelector((state) => state.enrollment.age);

  return (
    <div className="d-flex center">
      <div className="font-big final-page">
        <p>
          Your name <strong>{name}</strong> aged <strong>{age}</strong> has been added to the student system. You may now exit.
        </p>
      </div>
    </div>
  );
};

export default FinalPage;
