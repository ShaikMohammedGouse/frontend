import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Teams from './components/pages/Teams';
import About from './components/pages/About';
import Upload from "./components/pages/Upload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/teams' exact component={Teams} />
          <Route path='/about'exact component={About} />
          <Route path="/upload" exact component={Upload} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
/*
import React, { useState, } from 'react';
function App(){
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
         setSelectedFile(event.target.files[0]);
       };
     const handleUpload = () => {
     const formData = new FormData();

      formData.append('image', selectedFile);
  
      fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result); // Log the response from the backend
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <div>
        <h1>Image Upload</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        
      </div>
    );
    } 
export default App;
*/
