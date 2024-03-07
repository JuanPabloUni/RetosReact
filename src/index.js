import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Formulario from './Formulario';
import Timer from './Timer';
import Password from './Password'
import RickAndMorty from './RickAndMorty';
import RickAndMorty2 from './RickAndMorty2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

root.render(<Formulario />);

root.render(<Timer />);

root.render(<Password />);

root.render(<RickAndMorty />)

root.render(<RickAndMorty2 />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
