import React, { useState }  from 'react';
import '../App.css';
import ConsoleLogViewer from "./pages/Upload";
import { Button } from './Button';
import './HeroSection.css';

function  HeroSection() {
  
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [image, setImage] = useState();
  const handleFileChange = (event) => {
         const file = event.target.files[0];
         setSelectedFile(file);
         const imageUrl = URL.createObjectURL(file);
         setImage(imageUrl);
       };
     const handleUpload = () => {
     const formData = new FormData();
     
      formData.append('image', selectedFile);
     
      /*axios.post('http://localhost:5000/predict', formData)
      .then(response => {
        console.log(response.data); // Handle the server response
      })
      .catch(error => {
        console.error(error);
      });*/
    
     fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.text())
           .then((result) => {
           console.log(result); 
           
           // Log the response from the backend
           })
        .catch((error) => {
          console.error('Error:', error);
        });
      
      }
  return (
    <div className='hero-container'>
      <h1>Plant Disease Prediction</h1>
      <p>Upload Image of the diseased plant</p>
      <input type="file"  onChange={handleFileChange} />
      <div>
      {image && <img style={{"width":"10px","height":"10px","padding":"1px"}} src={image} alt="Selected Image" />}
      </div>
      <div>
      <ConsoleLogViewer image={image} />
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleUpload}
        >
          Upload Image
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Description 
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
