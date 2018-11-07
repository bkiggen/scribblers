import React from 'react';

const navArray = ["Politics", "Originals", "Technology", "Identity", "Culture", "Arts", "Interviews", "Sports", "Editorial"];

function NavBar(){

  return(
    <ul>
      <style jsx>{`
          ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 850px;
            margin: 0 auto;
            padding-inline-start: 0px;
          }
          li {
            padding: 8px;
          }
          a {
            text-decoration: none;
            color: #aaa;
            font-family: Montserrat;
          }
            `}</style>
      {navArray.map((navItem, index) =>
        <li key={index}><a href="#">{navItem}</a></li>
      )}
    </ul>
  );

}

export default NavBar;
