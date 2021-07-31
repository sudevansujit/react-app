import React from 'react';
import MachinerySpace from './MachinerySpace';
import './MachineryList.css'
import data from './sfpopos-data.json'
 
function MachineryList() {
    // const titles = data.map((obj) => {
    //     return obj.title
    //     })

    // console.log(titles) 
    
    // another way of writing similar code
    // const titles = data.map((obj) => {
    //     return <h4>{obj.title}</h4>
    //   })

    // console.log(titles)

    const spaces = data.map(({ title, address, images, hours }) => {
        
        //Deconstruction
         

        return (
          <MachinerySpace
            key={title}
            name={title}
            address={address}
            image={images[0]}
            hours = {hours}
          />
        )
      })
    
 
  return (
    <div className="MachineryList">
        {spaces} 
      {/* <MachinerySpace
        name="100-pine"
        address="100-pine"
        image="100-pine.jpg"
         
      />
      <MachinerySpace 
        name="101-california"
        address="101-california"
        image="101-california.jpg"
         
        />
      <MachinerySpace 
        name="525-market-street-plaza"
        address="525-market-street-plaza"
        image="525-market-street-plaza.jpg"/>
      <MachinerySpace 
        name="343-sansome-roof-garden"
        address="343-sansome-roof-garden"
        image="343-sansome-roof-garden.jpg"/>
      <MachinerySpace 
        name="555-california"
        address="555-california"
        image="555-california.jpg"/>
      <MachinerySpace 
        name="citigroup-center"
        address="citigroup-center"
        image="citigroup-center.jpg"/> */}
</div>

   
    
  )
}

export default MachineryList;