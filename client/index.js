import React from 'react';
import { render } from 'react-dom';
import './fake-hmr';

const ExampleComponent = () => {
  return <div>
    <h1>This is my express template!</h1>
    <p>I wanted to make it super simple to be able to make an app, so I made this barebones express template. No views, nothing but webpack and a fast render. You can edit me if you go to `client/index.js`.</p>
  </div>
}

render(<ExampleComponent />, document.getElementById('app'));
