import React from 'react';


function MenuBar(){

  return(
    <div className="MenuBarContainer">
      <img src="http://scribbler.co/images/search2.svg"/>
      <img src="http://scribbler.co/images/search2.svg"/>
      <style jsx>{`
          .MenuBarContainer{
            height: 4rem;
            display: flex;
            justify-content: space-between;
            padding-right: 15px;
            padding-left: 15px;
          }
        `}</style>
    </div>

  );

}

export default MenuBar;
