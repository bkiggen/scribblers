import React from 'react';
import PropTypes from 'prop-types';

function ArticleTitle(props){

  return(
    <h4>{props.title}</h4>
  );

}

ArticleTitle.propTypes = {
  title: PropTypes.string
};

export default ArticleTitle;
