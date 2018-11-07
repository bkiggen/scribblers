import React from 'react';
import PropTypes from 'prop-types';

function ArticleCategory(props){

  return(
    <span className="category-name">
      <style jsx>{`
        .category-name {
          font-size: 0.8rem;
          color: lightgray;
          text-align: left;
          width: 100%;
          padding-left: 1.5rem;
          margin-bottom: .2rem;
        }
            `}</style>
      {props.category}</span>
  );
}

ArticleCategory.propTypes = {
  category: PropTypes.string
};


export default ArticleCategory;
