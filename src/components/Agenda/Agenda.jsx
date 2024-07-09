import React, { Component } from "react";
import Modal from "./Modal";
import ReservarHora from "./ReservarHora";
import Confirmacion from "./Confirmacion.jsx";

export default class Agenda extends Component {
 
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

   modalClickHandler = (e) => {
    this.setState({ modalVisible: false });
  };
  confirm = () => {
    this.setState({ modalVisible: true });        
  };

  render() {
    return (
      <div>
        <div className="container">      
          <ReservarHora onClick={this.confirm}  /> 
        </div>   
        <Modal>{this.state.modalVisible && <Confirmacion onClick={ this.modalClickHandler }/>}</Modal>
      </div>
    );
  }
}