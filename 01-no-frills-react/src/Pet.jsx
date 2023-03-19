import React from 'react';

 const Pet =(obj) =>{
    return(
        <div>
            <h1>{obj.name}</h1>
            <h2>{obj.breed}</h2>
            <h2>{obj.color}</h2>
        </div>
    )
 }
 export default Pet