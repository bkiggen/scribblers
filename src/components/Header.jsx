import React from 'react';
import Title from './Title';
import NavBar from './NavBar';
import MenuBar from './MenuBar';
function Header(){

  return(
    <div className="header-div">
      <MenuBar/>
      <style jsx>{`
        .header-div {
          width: 100%;
          margin-bottom: 6rem;
        }
      `}</style>
      <Title/>
      <NavBar/>
    </div>
  );

}

export default Header;
