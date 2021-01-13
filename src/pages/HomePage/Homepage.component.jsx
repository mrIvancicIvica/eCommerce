import React from "react";
import "./Homepage.styles.scss";
import DirectoryMenu from "../../components/directory-menu/Directory.component";

const Homepage = () => {
  return (
    <div className='homepage'>
      <DirectoryMenu />
    </div>
  );
};

export default Homepage;
