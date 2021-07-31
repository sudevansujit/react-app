import React from 'react' 
import logo from './Assets/logo.gif'

function MachinerySpace(props) {
  const { name, image, address } = props






  return (
    <div>
      {/* <img src={logo} width="300" height="300" alt="Hello" /> */}
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg` }     
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      
      <h1>{props.name}</h1>
      <div>Address...</div>
    </div>
  )
}

export default MachinerySpace;