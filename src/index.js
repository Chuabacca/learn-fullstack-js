import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'lavender' : 'fuchsia';

ReactDOM.render(
    <h2 style={{color}}>
      Hello from React with JSX
    </h2>,
    document.getElementById('root')
);
