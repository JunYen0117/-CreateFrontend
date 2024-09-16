import React from 'react';
import { withRouter } from 'react-router-dom';

// 頁面切換時要用捲軸讓頁面回到最上方
class ChangeStartFlag extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.setStart(false);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ChangeStartFlag);
