import React from 'react';
import '../../App.css';
import './Profile.css';
function Teams() {
  return(
	<div className="wrapper-flex">
    <div className="container">
      <div className='banner-img'></div>
      <img src='./images/img2.jpg' alt=' no profile' className="profile-img" />
      <h1 className="name">Mohammad Gouse</h1>
	  <p className="description">N190487</p>
    </div>

    <div className="container">
      <div className='banner-img'></div>
      <img  src='./images/img3.jpg' alt=' no profile' className="profile-img" />
      <p className="name">Shahid</p>
      <p className="description">N190487</p>
     
    </div>

    <div className="container">
      <div className='banner-img'></div>
      <img  src='./images/img4.jpg' alt=' no profile' className="profile-img"/>
      <p className="name">Hasan Basha</p>
      <p className="description">N190487</p>
     
    </div>
    
     <div className="container">
      <div className='banner-img'></div>
      <img   src='./images/img1.jpg' alt=' no profile' className="profile-img"/>
      <p className="name">Mohiddin</p>
      <p className="description">N190487</p>
      
    </div>
     <div className="container">
      <div className='banner-img'></div>
      <img  src='./images/img5.jpg'alt=' no profile' className="profile-img"/>
      <p className="name">Althaf</p>
      <p className="description">N190487</p>
     
    </div>
	</div>
  )
}


export default Teams
