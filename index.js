import React from 'react';
import ReactDom from 'react-dom';
import Card from './src/app.js';


class App extends React.Component {

  render() {
    return (
      <Card
        src='http://www.media.inaf.it/wp-content/uploads/2014/02/Einstein_laughing.jpeg'
        titleSmallWord='Albert'
        titleBigWord='Einstein'
        color='tomato' />
    )
  }
}

ReactDom.render(<App /> , document.getElementById('App'));
