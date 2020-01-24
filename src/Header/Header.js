import React, { Component } from 'react';
import './Header.css';

class App extends Component {
   render() {
      return (
         <div class="header">
            <a href="#default" class="logo">Suraj Kamdi</a>
            <div class="header-right">
               <a class="active" href="#home">Home</a>
               <a href="#contact">Blogs</a>
               <a href="#about">Contact</a>
            </div>
         </div>
      );
   }
}
export default App;