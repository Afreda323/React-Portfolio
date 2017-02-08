import React from 'react';

const Modal = (props) => {
  let indexed = props.indexed;
  let pro = props.projects;
  //let animation fire before link
  function goTo(){
    setTimeout(function () {
      window.open(pro[indexed].url);
    }, 600);
  };
  return(
  <div className="modal-wrap">
    <a className={`close btn ${props.modalClass}`} onClick={() => props.handleCloseModal()}>Close</a>
    <div className={`modal ${props.modalClass}`}>
      <h1>{pro[indexed].name}</h1>
      <hr style={{marginLeft: 0}} />
      <div className="flexed">
        <div className="left-div">
          <img src={pro[indexed].img} className="portimg"/>
        </div>
        <div className="right-div">
          <h3 className="blue">Problem:</h3><p>{pro[indexed].problem}</p>
          <h3 className="blue">Solution:</h3><p>{pro[indexed].solution}</p>
          <h3 className="blue">Tools:</h3><p>{pro[indexed].tools}</p>
          <a onClick={() => {props.handleCloseModal(); goTo()}} target="_blank" className="btn">Visit Site</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Modal;
