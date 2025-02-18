import React, { Component } from "react";
import { connect } from "react-redux";
// import "./About.scss";

//giúp chuyển đổi qua lại giữa các ngôn ngữ
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-About">
        <div className="section-about-header">
          Truyền thông nói về Channel Hỏi dân IT
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/VznptsZ9QZU?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
              title="#0 Tại Sao Lại Chọn Website Developer | Những Điều Bạn Cần Biết Để Dấn Thân Vào Con Đường Này"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Ngày mình còn là sinh viên, đi học tại giảng đường đại học, có rất
              nhiều câu hỏi mà các thầy cô không giúp mình trả lời được, ví dụ
              như "Để trở thành một lập trình viên website thì cần học những
              gì", hay một câu hỏi đơn giản hơn, "Học công nghệ thông tin, ra
              trường thường làm những gì ? "...{" "}
            </p>
            <p>
              Trong video này, mình sẽ giải thích một cách ngắn gọn những kiến
              thức mà bạn cần biết để trở thành 1 web developer, cũng như trả
              lời câu hỏi, "Tại sao mình lại chọn web developer, thay vì app
              developer, or game developer? (làm ứng dụng di động và làm game).
            </p>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
