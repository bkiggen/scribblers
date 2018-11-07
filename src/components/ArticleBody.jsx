import React from 'react';
import PropTypes from 'prop-types';

function ArticleBody(props){

  return(
    <p>{props.body}</p>
  );

}

ArticleBody.propTypes = {
  body: PropTypes.string
};

export default ArticleBody;
