import Pet from "./Pet";

const Results =({ pets })=>{
    return(
     <div className="search">
        {!pets.length ? (
            <h1>no pets found :c </h1>
        ) : (
            pets.map(pet=>{
              return  <Pet
                    animal={pet.animal}
                    name={pet.name}
                    id={pet.id}
                    breed={pet.breed}
                    images={pet.images}
                    location={`${pet.city} , ${pet.state}`}
                    key={pet.id}
                 />
            })
        )}
     </div>
     

    )
}
export default Results
