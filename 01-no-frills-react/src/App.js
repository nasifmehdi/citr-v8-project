const App = () =>{
  return React.createElement('div',{id:'myid', className:'myclass'},
  React.createElement('h1',{},'Hello React!'
  ))
}

const root = document.getElementById('root')
const React_DOM = ReactDOM.createRoot(root)
const React_Function=React.createElement(App)
React_DOM.render(React_Function)

