import React from 'react';
import MachinerySpace from './MachinerySpace';

function MachineryList() {
  return (
    <div className="MachineryList">
      <MachinerySpace
        name="100-pine"
        address="100-pine"
        image="100-pine.jpg"
      />
      <MachinerySpace 
        name="101-california"
        address="101-california"
        image="101-california.jpg"/>
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
        image="citigroup-center.jpg"/>
    </div>
  )
}

export default MachineryList;