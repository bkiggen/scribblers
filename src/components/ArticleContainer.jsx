import React from 'react';
import ArticleBody from './ArticleBody';
import ArticleAuthor from './ArticleAuthor';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';
import ArticleCategory from './ArticleCategory';
import PropTypes from 'prop-types';


const articleList = [
  {
    'title': 'How to handle mutinies on the HMS. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'You Might Not Need to Sleep',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Lies About Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Principles of Principals',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Don\'t Use a Spoon If You Need a Fork',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Fossil fuel money crushed clean energy ballot initiatives across the country',
    'author': 'David Roberts',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'You Might Not Need to Sleep',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Lies About Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Principles of Principals',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Don\'t Use a Spoon If You Need a Fork',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'How to handle mutinies on the HMS. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'You Might Not Need to Sleep',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Lies About Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Principles of Principals',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Don\'t Use a Spoon If You Need a Fork',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'How to handle mutinies on the HMS. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'You Might Not Need to Sleep',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Lies About Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Principles of Principals',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    'title': 'Don\'t Use a Spoon If You Need a Fork',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];


function ArticleContainer(props){

  return(

    <div className="article-container">
      <style jsx>{`

            .article-container {
              display: flex;
              flex-wrap: wrap;
              width: 90%;
              margin: 0 auto;
              justify-content: center;
            }
            .inner-article-container {
              width: 340px;
              font-family: Montserrat;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .text-container {
              width: 300px;
              margin: 0 auto;
            }
            `}</style>
          {articleList.map((article, index) =>
        <div key={index} className="inner-article-container">
          <ArticleCategory category={article.category}/>
          <ArticleImage img={article.img}/>
          <div className="text-container">
            <ArticleTitle title={article.title}/>
            <ArticleAuthor author={article.author}/>
            <ArticleBody body={article.body}/>
          </div>
        </div>
      )}
    </div>

  );

}

export default ArticleContainer;
