import React, { Component } from 'react';
import Modal from './Modal';
import {projects, pers} from './projects';
class Work extends Component {
  constructor(props){
    super(props);
    this.state = {
      more: false,
      modalClass: 'initial',
      indexedProject: 0
    }
    this.handleMore = this.handleMore.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  //More is clicked
  handleMore(tof){
    this.setState({more: tof, clicked: true});
  }
  //Launch Modal
  handleModal(index){
    this.props.handleModal();
    this.setState({indexedProject: index})
    const self = this;
    setTimeout(function () {
      self.setState({modalClass: 'shown'});
    }, 200);
  }
  handleCloseModal(){
    this.props.handleCloseModal();
    const self = this;
    setTimeout(function () {
      self.setState({modalClass: 'hidden'});
    }, 200);
  }
  //Is more button clicked
  renderButton(){
    if (this.state.more === false) {
      return(<a onClick={() => this.handleMore(true)}>View more &rarr; </a>)
    }else{
      return (<a onClick={() => this.handleMore(false)}>&larr; View less</a>)
    }
  }
  render() {
    let from, returned, whatClass;
    //handle if animation should fire
    if (this.state.clicked === true) {
      from = 'from';
    }
    //Handle what list to show
    if (this.state.more === false) {
      whatClass = 'pro';
      returned = projects.map((project) => {
        return(
          <a
            key={project.id}
            onClick={() => this.handleModal(project.id)}>
            {project.name}
          </a>);
      });
    }else{
      whatClass = 'pers';
      returned = pers.map((per) => {
        return(<a key={per.name} target="_blank" href={per.url}>{per.name}</a>)
      });
    }
    return (
      <div className="Work">
          <div className={`wrap ${this.props.animClass}`}>
            <div className="white-fill">
            </div>
            <h1 className={`${this.props.animClass}`}>Click a project</h1>
            <h2 className={`${this.props.animClass}`}>to learn more</h2>
            <hr className={`${this.props.animClass}`}/>
            <p className={`${whatClass} ${from} ${this.props.animClass}`}>
              {returned}
              <br /><br />
              {this.renderButton()}
            </p>
            <div className="onSmall">
              <a
                href='contact'
                className={`btn ${this.props.animClass}`}
                onClick={(e) => this.props.handleClick(e, 'contact')}>
                Contact me
              </a>
              <a
                href='/'
                className={`btn ${this.props.animClass}`}
                onClick={(e) => this.props.handleClick(e, '')}>
                Go home
              </a>
            </div>
            <br />
            {this.props.recs}
          </div>
          <Modal
            modalClass={this.state.modalClass}
            projects={projects}
            indexed={this.state.indexedProject}
            handleCloseModal={this.handleCloseModal}/>
      </div>
    );
  }
}

export default Work;
