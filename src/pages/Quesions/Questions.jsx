import React from 'react'
import { useEffect, useState } from "react";

const Questions = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/questions")
      .then(
        response => response.json()
      )
      .then(
        data => {
          setBackendData(data)
        }
      )
  }, []);

  return (
    <div>
      {(typeof backendData.questions === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.questions.map((question, i) => (
          <p key={i}>{question}</p>
        ))
      )}
    </div>
  );
};

export default Questions