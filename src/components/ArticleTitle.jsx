import React from 'react';
import PropTypes from 'prop-types';

function ArticleTitle(props){

  return(
    <div>
      <h2 className="titleDiv">{props.title}</h2>
      <style jsx>{`
          .titleDiv {
            width: 275px;
            font-weight: 500;
          }
            `}</style>
    </div>
  );

}

ArticleTitle.propTypes = {
  title: PropTypes.string
};

export default ArticleTitle;
