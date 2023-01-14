import React from 'react';
import axios from 'axios';

function Images() {

  axios.get(`http://localhost:8000/images`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })

  return (
    <div>
        <h1>
          Learn React?
        </h1>
    </div>
  )
}

export default Images;