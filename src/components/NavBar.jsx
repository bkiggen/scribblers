import React from 'react';
import  { Link }  from 'react-router-dom';


function NavBar(){
  const navArray = ['Politics', 'Originals', 'Technology', 'Identity', 'Culture', 'Arts', 'Interviews', 'Sports', 'Editorial'];
  const navStyles = {
    textDecoration: "none",
    color: "#aaa",
    fontFamily: "Montserrat"
  }
  return(
    <div className="link-container">
      <style jsx>{`
          .link-container {
            list-style: none;
            display: flex;
            justify-content: space-between;
            width: 850px;
            margin: 0 auto;
            padding-inline-start: 0px;
          }
          Link:hover {
            color: black;
          }

          h1 {
            text-align: center;
            font-family: Montserrat;
            letter-spacing: .3rem;
            font-weight: 300;
          }
            `}</style>
      {navArray.map((navItem, index) =>
        <Link style={navStyles} key={index} to={`/${navItem}`}>{navItem}</Link>
      )}
    </div>
  );

}

export default NavBar;
