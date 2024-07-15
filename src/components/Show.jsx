import React from 'react'
import { useState } from "react";


const Show = ({ changeProfile, bgImage }) => {
  const [profileObj, setProfileObj] = useState({
    name:"Lionel Messi",
    age: 30,
    profession: "Footballer",
    img:  bgImage ||  "messi.jpeg",
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  });
  const styleObject = { textAlign:'center', fontSize: '30px'}
  

  const handleHideProfile = () => {
    changeProfile(true);
  };
    
  return (
    <div style={styleObject}>
    <h1>Welcome to Home page</h1>
    <div>
  
          <div>
            <h3>Name: {profileObj.name}</h3>
            <h3>Age: {profileObj.age}</h3>
            <h3>Proffession: {profileObj.profession} </h3>
            <img src="messi.jpeg" alt='' height={300}  width='250'/>

            <p>Profession: {profileObj.bio}</p>
          </div>
        
         
        

    </div>

    <div>
          <button onClick={handleHideProfile}>Hide</button>
        </div>

  </div>
  )
}

export default Show