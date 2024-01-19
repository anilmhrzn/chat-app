// import React from 'react'
// import PropTypes from 'prop-types'

// import Header from "./components/header/Header";
import Sidebar from "./components/side-bar/Sidebar";

const App = () => {
  return (
    <>
        <div className="min-h-dvh bg-green-500 flex flex-col">
          <div className="flex flex-row flex-grow ">
            <Sidebar />
            <div>content</div>
          </div>
        </div>
    </>
  );
};

// App.propTypes = {}

export default App;
