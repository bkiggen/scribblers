import React from 'react';
import PropTypes from 'prop-types';

function ArticleCategory(props){

  return(
    <h6>{props.category}</h6>
  );
}

ArticleCategory.propTypes = {
  category: PropTypes.string
};


export default ArticleCategory;
