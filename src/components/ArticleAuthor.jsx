import React from 'react';
import PropTypes from 'prop-types';

function ArticleAuthor(props){

  return(
    <p>{props.author}</p>
  );

}


ArticleAuthor.propTypes = {
  author: PropTypes.string
};

export default ArticleAuthor;
