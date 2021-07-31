import React from 'react' 
import logo from './Assets/logo.gif'
import './MachinerySpace.css';

function MachinerySpace(props) {
  const { name, image, address } = props






  return (
    <div className = 'MachinerySpace'>
        <h1>{props.name}</h1>
      {/* <img src={logo} width="300" height="300" alt="Hello" /> */}
      <img src={`${process.env.PUBLIC_URL}images/${props.image}` }     
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      
      
      <div>{props.address}</div>
       
    </div>
  )
}

export default MachinerySpace;