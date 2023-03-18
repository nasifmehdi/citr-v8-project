import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return React.createElement("div", { id: "myid", className: "myclass" }, [
    React.createElement(Pet, {
      name: "dogo",
      breed: "jack russel",
      color: "black",
    }),
    React.createElement(Pet, {
      name: "mizu",
      breed: "jack russel",
      color: "gold",
    }),
    React.createElement(Pet, {
      name: "doki",
      breed: "saint bernard",
      color: "white",
    }),
  ]);
};

const Pet = (obj) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, obj.name),
    React.createElement("h2", {}, obj.color),
    React.createElement("h2", {}, obj.breed),
  ]);
};

const root = document.querySelector('#root');
const React_DOM = ReactDOM.createRoot(root);
const element = React.createElement(App);
React_DOM.render(element);
