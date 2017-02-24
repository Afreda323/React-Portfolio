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
  //Route to proper component depending on url '/'
  componentDidMount() {
    let route = window.location.href.split("/").pop();
    if (route == 'work') {
      this.setState({rendered: 'Work', animClass: 'forwards'});
      this.renderComp();
    }else if (route == 'contact') {
      this.setState({rendered: 'Contact', animClass: 'forwards'});
      this.renderComp();
    }else{
      this.setState({rendered: 'Home', animClass: 'forwards'});
      this.renderComp();
    }
  }
  //Render the rectangular borders around sections
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
  handleClick(e, route){
    e.preventDefault()
    this.setState({animClass: 'reverse', activeNav: route, clicked: false});
    if (route === 'work') {
      const self = this;
      setTimeout(() => {
        window.location.href = route;
        self.setState({
          rendered: 'Work',
          animClass: 'forwards',
        });
        this.renderComp();
      }, 800);
    }else if  (route === 'contact') {
      const self = this;
      setTimeout(() => {
        window.location.href = route;
        self.setState({
          rendered: 'Contact',
          animClass: 'forwards',
        });
        this.renderComp();
      }, 800);
    }else{
      const self = this;
      setTimeout(() => {
        window.location.href = '/';
        self.setState({
          rendered: 'Home',
          animClass: 'forwards',
        });
        this.renderComp();
      }, 800);
    }
  }

  // Changing the title on page leave and enter, cming soon
  //handleLeave(){
  //   setTimeout(function () {
  //     document.title = "Come Back.."
  //   }, 500);
  // }
  // handleEnter(){
  //   document.title = 'Anthony Freda | Developer';
  // }
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
          <a className="workN" href="#Work" onClick={() =>this.handleClick('work')}>Work</a>
          <a href="#" className="logo" onClick={() => this.handleClick('home')}><img src="antlogo.svg" /></a>
          <a className="contactN" href="#Contact" onClick={() => this.handleClick('contact')}>Contact</a>
        </div>
        {this.renderComp()}
      </div>
    );
  }
}

export default App;
