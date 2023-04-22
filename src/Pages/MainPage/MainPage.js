import React from 'react';
import Contents from "../Contents/Contents";
import SideBar from "../SideBar/SideBar";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <SideBar></SideBar>
      <Contents></Contents>
    </div>
  );
}

export default MainPage;
