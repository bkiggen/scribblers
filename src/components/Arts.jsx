import React from 'react';
import ArticleContainer from './ArticleContainer';


function Arts(){

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
      <h1>Arts</h1>
      <ArticleContainer/>
    </div>
  );

}

export default Arts;
