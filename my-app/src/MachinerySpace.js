import React from 'react' 
import logo from './Assets/logo.gif'
import './MachinerySpace.css';
import { Link } from 'react-router-dom'

function MachinerySpace(props) {
  const { name, image, address, hours, id } = props






  return (
    <div className = 'MachinerySpace'>
      {/* <h1>{props.name}</h1> */}

      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>

      {/* <img src={logo} width="300" height="300" alt="Hello" /> */}
      <Link to={`/details/${id}`}> 
        <img src={`${process.env.PUBLIC_URL}images/${props.image}` }  width="300" height="300" alt="50 Califonia St." />
        {/* <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" /> */}
      </Link>      
      
      <div>{props.address}</div>
      <div>{props.hours}</div>
       
    </div>
  )
}

export default MachinerySpace;