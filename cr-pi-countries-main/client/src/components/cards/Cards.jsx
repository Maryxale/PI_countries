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


//  const Cards = ({id, name, flags, continent}) => {
//     return(
    
//         <Card
//          key={id}
//         id={id}
//         name={name}
//         flags={flags}
//         continent={continent}
//          />
    
//      )
//  }


export default Cards;