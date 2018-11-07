import React from 'react';
import PropTypes from 'prop-types';

function ArticleBody(props){

  return(
    <div>
      <p>{props.body}</p>
    </div>
  );

}

ArticleBody.propTypes = {
  body: PropTypes.string
};

export default ArticleBody;
