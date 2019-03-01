
import React from 'react';
import { Button, Modal } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal">
          <div>
            <div></div>
            <div>
              <p>Hello World!</p>
            </div>
          </div>
        
        </Modal>
      </div>
    );
  }
}

export default ModalExample;