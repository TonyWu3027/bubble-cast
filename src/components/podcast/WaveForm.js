import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';



class WaveForm extends Component {

    constructor(){
      super();
      this.state = {
        show : false,
      }

      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
    }

  handleClose() {
    this.setState({show:false,});
  }

  handleShow() {
    this.setState({show:true,});
  }


    render(){
      return (
        <div className= "container row wave wave-container">
          {this.props.bars.map((item, index) => (
            <div className = {item.bar} key = {item+index} >
            {item.event && <div style={{position:'relative', top:-200}}>
              <button type="button" class="btn" onClick={this.handleShow}>
                <img src= {require("./"+item.src)} style={{width:330, height:150}} />
              </button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.text}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" href = {item.link}>
                    See More
                  </Button>
                </Modal.Footer>
              </Modal>


            </div>}
            </div>))}
        </div>
      );
    }



}

export default WaveForm;
