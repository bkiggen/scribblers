import React from 'react';
import ArticleContainer from './ArticleContainer';


function Interviews(){

  return(
    <div>
      <style jsx>{`
        h1 {
          text-align: center;
          font-family: Montserrat;
          letter-spacing: .3rem;
          font-weight: 300;
        }
      `}</style>
      <h1>Interviews</h1>
      <ArticleContainer/>
    </div>
  );

}

export default Interviews;
