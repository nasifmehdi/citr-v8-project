import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Pet from './Pet'
import Details from './Details';
import SearchParams from './SearchParams';

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
  return (<BrowserRouter>
    <h1>Adopt Me!</h1>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<SearchParams />} />
    </Routes>
  </BrowserRouter>
  )
}


const root = document.querySelector('#root');
const React_DOM = ReactDOM.createRoot(root);
const element = React.createElement(App);
React_DOM.render(element);
/*const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
*/