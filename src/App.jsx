import React from 'react';
import Main from './components/Main';
import NavVertical from './components/NavVertical';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-2 px-0 border-end border-dark" style={{ backgroundColor: "#d9e7ff", color: "gray" }}>
          <NavVertical />
        </div>
        <div className="col-md-10 px-0" style={{ backgroundColor: "#e8fcfc" }}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
