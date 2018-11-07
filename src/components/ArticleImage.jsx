import React from 'react';
import PropTypes from 'prop-types';

function ArticleImage(props){

  return(
    <div className="articleImageDiv">
      <img src={props.img} className="articleImage"/>
      <style jsx>{`
            .articleImageDiv {
              width: 318px;
              height: 200px;
              overflow: hidden;
            }
            .articleImage {
              width: 318px;
            }

            `}</style>

    </div>
  );

}

ArticleImage.propTypes = {
  img: PropTypes.string
};

export default ArticleImage;
