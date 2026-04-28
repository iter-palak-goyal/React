import {createRoot} from 'react-dom/client'
import App from './app';

let x = document.getElementById("root")
console.log(x)

createRoot(document.getElementById('root')).render(<h1>Hi, This is my 2nd day of React </h1> );


createRoot(document.getElementById('root')).render(<App/>);
