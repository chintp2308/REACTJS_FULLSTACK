import React, { Component } from "react";
import { connect } from "react-redux";
// import "./HomeFooter.scss";

//giúp chuyển đổi qua lại giữa các ngôn ngữ
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2024 Phương Chi. More information, please visit my github.{" "}
          <a target="_blank" href="https://github.com/chintp2308">
            &#8594; Click here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
