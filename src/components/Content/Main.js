import React from 'react';
import CoverPage from "./CoverPage";
import MainPage from "./MainPage";

function Main(props) {
  return (
    props.loggedInUser ? <MainPage /> : <CoverPage />
  );
}

export default Main;
