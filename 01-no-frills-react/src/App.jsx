import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from './Details';
import SearchParams from './SearchParams';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

/*const App = () => {
 return( <div>
  <h1>Adopt Me!</h1>
  <Pet name="Luna" animal="dog" breed="Havanese" />
  <Pet name="Pepper" animal="bird" breed="Cockatiel" />
  <Pet name="Doink" animal="cat" breed="Mix" />
</div>

 )
}*/

const App = () =>{
  const adoptedPet = useState(null);
  return (
  <BrowserRouter>

  <QueryClientProvider client={queryClient}>
   
  <AdoptedPetContext.Provider value={adoptedPet}>
  <header>
    <Link to='/'>Adopt Me!</Link>
  </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchParams />} />
    </Routes>
  </AdoptedPetContext.Provider>
  
  </QueryClientProvider>
  
  </BrowserRouter>
  )
}



const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
