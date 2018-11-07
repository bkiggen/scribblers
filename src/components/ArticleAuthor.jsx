import React from 'react';
import PropTypes from 'prop-types';

function ArticleAuthor(props){

  return(
    <h3 className="author"><strong>{props.author}</strong>
      <style jsx>{`
        .author {
          font-weight: 400;
          font-style: italic;
          font-family: lora;
          letter-spacing: 1px;
        }
          `}</style>
    </h3>
  );

}


ArticleAuthor.propTypes = {
  author: PropTypes.string
};

export default ArticleAuthor;
