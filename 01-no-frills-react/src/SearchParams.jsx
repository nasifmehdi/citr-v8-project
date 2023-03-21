/* eslint-disable  */
/*
import React, { useEffect, useState } from "react";
import Pet from './Pet'
const ANIMALS = ['bird','cat','dog','rabbit','reptile']
const breeds=['havanese','saint bernard','jack russel','douberman','rottweiler']
const SearchParams = () =>{
    //const location = "Seattle , WA";
    const [location,setLocation] = useState('')
    const [animal,setAnimal]= useState(' ')
    const [breed,setBreed]= useState(' ')
    const [pets,setPets]=useState([])
    useEffect(()=>{
        requestPets()
    },[])
    async function requestPets(){
        const response = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const data = await response.json();
        setPets(data.pets);

    }
    return(
        <div className="search-params">
              
         <form>
         <img src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"></img>
            <label htmlFor=" location">
                location
                <input
                onChange={ e =>{setLocation(e.target.value)}}
                id="location" value ={location} placeholder='location' />

            </label>
            <label htmlFor="animal">
                animal
                <select  id="animal"
                value={animal}
                onChange={e => {
                    setAnimal(e.target.value)
                    setBreed(' ')}}>

                    <option />{ANIMALS.map(animal => (
                        <option key={animal}>{animal}</option>
                    ))}
                </select>
            </label>
            <label htmlFor="breed">
                breed
                <select  id="breed"
                value={breed}
                onChange={e => {setBreed(e.target.value)}}>

                    <option />{breeds.map(breed => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
            </label>
         
            <button>submit</button>
         </form>
          
         {pets.map((pet)=> (
                <Pet name={pet.name} 
                animal={pet.animal}
                breed={pet.breed} 
                key={pet.id}
                 />
           ))
         }
           
          
          
        </div>
    )
}

export default SearchParams;
*/
import React, {  useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
//import Pet from './Pet'
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
 
  //const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  //const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  //const [pets, setPets] = useState([]);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
const pets = results?.data?.pets ?? [];
 
 
  
  return (
    <div className="search-params">
      <form onSubmit={(e) =>{e.preventDefault();
const formData = new FormData(e.target);
const obj = {
  animal: formData.get("animal") ?? "",
  breed: formData.get("breed") ?? "",
  location: formData.get("location") ?? "",
};
setRequestParams(obj)}}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            name='location'
            placeholder="Location"
            
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              
            }}

          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
           name='breed'
            
            
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParams;