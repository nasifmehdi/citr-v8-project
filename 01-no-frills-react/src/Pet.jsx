/*import React from 'react';

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
*/
 const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;
  
    let placeholder = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
      placeholder = images[0];
    }
  
    return (
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={placeholder} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </a>
    );
  };
  
  export default Pet;