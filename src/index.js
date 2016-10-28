import React from 'react';
import ReactDom from 'react-dom';
import Card from './app.js';


class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Card
          src='http://www.media.inaf.it/wp-content/uploads/2014/02/Einstein_laughing.jpeg'
          titleSmallWord='Albert'
          titleBigWord='Einstein'
          color='tomato'>
          Albert Einstein was a German-born theoretical physicist. He developed the general theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science.
        </Card>

        <Card
          src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg'
          titleSmallWord='Steve'
          titleBigWord='Jobs'
          color='yellow'>
          Steven Paul 'Steve' Jobs was an American information technology entrepreneur and inventor. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar Animation Studios; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT Inc.
        </Card>

        <Card
          src='http://images.uncyc.org/pt/0/04/Linus_Torvalds.jpg'
          titleSmallWord='Linus'
          titleBigWord='Torvalds'>
          Linus Benedict Torvalds, born December 28, 1969, is a Finnish software engineer, American naturalized, who is the creator and, for a long time, principal developer, of the Linux kernel, which became the kernel for operating systems (and many distributions of each) such as GNU and years later Android and Chrome OS. He also created the distributed revision control system git.
        </Card>
      </div>
    )
  }
}

ReactDom.render(<App /> , document.getElementById('App'));
