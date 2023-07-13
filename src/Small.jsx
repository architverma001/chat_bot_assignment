import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Small = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate('/final');
    }
  }, [count, navigate]);

  return (
    <div className="flex-small">
      {count > 0 &&
        Array.from({ length: count }, (_, i) => (
          <div className="flex-small-part" key={i}>
            {count - i}
          </div>
        ))}
    </div>
  );
};

export default Small;
