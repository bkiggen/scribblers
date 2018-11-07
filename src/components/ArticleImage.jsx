import React from 'react';
import PropTypes from 'prop-types';

function ArticleImage(props){

  return(
    <div>
      <img src={props.img} className="articleImage"/>
        <style jsx>{`
            .articleImage {
              width: 318px;
              height: 212px;
            }
            `}</style>

    </div>
  );

}

ArticleImage.propTypes = {
  img: PropTypes.string
};

export default ArticleImage;
