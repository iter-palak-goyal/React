import React from 'react'
import ComponentRTK from './RTK/ComponentRTK'
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
// import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';
// import { Provider } from 'redux';
const App = () => {
  return (
    <div>
      {/* <Provider store={store}>
    <Component2/>
    <Component1/>
      </Provider> */}
      <ComponentRTK></ComponentRTK>
    </div>
  )
}
export default App
//npm install redux react-redux redux-thunk axios json-server