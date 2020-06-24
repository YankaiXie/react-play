import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld'
import ImageGallery from 'react-image-gallery';
import BurgerExample from './components/BurgerExample'
import ExampleGallery from './components/ExampleGallery'
import Adding from './components/Add'
import Button from'./components/Button'
import MyCard from'./components/Card'




  function App() {
    return (
      <div className="App">
        {/* <BurgerExample/> */}
        <HelloWorld greetings="nihao" x="5" y={5} name="Van" color="red" />
        <HelloWorld greetings="ola" x="6" y={6} name="Jimmy" color="blue" />
        <HelloWorld greetings="hola" name="Francisco" />
        <ExampleGallery />
        <Adding numberOne={1} numberTwo={2} />
        <Adding numberOne={3} numberTwo={4} />
        <Button color='pink'/>
        <MyCard/>
      </div>
    );
  }

export default App;
