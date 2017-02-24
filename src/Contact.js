import React from 'react';
const Contact = (props) =>{
  //Basic stuff here, pretty much html
    return (
      <div className="Contact">
          <div className={`wrap ${props.animClass}`}>
            <div className="white-fill">
            </div>
            <h1 className={`${props.animClass}`}>We can make</h1>
            <h2 className={`${props.animClass}`}> stuff happen</h2>
            <hr className={`${props.animClass}`}/>
            <p className={`${props.animClass}`}>
              Dont be shy...<br />
              Reach me by <a href="mailto:anthonyfreda323@gmail.com">email</a>
              <br />
              Or feel free to message/follow me on social media <br />
              <a href="https://www.linkedin.com/in/antfreda323">
  		            <i className="fa fa-linkedin" aria-hidden="true"></i>
  		        </a>
  						<a href="https://www.instagram.com/anthonyfreda_/">
  		            <i className="fa fa-instagram" aria-hidden="true"></i>
  		        </a>
  						<a href="http://codepen.io/afreda323/">
  		            <i className="fa fa-codepen" aria-hidden="true"></i>
  		        </a>
  						<a href="https://github.com/Afreda323?tab=repositories">
  		            <i className="fa fa-github" aria-hidden="true"></i>
  		        </a>
            </p>
            <div className="onSmall">
              <a href='/' className={`btn ${props.animClass}`} onClick={(e) => props.handleClick(e, '')}>
                Go home
              </a>
              <a href='work' className={`btn ${props.animClass}`} onClick={(e) => props.handleClick(e, 'work')}>
                My work
              </a>
            </div>
            <br />
            {props.recs}
          </div>
      </div>
    );
}

export default Contact;
