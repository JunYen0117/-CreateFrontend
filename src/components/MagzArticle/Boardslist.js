import Board from './Board';
import React from 'react';

class Boardslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="container">
          {this.props.comments.map((element, i) => {
            return <Board key={i} element={element} />;
          })}
        </div>
      </>
    );
  }
}

export default Boardslist;
