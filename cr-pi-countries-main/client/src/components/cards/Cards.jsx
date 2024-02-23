import Card from "../card/Card";
import React from "react";

function Cards({countries}){
    return (
        <div>
          
          {
            countries?.map(c=>(
              <Card
              key={c.id}
              id={c.id}
              name={c.name}
              flags={c.flags}
              continent={c.continent}
              
              />
              
            ))
           
          }
           
        
        </div>
        
      )
      
}



export default Cards;