import React, { useState } from 'react';
import axios from 'axios';


function Recommendations() {
 const [recommendations, setRecommendations] = useState(["a", "b"]);

  axios.get(`http://localhost:8000/recommendations`)
  .then(res => {
    console.log(res);
   // console.log(res.data);
    setRecommendations(res.data);
  })
  
  return (
    <div>
        {console.log('What is', recommendations)}
        <p> 'Hi' </p>
    <p>{recommendations[0].heading} </p>
    <p> {recommendations[0].description}</p>
    <p>{recommendations[1].heading} </p>
    <p> {recommendations[1].description}</p>
  </div>
  )
}

export default Recommendations;