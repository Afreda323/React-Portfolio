import React from 'react';

//Basic stuff here, render the home Component
const Home = (props) => {
    return (
      <div className="Home">
          <div className={`wrap ${props.animClass}`}>
            <div className="white-fill">
            </div>
            <h1 className={`${props.animClass}`}>Anthony Freda</h1>
            <h2 className={`${props.animClass}`}>Web Developer</h2>
            <hr className={`${props.animClass}`}/>
            <p className={`${props.animClass}`}>I am a web developer located in <span className="blue">Charlotte, NC</span> and I am always looking into taking on new projects</p>
            <br />
            <br />
            <a className={`btn ${props.animClass}`} onClick={() => props.handleClick('work')}>
              My work
            </a>
            <a className={`btn ${props.animClass}`} onClick={() => props.handleClick('contact')}>
              Contact me
            </a>
            {props.recs}
            <div className="git">
              <p className={props.animClass}>
                <a href="https://github.com/Afreda323/React-Portfolio" target="_blank">View source on GitHub</a>
              </p>
            </div>
          </div>
      </div>
    );
}

export default Home;
