import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);

    // state: quản lý giá trị biến
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }
  listenToEmitter() {
    emitter.on("EVEN_CLEAR_MODAL_DATA", () => {
      //hứng event(nghe event) : emitter.on
      //reset state
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnChangeInput = (event, id) => {
    //bad code.modify state
    /**
     * this.state = {
     * email: ""
     * password: ""
     *
     * }
     * this.state.email === this.state['email]
     *
     */
    //sửa đổi state trực tiếp
    // this.state[id] = event.target.value;
    // //sau khi sửa đổi state mà phải giúp state cập nhật thì ta phải dùng this.setstate
    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad state", this.state);
    //   }
    // );
    //good code
    //copy lại state trước đấy sau đó mới modify nó
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  //validate: check xem dữ liệu đúng hay sai
  checkValidateInput = () => {
    let isValue = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValue = false;
        alert("Missing parameter" + arrInput[i]);
        break;
      }
    }
    return isValue;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //sau khi dữ liệu hợp lệ
      //call api create modal
      this.props.createNewUser(this.state);
    }
  };

  render() {
    // console.log("check child props", this.props);
    // console.log("check child open modal", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        //centered: chỉnh giữa
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "email");
                }}
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "password");
                }}
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <label>First Name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Add new
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
