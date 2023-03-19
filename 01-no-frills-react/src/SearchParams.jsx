/* eslint-disable  */
import React, { useEffect, useState } from "react";
const ANIMALS = ['bird','cat','dog','rabbit','reptile']
const breeds=['havanese','saint bernard','jack russel','douberman','rottweiler']
const SearchParams = () =>{
    //const location = "Seattle , WA";
    const [location,setLocation] = useState('')
    const [animal,setAnimal]= useState(' ')
    const [breed,setBreed]= useState(' ')
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
        </div>
    )

}
export default SearchParams;