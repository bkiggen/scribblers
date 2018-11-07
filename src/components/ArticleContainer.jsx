import React from 'react';
import ArticleBody from './ArticleBody';
import ArticleAuthor from './ArticleAuthor';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';
import ArticleCategory from './ArticleCategory';


const articleList = [
  {
    'title': 'How to handle state in React. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'You might not need React Router',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'React Design Principles',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Don\'t use .bind() when passing props',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Fossil fuel money crushed clean energy ballot initiatives across the country',
    'author': 'David Roberts',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'You might not need React Router',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'React Design Principles',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Don\'t use .bind() when passing props',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'How to handle state in React. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'You might not need React Router',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'React Design Principles',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Don\'t use .bind() when passing props',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'How to handle state in React. The missing FAQ.',
    'author': 'Osmel Mora',
    'img': 'https://s3.amazonaws.com/scrblr/480/j1092la5.jpg',
    'category': 'Culture',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'You might not need React Router',
    'author': 'Konstantin Tarkus',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0chxkc6.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Mixins Considered Harmful',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0cgwoym.jpg',
    'category': 'Technology',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'React Design Principles',
    'author': 'Dan Abramov',
    'img': 'https://s3.amazonaws.com/scrblr/480/j0b2kw0f.jpg',
    'category': 'Politics',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'title': 'Don\'t use .bind() when passing props',
    'author': 'Dave Ceddia',
    'img': 'https://s3.amazonaws.com/scrblr/480/iwyjnfnp.jpg',
    'category': 'Interviews',
    'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];


function ArticleContainer(){

  return(

    <div>

      {articleList.map((article, index) =>
        <div key={index}>
          <ArticleCategory category={article.category}/>
          <ArticleImage img={article.img}/>
          <ArticleTitle title={article.title}/>
          <ArticleAuthor author={article.author}/>
          <ArticleBody body={article.body}/>
        </div>
      )}
    </div>
  );

}

export default ArticleContainer;
