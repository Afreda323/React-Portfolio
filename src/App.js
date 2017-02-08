import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rendered: 'Home',
      animClass: 'forwards',
      activeNav: 'home',
      //passed down for animation of projects
      clicked: false,
      hideNav: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  renderRectangles(){
    return(
      <div>
      <div className={`top ${this.state.animClass}`}>
      </div>
      <div className={`top-left ${this.state.animClass}`}>
      </div>
      <div className={`bottom-left ${this.state.animClass}`}>
      </div>
      <div className={`left ${this.state.animClass}`}>
      </div>
      <div className={`bottom ${this.state.animClass}`}>
      </div>
      <div className={`right ${this.state.animClass}`}>
      </div>
    </div>
    );
  }
  //Handle the click of nav items
  //Take the passed route and render it to the DOM
  handleClick(route){
    this.setState({animClass: 'reverse', activeNav: route, clicked: false});
    if (route === 'work') {
      document.querySelector('.workN').className= "workN active";
      document.querySelector('.contactN').className= "contactN";
      const self = this;
      setTimeout(() => {
        self.setState({rendered: 'Work', animClass: 'forwards'});
        this.renderComp();
      }, 1000);
    }else if  (route === 'contact') {
      document.querySelector('.workN').className= "workN";
      document.querySelector('.contactN').className= "contactN active";
      const self = this;
      setTimeout(() => {
        self.setState({rendered: 'Contact', animClass: 'forwards'});
        this.renderComp();
      }, 1000);
    }else if (route === 'home') {
      document.querySelector('.workN').className= "workN";
      document.querySelector('.contactN').className= "contactN";
      const self = this;
      setTimeout(() => {
        self.setState({rendered: 'Home', animClass: 'forwards'});
        this.renderComp();
      }, 1000);
    }
  }
  //Run the DOM animations and hide the nav
  //Open Modal
  handleModal(){
    this.setState({animClass: 'reverse', hideNav: true});
  }
  //Run the DOM animations and show the nav
  //close Modal
  handleCloseModal(){
    const self = this;
    setTimeout(function () {
      self.setState({animClass: 'forwards', hideNav: false});
    }, 600);
  }
  //Render the component based on selected NAV item
  renderComp(){
    if (this.state.rendered === 'Home') {
      return <Home
        handleClick={this.handleClick}
        animClass={this.state.animClass}
        recs={this.renderRectangles()}/>
    }else if (this.state.rendered === 'Work') {
      return <Work
        recs={this.renderRectangles()}
        handleClick={this.handleClick}
        animClass={this.state.animClass}
        clicked={this.state.clicked}
        handleModal={this.handleModal}
        handleCloseModal={this.handleCloseModal}/>
    }else if (this.state.rendered === 'Contact') {
      return <Contact
        recs={this.renderRectangles()}
        handleClick={this.handleClick}
        animClass={this.state.animClass}/>
    }
  }
  render() {
    //Handle nav hiding/showing
    let navClass;
    if (this.state.hideNav === true) {
      navClass = 'nav hidden';
    }else{
      navClass = 'nav';
    }
    return (
      <div>
        <div className={navClass}>
          <a className="workN" href="#" onClick={() =>this.handleClick('work')}>Work</a>
          <a href="#" className="logo" onClick={() => this.handleClick('home')}><img src="antlogo.svg" /></a>
          <a className="contactN" href="#" onClick={() => this.handleClick('contact')}>Contact</a>
        </div>
        {this.renderComp()}
      </div>
    );
  }
}

export default App;
